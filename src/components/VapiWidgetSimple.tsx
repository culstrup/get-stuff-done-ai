import React, { useEffect } from 'react';
import { Headphones } from "lucide-react";

interface VapiWidgetSimpleProps {
  assistantId: string;
  publicKey: string;
}

const VapiWidgetSimple: React.FC<VapiWidgetSimpleProps> = ({ assistantId, publicKey }) => {
  useEffect(() => {
    // Load the Vapi widget script if not already loaded
    const existingScript = document.querySelector('script[src*="vapi-ai"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full">
      {/* Primary CTA - Voice Widget */}
      <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-xl p-6 mb-6 shadow-lg">
        <div className="text-center mb-4">
          <h3 className="font-bold text-xl text-primary mb-3">
            🎯 Let's Maximize Your Session Value
          </h3>
          
          <p className="text-gray-700 mb-4">
            Take 2 minutes to share your biggest AI challenges. This helps me customize our strategy session specifically for your needs.
          </p>

          <div className="bg-white/70 rounded-lg p-3 mb-4 border border-secondary/20">
            <div className="flex items-center justify-center gap-2">
              <Headphones className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-gray-700">Works best with headphones</span>
            </div>
          </div>
        </div>

        {/* Direct embed of the Vapi widget */}
        <div className="flex justify-center">
          <div 
            dangerouslySetInnerHTML={{
              __html: `
                <vapi-widget 
                  assistant-id="${assistantId}"
                  public-key="${publicKey}">
                </vapi-widget>
              `
            }}
          />
        </div>

        <p className="text-xs text-gray-500 text-center mt-4 italic">
          💡 Click the button above to start a voice conversation
        </p>
      </div>
    </div>
  );
};

export default VapiWidgetSimple;