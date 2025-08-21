
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Linkedin, Mic, Headphones } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";

const StrategySessionConfirmed = () => {
  // Track conversion with Google Analytics
  React.useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'G-ZVF8V8Y4X0',
        'event_category': 'Strategy Session',
        'event_label': 'Booking Confirmed',
        'value': 1
      });
    }
  }, []);

  return (
    <Layout>
      <SEOHead 
        title="Strategy Session Confirmed | Next Steps"
        description="Your AI strategy session is confirmed. Learn what to expect and important next steps to prepare for our conversation about AI implementation."
        canonicalUrl="https://gsdat.work/strategy-session-confirmed"
        keywords="AI strategy session, AI consulting, AI implementation consultation, business transformation"
      />
      
      {/* Vapi Voice Widget Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
              script.async = true;
              script.type = 'text/javascript';
              document.body.appendChild(script);
            })();
          `
        }}
      />
      
      <div className="min-h-screen bg-background flex items-center justify-center py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center w-full">
        <CheckCircle2 className="mx-auto h-12 sm:h-16 w-12 sm:w-16 text-secondary mb-4 sm:mb-6" />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4 px-2">
          Your Strategy Session is Confirmed!
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 px-2">
          I'm looking forward to speaking with you very soon.
        </p>
        
        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-left bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-primary">What to Expect</h2>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600">
            <li className="flex items-start">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5 sm:mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3">Identify your highest-impact AI opportunity</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5 sm:mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3">Map out your 30-day quick win</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5 sm:mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3">Design your execution roadmap</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 sm:mt-8">
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-secondary/20 p-3 rounded-full">
                <Mic className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
              </div>
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-primary mb-3">🎯 Let's Prepare for Maximum Value</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Take 2 minutes to share your biggest AI challenges with our intake assistant. This helps me customize our strategy session specifically for your needs.
            </p>
            <div className="bg-white/70 rounded-lg p-3 sm:p-4 mb-4 border border-secondary/20">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                <strong>Quick & Easy:</strong> Just click the button below and start talking. Our AI will guide you through a few questions.
              </p>
              <div className="flex items-center justify-center gap-2 text-secondary">
                <Headphones className="h-4 w-4" />
                <span className="text-xs sm:text-sm font-medium">Works best with headphones</span>
              </div>
            </div>
            
            {/* Vapi Voice Widget */}
            <div className="flex justify-center">
              <vapi-widget 
                assistant-id="dc07664b-8543-4305-8a39-686f1f3a50da" 
                public-key="2e1fbe06-baf7-42e0-98b5-6c5a034288ca"
              ></vapi-widget>
            </div>
            
            <p className="text-xs text-gray-500 mt-3 italic">
              💡 Tip: Click the microphone to start a conversation
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm sm:text-base text-gray-600">
              📧 <strong>Check your email</strong> for the meeting details and Google Meet link.
            </p>
          </div>
          <a 
            href="https://www.linkedin.com/in/christianulstrup/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </a>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default StrategySessionConfirmed;
