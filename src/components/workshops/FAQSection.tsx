
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">Is this just another theoretical AI presentation?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Not at all. This is a hands-on, practical demonstration where you can see real AI tools applied to a real legal workflow. You'll witness the transformation process from start to finish.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">What specific legal workflows are covered?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                The recording covers a genuine legal workflow which includes elements of intake analysis, discovery review, document drafting, or case preparation. The principles demonstrated are applicable across multiple practice areas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">Do I need to be highly technical to benefit from this recording?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Not at all. This session was specifically designed for legal professionals, not technologists. We focus on practical applications that don't require coding knowledge or deep technical expertise.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">How can I implement similar solutions at my firm?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                After watching the replay, you'll have a much clearer understanding of how to identify AI opportunities in your practice. For further assistance with implementation, GSD and Melior offer consulting services and workshops tailored to your specific needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">What is the $2,500 workflow transformation shown in the replay?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                In the recording, you'll see a comprehensive workflow transformation guided by expert Christian Ulstrup. This mirrors our private Quick Win in a Box workshop where we analyze and transform a specific legal workflow using AI tools. By watching the replay, you'll gain insights into this process that you can apply to your own firm's operations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
