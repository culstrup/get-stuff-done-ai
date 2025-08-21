
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportCTA = () => {
  const { toast } = useToast();

  const handleScheduleCall = () => {
    window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank", "noopener,noreferrer");
    toast({
      title: "Calendly opened",
      description: "Schedule your free AI tools consultation now.",
      duration: 3000,
    });
  };


  return (
    <section id="get-started" className="bg-gradient-to-r from-secondary/20 to-secondary/5 p-8 rounded-xl mb-12 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-primary">Get a Personalized AI Tool Recommendation</h2>
      <p className="mb-6">
        Want to know which AI tools would best fit your specific business needs and budget? Schedule a free consultation with our team for personalized recommendations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={handleScheduleCall}
          className="bg-secondary hover:bg-secondary/90 gap-2"
          aria-label="Schedule a free consultation via Calendly"
        >
          <Calendar className="h-4 w-4 text-white" aria-hidden="true" />
          <span className="text-white">Schedule Free Consultation</span>
        </Button>
      </div>
      
      {/* Hidden microdata for SEO */}
      <div itemScope itemType="https://schema.org/Service" className="hidden">
        <meta itemProp="name" content="AI Tool Consultation" />
        <meta itemProp="description" content="Free consultation to determine the best AI tools for your business needs and budget" />
        <meta itemProp="provider" content="GSD at Work LLC" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="0" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
        </div>
      </div>
    </section>
  );
};

export default ReportCTA;
