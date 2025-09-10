/**
 * Utility functions for generating structured data for SEO
 */

/**
 * Generate structured data for a service page
 */
export const generateServicePageStructuredData = (
  name: string,
  description: string,
  url: string,
  image: string = "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
  provider: string = "GSD at Work",
  price?: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://gsdat.work"
    },
    "offers": {
      "@type": "Offer",
      "price": price ? price.replace(/[^\d.-]/g, '') : "",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "url": url,
    "image": image
  };
};

/**
 * Generate structured data for a person
 */
export const generatePersonStructuredData = (
  name: string = "Christian Ulstrup",
  jobTitle: string = "AI Implementation Expert",
  url: string = "https://www.linkedin.com/in/christianulstrup/",
  image: string = "https://gsdat.work/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "url": url,
    "image": image,
    "worksFor": {
      "@type": "Organization",
      "name": "GSD at Work LLC",
      "url": "https://gsdat.work"
    }
  };
};

/**
 * Generate structured data for the organization
 */
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://gsdat.work/#organization",
    "name": "GSD at Work",
    "alternateName": ["Get Stuff Done at Work", "GSD at Work LLC", "Get Stuff Done AI"],
    "description": "GSD at Work provides expert AI consulting and implementation services to help organizations get stuff done 10x faster. We deliver practical AI solutions through hands-on workshops and proven automation strategies.",
    "url": "https://gsdat.work/",
    "logo": "https://gsdat.work/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png",
    "image": "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "priceRange": "$$",
    "serviceType": ["AI Consulting", "AI Implementation", "Business Automation", "AI Strategy", "Productivity Improvement"],
    "areaServed": "Worldwide",
    "sameAs": [
      "https://www.linkedin.com/company/gsd-at-work-llc/",
      "https://www.linkedin.com/in/christianulstrup/"
    ],
    "founder": {
      "@type": "Person",
      "name": "Christian Ulstrup",
      "jobTitle": "AI Implementation Expert",
      "sameAs": "https://www.linkedin.com/in/christianulstrup/"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+18482610259",
      "contactType": "customer service",
      "email": "hello@gsdat.work",
      "availableLanguage": "English"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AI Action Workshop", "url": "https://gsdat.work/ai-action-workshop" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AI Oracle Session", "url": "https://gsdat.work/ai-oracle-session" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AI Automation & Integration", "url": "https://gsdat.work/ai-automation-integration" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AI for Law Firms", "url": "https://gsdat.work/industries/law-firms" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AI in Manufacturing", "url": "https://gsdat.work/industries/manufacturing" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AI for Energy", "url": "https://gsdat.work/industries/energy" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AI in Financial Services", "url": "https://gsdat.work/industries/financial-services" }
        }
      ]
    }
  };
};

/**
 * Generate structured data for FAQ section
 */
export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generate structured data for LocalBusiness
 */
export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gsdat.work/#organization",
    "name": "GSD at Work LLC",
    "alternateName": ["Get Stuff Done at Work", "Get Stuff Done AI", "GSD at Work"],
    "description": "GSD at Work LLC provides expert AI consulting and implementation services to help organizations get stuff done 10x faster. We deliver practical AI solutions through hands-on workshops and proven automation strategies.",
    "url": "https://gsdat.work/",
    "telephone": "+18482610259",
    "email": "hello@gsdat.work",
    "founder": {
      "@type": "Person",
      "name": "Christian Ulstrup",
      "jobTitle": "AI Implementation Expert",
      "sameAs": "https://www.linkedin.com/in/christianulstrup/"
    },
    "serviceType": ["AI Consulting", "AI Implementation", "Business Automation", "AI Strategy", "Productivity Improvement"],
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-17:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+18482610259",
      "contactType": "customer service",
      "email": "hello@gsdat.work",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/in/christianulstrup/",
      "https://gsdat.work/"
    ]
  };
};

/**
 * Generate structured data for Course/EducationalEvent
 */
export const generateCourseStructuredData = (
  name: string,
  description: string,
  url: string,
  price: string,
  duration: string = "2 hours",
  provider: string = "GSD at Work",
  image: string = "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://gsdat.work"
    },
    "url": url,
    "image": image,
    "offers": {
      "@type": "Offer",
      "price": price.replace(/[^\d.-]/g, ''),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "timeRequired": duration,
    "educationalLevel": "Professional",
    "teaches": "AI Implementation, Business Automation, Productivity Enhancement",
    "courseMode": "Online",
    "instructor": {
      "@type": "Person",
      "name": "Christian Ulstrup",
      "jobTitle": "AI Implementation Expert"
    }
  };
};

/**
 * Generate structured data for Event (workshops/seminars)
 */
export const generateEventStructuredData = (
  name: string,
  description: string,
  startDate: string,
  url: string,
  location: string = "Online",
  price?: string,
  image: string = "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": startDate, // For workshops, usually same day
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "name": location,
      "url": url
    },
    "image": image,
    "organizer": {
      "@type": "Organization",
      "name": "GSD at Work",
      "url": "https://gsdat.work"
    },
    "offers": price ? {
      "@type": "Offer",
      "price": price.replace(/[^\d.-]/g, ''),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    } : undefined,
    "performer": {
      "@type": "Person",
      "name": "Christian Ulstrup",
      "jobTitle": "AI Implementation Expert"
    }
  };
};

/**
 * Generate structured data for Article/BlogPost
 */
export const generateArticleStructuredData = (
  headline: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  authorName: string = "Christian Ulstrup",
  image: string = "https://gsdat.work/og-image.png"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": authorName,
      "jobTitle": "AI Implementation Expert",
      "url": "https://www.linkedin.com/in/christianulstrup/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GSD at Work",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gsdat.work/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": "AI Implementation",
    "keywords": "AI implementation, digital transformation, business automation, artificial intelligence"
  };
};

/**
 * Generate structured data for WebSite with SearchAction
 */
export const generateWebSiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Get Stuff Done AI",
    "alternateName": "GSD at Work",
    "url": "https://gsdat.work/",
    "description": "Expert AI consulting and implementation services to accelerate your business.",
    "publisher": {
      "@type": "Organization",
      "name": "GSD at Work LLC"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gsdat.work/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};