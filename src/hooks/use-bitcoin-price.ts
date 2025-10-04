import { useQuery } from '@tanstack/react-query';

interface BitcoinPriceResponse {
  bitcoin: {
    usd: number;
  };
}

// Refresh Bitcoin price every 5 minutes
const BTC_PRICE_REFRESH_INTERVAL_MS = 5 * 60 * 1000;

/**
 * Fetches the current Bitcoin price in USD from CoinGecko API.
 *
 * @throws Error if the API request fails or returns invalid data
 *
 * @remarks
 * **Rate Limiting:** CoinGecko's free tier has rate limits (10-50 requests/minute).
 * This implementation uses React Query caching to minimize API calls. Each price
 * is cached for 5 minutes and shared across all components in the app.
 *
 * For production with high traffic, consider:
 * - Using CoinGecko Pro API with an API key
 * - Implementing server-side caching
 * - Adding a fallback price source
 */
const fetchBitcoinPrice = async (): Promise<number> => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Bitcoin price');
  }

  const data: BitcoinPriceResponse = await response.json();

  // Validate response structure
  if (!data.bitcoin || typeof data.bitcoin.usd !== 'number') {
    throw new Error('Invalid Bitcoin price response structure');
  }

  return data.bitcoin.usd;
};

/**
 * Hook to get current Bitcoin price in USD with automatic refresh.
 *
 * @returns React Query result with Bitcoin price data, loading, and error states
 *
 * @example
 * ```tsx
 * const { data: btcPrice, isLoading, error } = useBitcoinPrice();
 *
 * if (isLoading) return <Skeleton />;
 * if (error) return <div>Showing BTC pricing only</div>;
 *
 * const usdPrice = btcToUsd(0.05, btcPrice);
 * ```
 *
 * @remarks
 * - Refetches every 5 minutes to keep price current
 * - Caches results across all components (React Query)
 * - Retries up to 3 times on failure
 * - Returns error state for graceful fallback handling
 */
export const useBitcoinPrice = () => {
  return useQuery({
    queryKey: ['bitcoinPrice'],
    queryFn: fetchBitcoinPrice,
    staleTime: BTC_PRICE_REFRESH_INTERVAL_MS,
    refetchInterval: BTC_PRICE_REFRESH_INTERVAL_MS,
    retry: 3,
  });
};

/**
 * Converts BTC amount to USD
 */
export const btcToUsd = (btcAmount: number, btcPriceUsd: number): number => {
  return btcAmount * btcPriceUsd;
};

/**
 * Formats USD amount as currency string
 */
export const formatUsd = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
