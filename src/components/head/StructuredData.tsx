
import React from "react";
import { Helmet } from "react-helmet-async";
import { useBitcoinPrice, btcToUsd } from "@/hooks/use-bitcoin-price";

// Fallback USD price when Bitcoin API is unavailable (based on ~$95k BTC)
// Update this value if Bitcoin price changes significantly
const FALLBACK_QUICK_WIN_USD = 4750;

export const StructuredData: React.FC = () => {
  const { data: btcPrice } = useBitcoinPrice();

  // Calculate USD prices from BTC (default to approximate values if API unavailable)
  const quickWinUsd = btcPrice ? Math.round(btcToUsd(0.05, btcPrice)) : FALLBACK_QUICK_WIN_USD;
  // The structured data has been purposely split into separate blocks for better maintainability
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Get Stuff Done AI",
    "alternateName": "GSD at Work",
    "description": "Expert AI consulting and implementation services to accelerate your business. From solopreneurs to enterprises, we help you harness AI's potential with proven strategies.",
    "url": "https://gsdat.work/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gsdat.work/lovable-uploads/27fe830f-8000-40cf-9d6d-49cfa6d1275a.png",
      "width": "192",
      "height": "192"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
      "width": "1200",
      "height": "630"
    },
    "priceRange": "$$",
    "serviceType": ["AI Consulting", "AI Implementation", "Business Automation", "AI Strategy", "Productivity Improvement", "Digital Transformation"],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States",
        "alternateName": "US"
      },
      {
        "@type": "Country",
        "name": "Canada",
        "alternateName": "CA"
      },
      {
        "@type": "Country",
        "name": "United Kingdom",
        "alternateName": "UK"
      },
      {
        "@type": "Country",
        "name": "Europe",
        "alternateName": "EU"
      },
      {
        "@type": "Place",
        "name": "Worldwide"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quick Win in a Box",
            "url": "https://gsdat.work/ai-action-workshop",
            "description": "Hands-on working session where you'll implement real AI solutions and leave with concrete results—no theoretical discussions, just pure execution.",
            "offers": {
              "@type": "Offer",
              "price": quickWinUsd.toString(),
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": quickWinUsd.toString(),
                "priceCurrency": "USD",
                "valueAddedTaxIncluded": "true"
              }
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "10x Effective Executive",
            "url": "https://gsdat.work/10x-executive",
            "description": "A 10-week AI-powered transformation program to accelerate productivity, reclaim time, and master AI tools that keep you ahead.",
            "offers": {
              "@type": "Offer",
              "price": "19999",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "19999",
                "priceCurrency": "USD",
                "valueAddedTaxIncluded": "true"
              }
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Triple-A Transformation Program",
            "url": "https://gsdat.work/triple-a-transformation",
            "description": "14-week program to revolutionize your operations with AI (Triple-A = Accelerated AI Adoption).",
            "offers": {
              "@type": "Offer",
              "price": "150000",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "150000",
                "priceCurrency": "USD",
                "valueAddedTaxIncluded": "true"
              }
            }
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/100624720",
      "https://gsdat.work/blog"
    ],
    "founder": {
      "@type": "Person",
      "name": "Christian Ulstrup",
      "jobTitle": "AI Implementation Expert",
      "description": "MIT-educated tech expert with extensive experience implementing AI solutions for businesses across various industries.",
      "sameAs": [
        "https://www.linkedin.com/in/christianulstrup/",
        "https://gsdat.work/blog"
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+18482610259",
      "contactType": "customer service",
      "email": "hello@gsdat.work",
      "availableLanguage": ["English"]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Remote"
    },
    "keywords": "AI implementation, AI consulting, AI strategy, generative AI, business automation, AI productivity, digital transformation, AI tools, AI workflow optimization"
  };
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Christian Ulstrup",
    "jobTitle": "AI Implementation Expert",
    "description": "Christian Ulstrup is an AI implementation expert helping executives and teams accelerate business outcomes through strategic AI implementation.",
    "url": "https://gsdat.work",
    "image": "https://gsdat.work/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png",
    "sameAs": [
      "https://www.linkedin.com/in/christianulstrup/",
      "https://gsdat.work/blog"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Get Stuff Done AI",
      "url": "https://gsdat.work"
    },
    "knowsAbout": [
      "AI Implementation",
      "Generative AI",
      "Business Productivity",
      "Digital Transformation",
      "Executive Leadership",
      "AI Strategy"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Massachusetts Institute of Technology",
      "alternateName": "MIT"
    }
  };
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Get Stuff Done AI",
    "alternateName": "GSD at Work",
    "url": "https://gsdat.work",
    "logo": "https://gsdat.work/lovable-uploads/27fe830f-8000-40cf-9d6d-49cfa6d1275a.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@gsdat.work",
      "url": "https://gsdat.work"
    },
    "sameAs": [
      "https://www.linkedin.com/company/100624720"
    ],
    "founder": {
      "@type": "Person",
      "name": "Christian Ulstrup"
    }
  };
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What AI implementation services does Get Stuff Done AI offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get Stuff Done AI offers three main service lines: 1) Quick Win in a Box for hands-on implementation, 2) The 10x Effective Executive program for leaders seeking AI-powered productivity gains, and 3) The Triple-A Transformation Program for comprehensive organizational AI implementation."
        }
      },
      {
        "@type": "Question",
        "name": "How does Quick Win in a Box work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quick Win in a Box is a focused, hands-on session where you'll implement real AI solutions to your specific business challenges. Unlike theoretical discussions, this workshop focuses on pure execution with concrete results you can see by the end of the session. You'll leave with working implementations and repeatable processes."
        }
      },
      {
        "@type": "Question",
        "name": "What results can I expect from working with Get Stuff Done AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clients typically experience immediate productivity gains (30-40% reduction in time spent on target processes), accelerated execution (3x faster on key tasks), and significant time savings (15+ hours per week reclaimed for strategic work). Our programs deliver measurable ROI, typically 5-10x the investment."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Christian Ulstrup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Christian Ulstrup is an MIT-educated AI Implementation Expert who helps executives and organizations implement AI solutions for tangible business results. He has extensive experience working with leaders across industries to accelerate digital transformation and productivity through strategic AI adoption."
        }
      }
    ]
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};
