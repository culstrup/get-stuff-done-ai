
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { services, industryBenefits } from "./data";
import { animations } from "@/lib/design-tokens";
import { SEOHeading, SEOParagraph } from "@/components/seo/KeywordRichContent";

export const Services = React.memo(() => {
  return (
    <section id="services" className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SEOHeading 
            level={2}
            className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            keywords={["AI implementation services", "AI consulting", "business automation"]}
          >
            AI Implementation Services & Consulting
          </SEOHeading>
          <SEOParagraph 
            className="mt-6 text-lg leading-8 text-gray-600"
            keywords={["AI transformation", "business automation", "AI adoption"]}
            emphasis={true}
          >
            Expert AI implementation services designed to accelerate your business transformation. From hands-on workshops to comprehensive organizational change programs, we deliver practical AI solutions that drive measurable results.
          </SEOParagraph>
          
          {/* Industry-specific benefits showcase */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">For Multi-Location Businesses</h3>
              <ul className="space-y-1 text-blue-700">
                <li>• 10x faster franchisee profitability</li>
                <li>• $10k+ saved per location</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">For Enterprises</h3>
              <ul className="space-y-1 text-green-700">
                <li>• 30-40% operational cost reduction</li>
                <li>• Scale AI across departments</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">For Growth Teams</h3>
              <ul className="space-y-1 text-purple-700">
                <li>• 3x revenue optimization</li>
                <li>• Build data-driven moats</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${animations.slideInUp}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';
