import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Headphones, Volume2 } from "lucide-react";

interface VapiWidgetProps {
  assistantId: string;
  publicKey: string;
}

const VapiWidget: React.FC<VapiWidgetProps> = ({ assistantId, publicKey }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Vapi widget script only once
    if (!document.querySelector('script[src*="vapi-ai"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        console.log('Vapi script loaded');
        setIsLoaded(true);
      };

      script.onerror = () => {
        console.error('Failed to load Vapi script');
      };

      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleStartConversation = () => {
    setIsActive(true);
    // The widget should handle the actual conversation start
    // when the user interacts with it
  };

  return (
    <div className="w-full">
      {/* Primary CTA - Voice Widget */}
      <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-xl p-6 mb-6 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-secondary/20 p-3 rounded-full">
            <Mic className="h-8 w-8 text-secondary" />
          </div>
        </div>
        
        <h3 className="font-bold text-xl text-primary text-center mb-3">
          🎯 Let's Maximize Your Session Value
        </h3>
        
        <p className="text-gray-700 text-center mb-4">
          Take 2 minutes to share your biggest AI challenges. This helps me customize our strategy session specifically for your needs.
        </p>

        <div className="bg-white/70 rounded-lg p-4 mb-4 border border-secondary/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Headphones className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-gray-700">Works best with headphones</span>
          </div>
          <p className="text-xs text-gray-600 text-center">
            <strong>Quick & Easy:</strong> Just click the button below to start talking
          </p>
        </div>

        {!isActive ? (
          <Button
            onClick={handleStartConversation}
            className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 text-lg font-semibold gap-3"
            disabled={!isLoaded}
          >
            <Volume2 className="h-6 w-6" />
            {isLoaded ? 'Start Voice Conversation' : 'Loading...'}
          </Button>
        ) : (
          <div className="space-y-4">
            {/* Vapi Widget Container */}
            <div ref={widgetContainerRef} className="flex justify-center p-4 bg-white rounded-lg border-2 border-secondary/30">
              {/* The actual Vapi widget element - render it directly */}
              <div dangerouslySetInnerHTML={{
                __html: `
                  <vapi-widget 
                    assistant-id="${assistantId}"
                    public-key="${publicKey}">
                  </vapi-widget>
                `
              }} />
            </div>
            
            <div className="flex items-center justify-center gap-2 text-secondary animate-pulse">
              <Mic className="h-5 w-5" />
              <span className="text-sm font-medium">Click the microphone to talk</span>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-3 italic">
          💡 Tip: Have your challenges ready to discuss for the best experience
        </p>
      </div>
    </div>
  );
};

export default VapiWidget;