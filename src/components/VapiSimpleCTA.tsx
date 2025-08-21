import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mic, Headphones } from "lucide-react";

interface VapiSimpleCTAProps {
  phoneNumber?: string;
}

const VapiSimpleCTA: React.FC<VapiSimpleCTAProps> = ({ 
  phoneNumber = "+14159917188" 
}) => {
  return (
    <div className="w-full">
      {/* Primary CTA - Voice Call */}
      <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="text-center mb-3 sm:mb-4">
          <div className="flex items-center justify-center mb-3">
            <div className="bg-secondary/20 p-2 sm:p-3 rounded-full">
              <Mic className="h-6 sm:h-8 w-6 sm:w-8 text-secondary" />
            </div>
          </div>
          
          <h3 className="font-bold text-lg sm:text-xl text-primary mb-2 sm:mb-3">
            🎯 Maximize Your Session Value
          </h3>
          
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            Take 2 minutes to share your biggest AI challenges
          </p>

          <div className="bg-white/70 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 border border-secondary/20">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Headphones className="h-4 sm:h-5 w-4 sm:w-5 text-secondary" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Works best with headphones</span>
            </div>
          </div>
        </div>

        {/* Main CTA Button - Direct Phone Call */}
        <a href={`tel:${phoneNumber}`} className="block w-full">
          <Button
            className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 text-lg font-semibold gap-3 shadow-lg"
          >
            <Phone className="h-6 w-6" />
            Call AI Assistant Now
          </Button>
        </a>

        <p className="text-sm text-gray-600 text-center mt-3">
          {phoneNumber.replace('+1', '+1 ').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
        </p>

      </div>
    </div>
  );
};

export default VapiSimpleCTA;