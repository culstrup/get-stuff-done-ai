
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServiceType } from "./types";
import { ServiceFeaturesList } from "./ServiceFeaturesList";
import { animations, shadows, typography, borderRadius, gradients } from "@/lib/design-tokens";
import { useBitcoinPrice, btcToUsd, formatUsd } from "@/hooks/use-bitcoin-price";

interface ServiceCardProps {
  service: ServiceType;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { data: btcPrice, isLoading: btcLoading, error: btcError } = useBitcoinPrice();

  // Calculate USD equivalent if BTC price is available
  const getUsdEquivalent = (btcAmount?: number) => {
    if (!btcAmount || !btcPrice) return null;
    return formatUsd(btcToUsd(btcAmount, btcPrice));
  };

  return (
    <Card className={`group flex flex-col justify-between ${shadows.floating} hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ${borderRadius.xl} relative overflow-hidden border-0 ring-1 ring-gray-200/50 hover:ring-secondary/30`}>
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
        <CardDescription className="mt-2">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        {service.extraText && (
          <p className="mb-4 text-gray-700 bg-secondary/5 p-3 rounded-md border border-secondary/10 text-sm">
            <strong className="text-secondary">ROI: </strong>
            {service.extraText}
          </p>
        )}
        <ServiceFeaturesList features={service.features} />
        <div className="mt-6">
          {/* Show USD as primary, BTC as secondary */}
          {service.btcPrice && !btcLoading && getUsdEquivalent(service.btcPrice) ? (
            <>
              <p className="text-xl font-bold text-primary">{getUsdEquivalent(service.btcPrice)}</p>
              <p className="text-sm text-gray-600 mt-1">(<span aria-label="Bitcoin">₿</span>{service.btcPrice})</p>
            </>
          ) : (
            <p className="text-xl font-bold text-primary">
              {service.price.includes('BTC') ? (
                <>
                  {service.price.split('BTC')[0]}<span aria-label="Bitcoin">₿</span>{service.price.split('BTC')[1]}
                </>
              ) : (
                service.price
              )}
            </p>
          )}
          {btcError && service.btcPrice && (
            <p className="text-xs text-amber-600 mt-1">
              ⚠️ Unable to load current exchange rates
            </p>
          )}
          {service.subtext && (
            <p className="text-sm text-gray-500 mt-1">{service.subtext}</p>
          )}

          {/* Display pricing tiers if available */}
          {service.pricingTiers && service.pricingTiers.length > 0 && (
            <div className="mt-4 space-y-3">
              {service.pricingTiers.map((tier, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{tier.label}</p>
                      {tier.description && (
                        <p className="text-xs text-gray-600 mt-0.5">{tier.description}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-secondary">{tier.price.replace(/BTC/, '₿')}</p>
                      {tier.btcPrice && !btcLoading && getUsdEquivalent(tier.btcPrice) && (
                        <p className="text-xs text-gray-600 mt-0.5">≈ {getUsdEquivalent(tier.btcPrice)}</p>
                      )}
                      {tier.availability && (
                        <p className="text-xs text-gray-500 mt-0.5">{tier.availability}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex flex-col gap-3 relative z-10">
        {service.learnMoreLink && (
          <Link to={service.learnMoreLink} className="w-full">
            <Button 
              className={`w-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-base py-6 ${typography.touchTargets.button} flex items-center gap-2 ${shadows.buttonEffect} hover:shadow-lg hover:shadow-secondary/20`}
            >
              Learn More
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        )}
        
        <Button 
          variant="outline"
          className={`w-full border border-primary text-primary hover:bg-primary/10 gap-2 ${typography.touchTargets.button} ${shadows.buttonEffect} hover:border-primary/70`}
          onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
        >
          <Calendar className="h-4 w-4" />
          Schedule Strategy Call
        </Button>
      </CardFooter>
    </Card>
  );
};
