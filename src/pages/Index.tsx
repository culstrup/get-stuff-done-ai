
import { Hero } from "@/components/Hero";
import { Services } from "@/components/services/Services";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { About } from "@/components/About";
import { FeaturedReport } from "@/components/FeaturedReport";
import { FeaturedIn } from "@/components/FeaturedIn";
import { LegalWorkshopPromo } from "@/components/promotions/LegalWorkshopPromo";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { Layout } from "@/components/Layout";
import { generateOrganizationStructuredData, generateLocalBusinessStructuredData, generateWebSiteStructuredData } from "@/lib/seo-utils";
import { ServiceComparison } from "@/components/internal-linking/ServiceComparison";
import { EngagementLevels } from "@/components/EngagementLevels";
import { ExecutiveMessaging } from "@/components/ExecutiveMessaging";

const Index = () => {
  // Generate comprehensive structured data for homepage
  const structuredData = [
    generateOrganizationStructuredData(),
    generateLocalBusinessStructuredData(),
    generateWebSiteStructuredData()
  ];

  return (
    <Layout>
      <KeywordOptimizedSEO 
        title="GSD at Work - AI Implementation Services & Business Automation Consulting"
        content="GSD at Work helps organizations implement AI to get stuff done 10x faster. Expert AI consulting, hands-on workshops, and proven automation strategies that deliver measurable results. Transform your business with our practical AI implementation services."
        canonicalUrl="https://gsdat.work/"
        pageType="landing"
        structuredData={structuredData}
        ogType="website"
      />
      
      {/* Add padding-top to account for the fixed navigation */}
      <div className="pt-20">
        <Hero />
      </div>
      
      <div className="relative">
        {/* Clean section layout without diagonal overlays */}
        <div className="bg-gradient-to-b from-background to-gray-50">
          <TestimonialsCarousel />
        </div>
        
        <FeaturedIn />
        
        <div className="bg-gradient-to-b from-gray-50 to-background py-8">
          <FeaturedReport />
        </div>
        
        <EngagementLevels />
        
        <div className="py-8">
          <Services />
        </div>
        
        <ExecutiveMessaging />
        
        <ServiceComparison 
          title="Find Your Perfect AI Implementation Path"
          description="Whether you're just getting started or ready for full transformation, we have the right program to accelerate your success."
        />
        
        <About />
      </div>
    </Layout>
  );
};

export default Index;
