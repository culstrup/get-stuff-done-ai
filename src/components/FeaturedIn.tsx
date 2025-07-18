
import React from "react";
import { ExternalLink } from "lucide-react";

export const FeaturedIn = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center mb-10">
          As Featured In
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          <a 
            href="https://www.forbes.com/sites/josipamajic/2025/04/04/how-venture-capital-funds-can-leverage-ai-to-save-time-cut-costs-and-boost-returns/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="relative">
              <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/lovable-uploads/a71d34f3-fc72-412f-86e5-0cd4874bac80.png" 
                  alt="Forbes Logo" 
                  className="max-h-full w-auto" 
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex items-center text-xs text-gray-600">
                <span>Read article</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </div>
            </div>
          </a>
          
          <a 
            href="https://www.luminary-labs.com/build-your-own-virtual-ai-advisory-board/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="relative">
              <div className="w-36 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/lovable-uploads/luminary-labs-logo.png" 
                  alt="Luminary Labs Logo" 
                  className="max-h-full w-auto" 
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex items-center text-xs text-gray-600">
                <span>Read article</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </div>
            </div>
          </a>

          <a 
            href="https://vapi.ai/blog/scaling-client-intake-engine-with-vapi-voice-ai-agents" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="relative">
              <div className="w-28 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/vapi-logo.svg" 
                  alt="VAPI Logo" 
                  className="max-h-full w-auto" 
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex items-center text-xs text-gray-600">
                <span>Read case study</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </div>
            </div>
          </a>

          <a 
            href="https://blog.replit.com/bounties-christian-ulstrup-case-study" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="relative">
              <div className="w-28 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/replit-logo.svg" 
                  alt="Replit Logo" 
                  className="max-h-full w-auto" 
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex items-center text-xs text-gray-600">
                <span>Read case study</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
