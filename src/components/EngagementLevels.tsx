import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { animations, spacing } from "@/lib/design-tokens";
import { useBitcoinPrice, btcToUsd, formatUsd } from "@/hooks/use-bitcoin-price";

export const EngagementLevels = () => {
  const { data: btcPrice, isLoading: btcLoading, error: btcError } = useBitcoinPrice();
  const quickWinBtc = 0.05;

  // Calculate USD equivalent
  const quickWinUsd = btcPrice ? formatUsd(btcToUsd(quickWinBtc, btcPrice)) : null;

  return (
    <section className={`${spacing.section.lg} bg-gradient-to-b from-gray-50 to-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">
            Two Paths to AI Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're looking for a quick win or comprehensive transformation, 
            we have the right engagement model to accelerate your AI journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Quick Win Path */}
          <div className={`bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200 ${animations.hoverLift}`}>
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Quick Win in a Box
            </h3>

            <div className="mb-4">
              {quickWinUsd && !btcLoading ? (
                <>
                  <p className="text-lg font-semibold text-blue-600">{quickWinUsd}</p>
                  <p className="text-sm text-gray-600">(<span aria-label="Bitcoin">₿</span>0.05)</p>
                </>
              ) : (
                <p className="text-lg font-semibold text-blue-600"><span aria-label="Bitcoin">₿</span>0.05</p>
              )}
              {btcError && (
                <p className="text-xs text-amber-600 mt-1">
                  ⚠️ Unable to load current exchange rates
                </p>
              )}
            </div>

            <p className="text-gray-700 mb-6">
              Perfect for teams ready to experience immediate AI impact. Break your
              four-minute mile in a single hands-on session.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">1-2 hour hands-on session</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Founder-led or Associate-led (competitive rates)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Transform a 2-day task into 2 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Create reusable processes & SOPs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Bundle discounts: 20% (5-pack) or 30% (10-pack)</span>
              </li>
            </ul>
            
            <div className="space-y-3">
              <Link to="/ai-action-workshop" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Explore Quick Win Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
              >
                Schedule Free Consultation
              </Button>
              <p className="text-sm text-center text-gray-600 mt-2">
                Ideal for: Individual teams, first-time engagements, specific workflow optimization
              </p>
            </div>
          </div>

          {/* Transformation Path */}
          <div className={`bg-white rounded-xl shadow-lg p-8 border-2 border-secondary ${animations.hoverLift}`}>
            <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
              <Target className="h-8 w-8 text-secondary" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              AI Transformation Programs
            </h3>
            
            <p className="text-lg font-semibold text-secondary mb-4">
              Custom Engagement Pricing
            </p>
            
            <p className="text-gray-700 mb-6">
              For organizations ready to integrate AI deeply into operations with 
              sustained support and strategic implementation.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span className="text-gray-700">Multi-week to multi-month programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span className="text-gray-700">Organization-wide AI adoption</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span className="text-gray-700">Custom roadmaps & implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span className="text-gray-700">Ongoing coaching & optimization</span>
              </li>
            </ul>
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
                onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-center text-gray-600">
                Ideal for: Enterprises, strategic initiatives, comprehensive digital transformation
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Many clients start with a Quick Win workshop to prove value, 
            then expand to a full transformation program.
          </p>
          <p className="text-lg font-semibold text-secondary">
            Begin your AI journey today with the approach that fits your needs.
          </p>
        </div>
      </div>
    </section>
  );
};