import { useState, useEffect } from "react";
import { Coins, TrendingUp } from "lucide-react";

interface TokenPrice {
  price: number;
  priceChange24h?: number;
}

export const GSDCoinBadge = () => {
  const [price, setPrice] = useState<TokenPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const MINT_ADDRESS = "DwEsTivDimbExt2z6SxDoJAuTJX3F23frK5cHAQHpump";
  const PUMP_FUN_URL = `https://pump.fun/coin/${MINT_ADDRESS}`;

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // Try Jupiter aggregator API first
        const jupiterResponse = await fetch(
          `https://price.jup.ag/v6/price?ids=${MINT_ADDRESS}`
        );

        if (jupiterResponse.ok) {
          const jupiterData = await jupiterResponse.json();
          if (jupiterData.data && jupiterData.data[MINT_ADDRESS]) {
            const tokenData = jupiterData.data[MINT_ADDRESS];
            setPrice({
              price: tokenData.price,
              priceChange24h: tokenData.priceChange24h
            });
            setLoading(false);
            return;
          }
        }

        // If Jupiter doesn't have it, try DexScreener
        const dexResponse = await fetch(
          `https://api.dexscreener.com/latest/dex/tokens/${MINT_ADDRESS}`
        );

        if (dexResponse.ok) {
          const dexData = await dexResponse.json();
          if (dexData.pairs && dexData.pairs.length > 0) {
            const pair = dexData.pairs[0];
            setPrice({
              price: parseFloat(pair.priceUsd || "0"),
              priceChange24h: parseFloat(pair.priceChange?.h24 || "0")
            });
            setLoading(false);
            return;
          }
        }

        // If no price data found, just show the link
        setError(true);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching $GSD price:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchPrice();
    // Refresh price every 30 seconds
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    if (price === 0) return "$0.00";
    if (price < 0.000001) return `$${price.toExponential(2)}`;
    if (price < 0.01) return `$${price.toFixed(6)}`;
    return `$${price.toFixed(4)}`;
  };

  return (
    <a
      href={PUMP_FUN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-col gap-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-sm hover:shadow-md group"
      title="Watch me code live & join the $GSD community"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Coins className="h-4 w-4" />
          <span className="font-semibold">$GSD Coin</span>
        </div>
        {!loading && !error && price && (
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            <span className="text-xs opacity-90">LIVE</span>
          </div>
        )}
      </div>

      {loading && (
        <div className="text-xs opacity-75 animate-pulse">Loading price...</div>
      )}

      {!loading && !error && price && (
        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono font-semibold">{formatPrice(price.price)}</span>
          {price.priceChange24h !== undefined && price.priceChange24h !== 0 && (
            <span className={`font-medium ${price.priceChange24h > 0 ? 'text-green-200' : 'text-red-200'}`}>
              {price.priceChange24h > 0 ? '+' : ''}{price.priceChange24h.toFixed(2)}%
            </span>
          )}
        </div>
      )}

      {!loading && error && (
        <div className="text-xs opacity-75">View on Pump.fun →</div>
      )}
    </a>
  );
};
