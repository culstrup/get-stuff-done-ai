import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import {
  Database, Files, Clock, MessageSquare,
  DollarSign, Zap, Target, Search,
  UserRound, Lightbulb, BrainCircuit, Rocket,
  CheckCircle, FileText, Mail, Phone, Clipboard,
  Users, ArrowRight
} from "lucide-react";
import { useBitcoinPrice, btcToUsd, formatUsd } from "@/hooks/use-bitcoin-price";

const AIOracleSession = () => {
  const { data: btcPrice, isLoading: btcLoading } = useBitcoinPrice();
  const btcAmount = 0.05;

  // Calculate USD equivalent
  const usdPrice = btcPrice ? formatUsd(btcToUsd(btcAmount, btcPrice)) : null;

  // Calendly links
  const workshopCalendlyLink = "https://calendly.com/gsdatwork/ai-workshop";
  const consultationCalendlyLink = "https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call";

  // Current date for dateModified schema property
  const currentDate = new Date().toISOString().split('T')[0];

  // Service structured data
  const serviceStructuredData = generateServicePageStructuredData(
    "AI Oracle Session - Executive Intelligence System",
    "Transform your executive decision-making with AI-powered organizational insights. Turn data into strategic foresight with our C-suite intelligence system.",
    "https://gsdat.work/ai-oracle-session",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "GSD at Work",
    "0.05 BTC"
  );

  // FAQ structured data
  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the AI Oracle Session?",
      answer: "The AI Oracle Session is an executive intelligence system that transforms your organization's data into strategic foresight. It's a comprehensive session where we set up AI to act as a digital advisor, providing C-suite teams with unprecedented organizational visibility and insights that can be integrated into your regular executive decision-making cadence."
    },
    {
      question: "What kind of data can be analyzed in this workshop?",
      answer: "We can analyze virtually any text-based data, including call center transcripts, customer support chats, email threads, survey responses, support tickets, and internal meeting notes. We work with data from tools like Dialpad, Five9, Gong, AI Scribe, Intercom, LiveChat, Zendesk, and more."
    },
    {
      question: "How much data can we analyze in the workshop?",
      answer: "Using AI, we can process and analyze significantly more data than would be possible manually - typically hundreds or even thousands of interactions. The exact volume depends on the complexity of your data and the specific insights you're seeking."
    },
    {
      question: "What results can I expect from the workshop?",
      answer: "You'll leave with a concise summary of key insights discovered in your data, identification of surprising trends or patterns, a prioritized list of actionable recommendations, and a repeatable process framework for future analysis."
    },
    {
      question: "How much does the AI Oracle Session cost?",
      answer: "0.05 BTC for the initial setup and training session with satisfaction guaranteed. This includes setting up the system for ongoing use in your executive meetings."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="AI Oracle Session - Executive Intelligence System | GSD at Work"
        description="Transform your executive decision-making with AI-powered organizational insights. Turn data into strategic foresight with our C-suite intelligence system."
        canonicalUrl="https://gsdat.work/ai-oracle-session"
        keywords="AI executive intelligence, C-suite AI advisor, organizational insights AI, strategic AI oracle, executive decision support, AI-powered leadership"
        structuredData={[serviceStructuredData, faqStructuredData]}
      />
      
      {/* Navigation */}
      <Navigation />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-3/5 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Your AI-Powered Executive Intelligence System
                </h1>
                
                <p className="text-xl text-gray-700">
                  Transform executive decision-making with AI that sees across your entire organization. Get strategic insights, uncover hidden patterns, and make data-informed decisions with AI as your digital advisor.
                </p>
                
                <p className="text-lg font-semibold text-secondary">
                  See What Others Miss. Decide With Confidence.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium">Executive Strategy Session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <DollarSign className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium">{usdPrice || "0.05 BTC"} Flat Fee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium">Operationalized for Weekly Use</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Target className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium">C-Suite Ready Intelligence</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-6"
                    onClick={() => consultationCalendlyLink && window.open(consultationCalendlyLink, '_blank')}
                  >
                    Book Your AI Oracle Session
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                    onClick={() => consultationCalendlyLink && window.open(consultationCalendlyLink, '_blank')}
                  >
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-2/5">
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-lg">
                  <div className="absolute -top-3 -left-3 bg-white p-3 rounded-full shadow-md">
                    <BrainCircuit className="h-8 w-8 text-secondary" />
                  </div>
                  <img 
                    src="/data-insights-analytics.png" 
                    alt="AI Data Analysis Visualization" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Problem Section */}
        <section className="bg-gray-50 py-16 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Executive Blind Spots Are Costing You Millions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Database className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Organizational Silos</h3>
                      <p className="text-gray-700">Critical insights trapped in departmental data. Your teams know things leadership doesn't, creating strategic blind spots.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Delayed Intelligence</h3>
                      <p className="text-gray-700">By the time insights reach the C-suite, the opportunity has passed. Markets move faster than your reporting cycles.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Search className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Invisible Risks & Opportunities</h3>
                      <p className="text-gray-700">Customer churn risks, competitive threats, and growth opportunities hide in plain sight across your data.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <UserRound className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Reactive Leadership</h3>
                      <p className="text-gray-700">Without proactive intelligence, you're always playing catch-up instead of staying ahead of the curve.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Solution Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              AI Oracle: Your Digital Executive Advisor
            </h2>
            
            <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
              We set up an AI-powered intelligence system that becomes part of your executive team. Do it once, then operationalize it into your weekly executive syncs for ongoing strategic advantage.
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Executive Alignment</h3>
                  <p className="text-gray-700">Define your strategic priorities and key questions the AI Oracle should monitor.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Full Data Inventory</h3>
                  <p className="text-gray-700">Map all organizational data sources - from customer interactions to internal communications.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI Oracle Setup</h3>
                  <p className="text-gray-700">Configure AI to surface strategic insights, test assumptions, and identify cross-functional patterns.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Interactive Intelligence</h3>
                  <p className="text-gray-700">Ask questions, test hypotheses, and let AI ask YOU the questions that matter.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Operationalization</h3>
                  <p className="text-gray-700">Integrate AI Oracle into your executive meetings for ongoing strategic intelligence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Benefits Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-16 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Why Leading Executives Choose AI Oracle
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <Rocket className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Foresight</h3>
                  <p className="text-gray-700">See emerging trends and risks before they impact your business.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <BrainCircuit className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Executive Legibility</h3>
                  <p className="text-gray-700">Gain unprecedented visibility across your entire organization.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Alignment</h3>
                  <p className="text-gray-700">Create emergent alignment as all decisions are grounded in organizational data.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Decision Intelligence</h3>
                  <p className="text-gray-700">AI becomes a participant in executive meetings, offering data-backed perspectives.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Living Intelligence System</h3>
                  <p className="text-gray-700">Not a one-time analysis but an ongoing executive intelligence capability.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <DollarSign className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Executive-Ready Implementation</h3>
                  <p className="text-gray-700">Designed specifically for C-suite needs and integrated into your leadership cadence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who Is This For & Data Inputs Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Ideal For:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>C-Suite executives seeking data-driven strategic advantage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Senior leadership teams wanting better organizational visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Organizations in reflection or strategic planning phases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Companies seeking to identify bottlenecks, risks, and hidden opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Executive teams wanting AI as an ongoing strategic advisor</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Intelligence Sources:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Customer Interactions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Internal Communications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Market Intelligence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Employee Feedback</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Clipboard className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Operational Data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Strategic Documents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Deliverables Section */}
        <section className="bg-gray-50 py-16 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Your Executive Intelligence System Includes:</h3>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">AI Oracle configured for your strategic priorities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Integration roadmap for weekly executive syncs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Initial strategic insights and hidden opportunities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Ongoing executive intelligence capability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary-50 py-16 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to See What Others Miss?
              </h2>
              
              <div className="mb-8">
                {usdPrice && !btcLoading ? (
                  <>
                    <span className="text-4xl font-bold text-secondary">{usdPrice}</span>
                    <p className="text-sm text-gray-600 mt-1">(0.05 BTC)</p>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-secondary">0.05 BTC</span>
                )}
                <p className="text-gray-700 mt-2">Initial AI Oracle Setup & Training</p>
                <p className="text-sm font-medium text-secondary mt-1">Satisfaction Guaranteed</p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-6"
                  onClick={() => consultationCalendlyLink && window.open(consultationCalendlyLink, '_blank')}
                >
                  Schedule Your AI Oracle Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10"
                  onClick={() => consultationCalendlyLink && window.open(consultationCalendlyLink, '_blank')}
                >
                  Explore How AI Oracle Fits Your C-Suite
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIOracleSession;
