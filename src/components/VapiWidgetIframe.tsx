import React from 'react';
import { Button } from "@/components/ui/button";
import { Headphones, Mic, Phone } from "lucide-react";

interface VapiWidgetIframeProps {
  assistantId: string;
  publicKey: string;
}

const VapiWidgetIframe: React.FC<VapiWidgetIframeProps> = ({ assistantId, publicKey }) => {
  const handleVoiceCall = () => {
    // Open the Vapi widget in a new window/tab as a fallback
    const vapiUrl = `data:text/html,
      <!DOCTYPE html>
      <html>
      <head>
        <title>Voice Assistant</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            display: flex; 
            flex-direction: column;
            align-items: center; 
            justify-content: center; 
            min-height: 100vh; 
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          h1 { margin-bottom: 20px; }
          .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 style="color: #333;">AI Strategy Session Intake</h1>
          <p style="color: #666; margin-bottom: 30px;">Click the button below to start your voice conversation</p>
          <vapi-widget 
            assistant-id="${assistantId}" 
            public-key="${publicKey}">
          </vapi-widget>
        </div>
        <script src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js" async type="text/javascript"></script>
      </body>
      </html>
    `;
    
    window.open(vapiUrl, '_blank', 'width=500,height=600');
  };

  return (
    <div className="w-full">
      {/* Primary CTA - Voice Widget */}
      <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-xl p-6 mb-6 shadow-lg">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-secondary/20 p-3 rounded-full">
              <Mic className="h-8 w-8 text-secondary" />
            </div>
          </div>
          
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

        {/* Main CTA Button */}
        <Button
          onClick={handleVoiceCall}
          className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 text-lg font-semibold gap-3 shadow-lg"
        >
          <Mic className="h-6 w-6" />
          Start Voice Conversation
        </Button>

        {/* Alternative: Try iframe (hidden by default, can be shown if needed) */}
        <div className="hidden mt-4">
          <iframe 
            src="/vapi-widget.html"
            className="w-full h-32 border-0 rounded-lg"
            title="Voice Assistant Widget"
          />
        </div>

        <p className="text-xs text-gray-500 text-center mt-4 italic">
          💡 Click the button to open the voice assistant in a new window
        </p>
      </div>
    </div>
  );
};

export default VapiWidgetIframe;