
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { valueMetrics } from "./data";

export const ValueMetricsSection = () => {
  return (
    <div className="mt-24 mx-auto max-w-2xl text-center">
      <h3 className="text-2xl font-bold tracking-tight text-primary">
        Our Approach to Value-Based Pricing
      </h3>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        We believe in aligning our success with yours. After our initial engagement, 
        we offer flexible pricing structures that tie our compensation to measurable business outcomes:
      </p>
      <ul className="mt-8 space-y-4 text-left mx-auto">
        {valueMetrics.map((metric) => (
          <li key={metric} className="flex items-start">
            <svg
              className="h-6 w-6 text-secondary flex-shrink-0 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-3 text-gray-600">{metric}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-gray-600 font-medium">
        Results typically seen within first 30 days
      </p>
      <p className="mt-8 text-gray-600">
        This ensures we're fully invested in delivering real, measurable value for your business.
      </p>
      <div className="mt-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            onClick={() => window.open("https://love.gsdat.work", "_blank")}
          >
            See Client Success Stories
          </Button>
        </div>
        <p className="text-gray-600">
          Or{" "}
          <a 
            href="https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call" 
            target="_blank" 
            className="text-secondary hover:text-secondary/90 font-medium inline-flex items-center"
          >
            book a quick call to discuss your goals →
          </a>
        </p>
      </div>
    </div>
  );
};
