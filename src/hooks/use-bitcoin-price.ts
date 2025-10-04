import { useQuery } from '@tanstack/react-query';

interface BitcoinPriceResponse {
  bitcoin: {
    usd: number;
  };
}

/**
 * Fetches the current Bitcoin price in USD from CoinGecko API
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
 * Hook to get current Bitcoin price in USD
 * Refetches every 5 minutes to keep price relatively current
 */
export const useBitcoinPrice = () => {
  return useQuery({
    queryKey: ['bitcoinPrice'],
    queryFn: fetchBitcoinPrice,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
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
