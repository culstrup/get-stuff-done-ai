
import React, { useEffect } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { generateServicePageStructuredData } from "@/lib/seo-utils";
import { HeroSection } from "@/components/workshops/HeroSection";
import { CoHostedSection } from "@/components/workshops/CoHostedSection";
import { EventDetailsSection } from "@/components/workshops/EventDetailsSection";
import { AgendaSection } from "@/components/workshops/AgendaSection";
import { WhoShouldAttendSection } from "@/components/workshops/WhoShouldAttendSection";
import { FAQSection } from "@/components/workshops/FAQSection";
import { FormSection } from "@/components/workshops/FormSection";

const AILegalWorkshop: React.FC = () => {
  const meliorUrl = "https://www.getmelior.com";
  const homeUrl = "https://gsdat.work";
  const workshopImageUrl = "https://gsdat.work/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png";
  
  // Add HubSpot script to the page
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js-na2.hsforms.net/forms/embed/242078229.js";
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up when component unmounts
      document.body.removeChild(script);
    };
  }, []);
  
  // Generate FAQ schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this just another theoretical AI presentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. This is a hands-on, practical demonstration where you can see real AI tools applied to a real legal workflow. You'll witness the transformation process from start to finish."
        }
      },
      {
        "@type": "Question",
        "name": "What specific legal workflows are covered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The recording covers a genuine legal workflow which includes elements of intake analysis, discovery review, document drafting, or case preparation. The principles demonstrated are applicable across multiple practice areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be highly technical to benefit from this recording?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. This session was specifically designed for legal professionals, not technologists. We focus on practical applications that don't require coding knowledge or deep technical expertise."
        }
      },
      {
        "@type": "Question",
        "name": "How can I implement similar solutions at my firm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After watching the replay, you'll have a much clearer understanding of how to identify AI opportunities in your practice. For further assistance with implementation, GSD and Melior offer consulting services and workshops tailored to your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the $2,500 workflow transformation shown in the replay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the recording, you'll see a comprehensive workflow transformation guided by expert Christian Ulstrup. This mirrors our private Quick Win in a Box workshop where we analyze and transform a specific legal workflow using AI tools. By watching the replay, you'll gain insights into this process that you can apply to your own firm's operations."
        }
      }
    ]
  };
  
  const structuredData = generateServicePageStructuredData(
    "AI in Action for Lawyers: Webinar Replay",
    "Access the full recording of our hands-on workshop where we transformed a real legal workflow using AI. See practical AI applications for your law firm.",
    "https://gsdat.work/ai-legal-workshop",
    workshopImageUrl,
    "GSD at Work LLC",
    "Free"
  );

  return (
    <>
      <SEOHead 
        title="AI in Action for Lawyers | GSD at Work - Get Stuff Done with AI"
        description="GSD at Work's AI Legal Workshop: Access the recording of our hands-on workshop where you'll see a real legal workflow transformed with AI. Learn practical applications for your law firm."
        canonicalUrl="https://gsdat.work/ai-legal-workshop"
        ogType="website"
        ogImage={workshopImageUrl}
        ogImageAlt="AI in Action for Lawyers workshop with Christian Ulstrup and Ryan Markman"
        keywords="legal AI, law firm AI, AI for lawyers, legal technology, legal workflow automation, AI implementation for law, legal efficiency"
        structuredData={[structuredData, faqSchema]}
      />
      
      <Navigation />
      
      <main className="pt-24">
        <HeroSection showReplayForm={true} />
        <CoHostedSection meliorUrl={meliorUrl} homeUrl={homeUrl} />
        <EventDetailsSection />
        <AgendaSection />
        <WhoShouldAttendSection />
        <FAQSection />
        <FormSection />
        
        {/* Cross-promotion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border border-secondary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Also Interested in Data Analysis?</h3>
                <p className="text-gray-700 mb-4">
                  Check out our <span className="font-semibold">Qualitative Data Insights AI Workshop</span> – a specialized 2-hour session focused on extracting actionable insights from customer conversations, feedback, and qualitative data.
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                    onClick={() => window.location.href = "/qualitative-data-insights-workshop"}
                  >
                    Learn about our Qualitative Data Insights Workshop
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AILegalWorkshop;
