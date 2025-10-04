import { Coins, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { shadows, borderRadius, animations } from "@/lib/design-tokens";

interface JupiterPriceResponse {
  data: {
    [key: string]: {
      price: number;
      priceChange24h?: number;
    };
  };
}

interface DexScreenerResponse {
  pairs: Array<{
    priceUsd?: string;
    priceChange?: {
      h24?: string;
    };
  }>;
}

interface TokenPrice {
  price: number;
  priceChange24h?: number;
}

const MINT_ADDRESS = "DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump";
const PUMP_FUN_URL = `https://pump.fun/coin/${MINT_ADDRESS}`;

const fetchWithTimeout = async (url: string, timeout = 5000): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

const fetchGSDPrice = async (): Promise<TokenPrice> => {
  // Try Jupiter aggregator API first
  try {
    const jupiterResponse = await fetchWithTimeout(
      `https://price.jup.ag/v6/price?ids=${MINT_ADDRESS}`
    );

    if (jupiterResponse.ok) {
      const jupiterData: JupiterPriceResponse = await jupiterResponse.json();
      if (jupiterData.data && jupiterData.data[MINT_ADDRESS]) {
        const tokenData = jupiterData.data[MINT_ADDRESS];
        return {
          price: tokenData.price,
          priceChange24h: tokenData.priceChange24h
        };
      }
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("Jupiter API error:", error);
    }
  }

  // Fallback to DexScreener
  try {
    const dexResponse = await fetchWithTimeout(
      `https://api.dexscreener.com/latest/dex/tokens/${MINT_ADDRESS}`
    );

    if (dexResponse.ok) {
      const dexData: DexScreenerResponse = await dexResponse.json();
      if (dexData.pairs && dexData.pairs.length > 0) {
        const pair = dexData.pairs[0];
        return {
          price: parseFloat(pair.priceUsd || "0"),
          priceChange24h: parseFloat(pair.priceChange?.h24 || "0")
        };
      }
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("DexScreener API error:", error);
    }
  }

  throw new Error("Unable to fetch $GSD price from any source");
};

const formatPrice = (price: number): string => {
  if (price === 0) return "$0.00";
  if (price < 0.000001) return `$${price.toExponential(2)}`;
  if (price < 0.01) return `$${price.toFixed(6)}`;
  return `$${price.toFixed(4)}`;
};

export const GSDCoinBadge = () => {
  const { data: price, isLoading, isError } = useQuery({
    queryKey: ['gsd-price', MINT_ADDRESS],
    queryFn: fetchGSDPrice,
    refetchInterval: 30000,
    staleTime: 25000,
  });

  return (
    <a
      href={PUMP_FUN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full sm:w-auto flex-col gap-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-left ${borderRadius.lg} hover:from-purple-700 hover:to-pink-700 ${animations.transition} ${shadows.buttonEffect} group`}
      title="Watch me code live & join the $GSD community"
      aria-label="View $GSD Coin on Pump.fun"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Coins className="h-4 w-4" aria-hidden="true" />
          <span className="font-semibold">$GSD Coin</span>
        </div>
        {!isLoading && !isError && price && (
          <div className="flex items-center gap-1" aria-label="Live price indicator">
            <TrendingUp className="h-3 w-3" aria-hidden="true" />
            <span className="text-xs opacity-90">LIVE</span>
          </div>
        )}
      </div>

      {isLoading && (
        <div
          className="text-xs opacity-75 animate-pulse"
          role="status"
          aria-live="polite"
          aria-label="Loading current price"
        >
          Loading price...
        </div>
      )}

      {!isLoading && !isError && price && (
        <div className="flex items-center gap-2 text-xs">
          <span
            className="font-mono font-semibold"
            aria-label={`Current price: ${formatPrice(price.price)}`}
          >
            {formatPrice(price.price)}
          </span>
          {price.priceChange24h !== undefined && price.priceChange24h !== 0 && (
            <span
              className={`font-medium ${price.priceChange24h > 0 ? 'text-green-200' : 'text-red-200'}`}
              aria-label={`24 hour change: ${price.priceChange24h > 0 ? 'up' : 'down'} ${Math.abs(price.priceChange24h).toFixed(2)} percent`}
            >
              {price.priceChange24h > 0 ? '+' : ''}{price.priceChange24h.toFixed(2)}%
            </span>
          )}
        </div>
      )}

      {!isLoading && isError && (
        <div className="text-xs opacity-75" aria-label="View on Pump.fun">
          View on Pump.fun →
        </div>
      )}
    </a>
  );
};
