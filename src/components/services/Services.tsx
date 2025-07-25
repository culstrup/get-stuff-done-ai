
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "./data";
import { animations, typography, layouts } from "@/lib/design-tokens";
import { SEOHeading, SEOParagraph } from "@/components/seo/KeywordRichContent";

export const Services = React.memo(() => {
  return (
    <section id="services" className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SEOHeading 
            level={2}
            className={`${typography.fluid.h2} text-primary`}
            keywords={["AI implementation services", "AI consulting", "business automation"]}
          >
            AI Implementation Services & Consulting
          </SEOHeading>
          <SEOParagraph 
            className={`mt-6 ${typography.fluid.large} text-gray-600`}
            keywords={["AI transformation", "business automation", "AI adoption"]}
            emphasis={true}
          >
            Expert AI implementation services designed to accelerate your business transformation. From hands-on workshops to comprehensive organizational change programs, we deliver practical AI solutions that drive measurable results.
          </SEOParagraph>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${animations.slideInUp}`}
              style={{
                animationDelay: `${index * 0.15}s`,
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
