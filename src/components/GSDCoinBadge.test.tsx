import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GSDCoinBadge } from './GSDCoinBadge'

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
})

const renderWithQueryClient = (component: React.ReactElement) => {
  const queryClient = createTestQueryClient()
  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  )
}

describe('GSDCoinBadge', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the badge with correct link and title', () => {
    mockFetch.mockResolvedValue({
      ok: false,
    })

    renderWithQueryClient(<GSDCoinBadge />)

    const link = screen.getByRole('link', { name: 'View $GSD Coin on Pump.fun' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://pump.fun/coin/DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveAttribute('title', 'Watch me code live & join the $GSD community')
  })

  it('displays loading state initially', () => {
    mockFetch.mockImplementation(() => new Promise(() => {})) // Never resolves

    renderWithQueryClient(<GSDCoinBadge />)

    expect(screen.getByText('$GSD Coin')).toBeInTheDocument()
    expect(screen.getByText('Loading price...')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading current price')).toBeInTheDocument()
  })

  it('displays price from Jupiter API', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 0.00123,
            priceChange24h: 5.25
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    expect(screen.getByText('$0.001230')).toBeInTheDocument()
    expect(screen.getByText('+5.25%')).toBeInTheDocument()
    expect(screen.getByText('LIVE')).toBeInTheDocument()
    expect(screen.getByLabelText('Live price indicator')).toBeInTheDocument()
  })

  it('falls back to DexScreener API when Jupiter fails', async () => {
    mockFetch
      .mockResolvedValueOnce({
        ok: false,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          pairs: [{
            priceUsd: '0.00456',
            priceChange: {
              h24: '-2.5'
            }
          }]
        })
      })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    expect(screen.getByText('$0.004560')).toBeInTheDocument()
    expect(screen.getByText('-2.50%')).toBeInTheDocument()
  })

  it('displays error state when both APIs fail', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitFor(() => {
      expect(screen.getByText('View on Pump.fun →')).toBeInTheDocument()
    })
  })

  it('formats very small prices correctly', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 0.0000000123,
            priceChange24h: 0
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    expect(screen.getByText('$1.23e-8')).toBeInTheDocument()
  })

  it('formats zero price correctly', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 0,
            priceChange24h: 0
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    expect(screen.getByText('$0.00')).toBeInTheDocument()
  })

  it('formats medium prices correctly', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 1.23456,
            priceChange24h: 0
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    expect(screen.getByText('$1.2346')).toBeInTheDocument()
  })

  it('shows green text for positive price change', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 0.001,
            priceChange24h: 10.5
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    const changeElement = screen.getByText('+10.50%')
    expect(changeElement).toHaveClass('text-green-200')
  })

  it('shows red text for negative price change', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 0.001,
            priceChange24h: -5.75
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    const changeElement = screen.getByText('-5.75%')
    expect(changeElement).toHaveClass('text-red-200')
  })

  it('does not show price change when it is zero', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 0.001,
            priceChange24h: 0
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    expect(screen.getByText('$0.001000')).toBeInTheDocument()
    // Should not show 0% change
    expect(screen.queryByText('0.00%')).not.toBeInTheDocument()
    expect(screen.queryByText('+0.00%')).not.toBeInTheDocument()
  })

  it('does not show price change when it is undefined', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 0.001
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    expect(screen.getByText('$0.001000')).toBeInTheDocument()
    // Should not show percentage
    expect(screen.queryByText(/%/)).not.toBeInTheDocument()
  })

  it('has proper ARIA labels for accessibility', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump: {
            price: 0.00123,
            priceChange24h: 5.25
          }
        }
      })
    })

    renderWithQueryClient(<GSDCoinBadge />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading price...'))

    expect(screen.getByLabelText('Current price: $0.001230')).toBeInTheDocument()
    expect(screen.getByLabelText('24 hour change: up 5.25 percent')).toBeInTheDocument()
  })

  it('sets aria-hidden on decorative icons', () => {
    mockFetch.mockResolvedValue({
      ok: false,
    })

    renderWithQueryClient(<GSDCoinBadge />)

    const icons = screen.getByRole('link').querySelectorAll('svg')
    icons.forEach(icon => {
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    })
  })

  it('handles fetch timeout gracefully', async () => {
    mockFetch.mockRejectedValue(new Error('Timeout'))

    renderWithQueryClient(<GSDCoinBadge />)

    await waitFor(() => {
      expect(screen.getByText('View on Pump.fun →')).toBeInTheDocument()
    })
  })

  it('uses design tokens for styling', () => {
    mockFetch.mockResolvedValue({
      ok: false,
    })

    renderWithQueryClient(<GSDCoinBadge />)

    const link = screen.getByRole('link')
    expect(link.className).toContain('rounded-lg') // borderRadius.lg
    expect(link.className).toContain('shadow-sm') // shadows.buttonEffect
    expect(link.className).toContain('transition-all') // animations.transition
  })
})
