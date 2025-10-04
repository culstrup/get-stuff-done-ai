import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useBitcoinPrice, btcToUsd, formatUsd } from './use-bitcoin-price';

// Mock fetch globally
global.fetch = vi.fn();

describe('useBitcoinPrice', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false, // Disable retries for faster tests
        },
      },
    });
    vi.clearAllMocks();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('fetches Bitcoin price successfully', async () => {
    const mockPrice = 95000;
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ bitcoin: { usd: mockPrice } }),
    });

    const { result } = renderHook(() => useBitcoinPrice(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toBe(mockPrice);
  });

  it('handles API errors gracefully', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const { result } = renderHook(() => useBitcoinPrice(), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error).toBeTruthy();
  });

  it('validates response structure', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ invalid: 'data' }),
    });

    const { result } = renderHook(() => useBitcoinPrice(), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error).toBeTruthy();
  });

  it('rejects unreasonably low prices', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ bitcoin: { usd: 100 } }), // Way too low
    });

    const { result } = renderHook(() => useBitcoinPrice(), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error?.message).toContain('outside reasonable range');
  });

  it('rejects unreasonably high prices', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ bitcoin: { usd: 1000000 } }), // Way too high
    });

    const { result } = renderHook(() => useBitcoinPrice(), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error?.message).toContain('outside reasonable range');
  });

  it('handles network errors', async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useBitcoinPrice(), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error).toBeTruthy();
  });
});

describe('btcToUsd', () => {
  it('converts BTC to USD correctly', () => {
    expect(btcToUsd(1, 95000)).toBe(95000);
    expect(btcToUsd(0.05, 95000)).toBe(4750);
    expect(btcToUsd(0.5, 100000)).toBe(50000);
  });

  it('handles zero and negative values', () => {
    expect(btcToUsd(0, 95000)).toBe(0);
    expect(btcToUsd(-1, 95000)).toBe(-95000);
  });
});

describe('formatUsd', () => {
  it('formats USD amounts correctly', () => {
    expect(formatUsd(95000)).toBe('$95,000');
    expect(formatUsd(4750)).toBe('$4,750');
    expect(formatUsd(1000000)).toBe('$1,000,000');
  });

  it('handles zero and decimal values', () => {
    expect(formatUsd(0)).toBe('$0');
    expect(formatUsd(123.45)).toBe('$123'); // No decimals per config
  });

  it('handles negative values', () => {
    expect(formatUsd(-100)).toBe('-$100');
  });
});
