import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Zap, Cog, TrendingUp, Users, Check, PhoneCall, Bot, Code, UserCheck, Database } from "lucide-react";
import { ServiceFeaturesList } from "@/components/services/ServiceFeaturesList";
import { services } from "@/components/services/data";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

const AIAutomationIntegration = () => {
  const program = services.find(s => s.title === "AI Automation & Custom Integration");
  
  if (!program) return null;

  // Generate structured data
  const serviceStructuredData = generateServicePageStructuredData(
    program.title,
    program.description,
    "https://gsdat.work/ai-automation-integration",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "GSD at Work",
    "Custom Pricing"
  );

  // FAQ structured data
  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is AI Automation & Custom Integration?",
      answer: "This service helps organizations scale from isolated AI wins (0→1 with workshops) to systematic automation (10→100 or even 1→100). We deploy AI workflows, voice agents, custom MCP connectors, and full-stack automation solutions to achieve order-of-magnitude improvements in your business processes."
    },
    {
      question: "What's the difference between this and Quick Win in a Box?",
      answer: "Quick Win in a Box takes you from 0→1 or 1→10 by creating SOPs and custom GPTs. This service goes further, implementing hardcore automation, custom integrations, and enterprise-grade solutions to scale across large organizations or achieve full-blown automation."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work across the full automation spectrum: low-code platforms (n8n, Zapier), custom software development (Replit, custom code), voice agents, and custom MCP connectors for ChatGPT Enterprise and Claude Enterprise integration with your systems of record."
    },
    {
      question: "What kind of improvements can we expect?",
      answer: "We target order-of-magnitude improvements in cycle time reduction across everything from customer inquiries to executive reporting to data entry and retrieval. This creates real operating leverage, setting the foundation for lean growth and EBITDA expansion."
    },
    {
      question: "Do you host the solutions or deploy to our environment?",
      answer: "Both options are available. We can host and manage solutions as a service for you, or deploy automations directly to your environment, depending on your security, compliance, and operational preferences."
    }
  ]);

  const useCases = [
    {
      icon: <Code className="h-6 w-6 text-secondary" />,
      title: "Custom MCP Connectors",
      description: "Connect ChatGPT/Claude Enterprise to your systems of record for deep business insights"
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-secondary" />,
      title: "Voice Agent Deployment",
      description: "Deploy intelligent voice agents for lead qualification and inbound customer inquiries"
    },
    {
      icon: <UserCheck className="h-6 w-6 text-secondary" />,
      title: "Hiring & Recruitment Automation",
      description: "AI-assisted scoring and triaging of candidates, automating resume screening and initial assessments"
    },
    {
      icon: <Database className="h-6 w-6 text-secondary" />,
      title: "Data Entry into Systems of Record",
      description: "Automate data capture and entry into CRM, ATS, ERP, and other critical business systems"
    },
    {
      icon: <Bot className="h-6 w-6 text-secondary" />,
      title: "Executive Reporting Automation",
      description: "Transform multi-day reporting processes into automated real-time dashboards"
    },
    {
      icon: <Zap className="h-6 w-6 text-secondary" />,
      title: "Sales Process Automation",
      description: "Automate lead qualification, follow-ups, and CRM data management end-to-end"
    }
  ];

  const techStack = [
    { name: "n8n", description: "Workflow automation" },
    { name: "Zapier", description: "No-code integrations" },
    { name: "Replit", description: "Custom development" },
    { name: "MCP", description: "AI tool connectivity" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="AI Automation & Custom Integration | GSD at Work - Get Stuff Done with AI"
        description="GSD at Work's AI Automation & Custom Integration: Scale from isolated AI wins to systematic automation. Deploy voice agents, custom MCP connectors, and full-stack automation for order-of-magnitude improvements. From 0→1→10→100."
        canonicalUrl="/ai-automation-integration"
        keywords="AI automation integration, MCP connectors, voice agents, n8n, Zapier, custom software development, ChatGPT Enterprise integration, Claude Enterprise, operating leverage, EBITDA expansion, hiring automation, candidate scoring, ATS integration, CRM automation"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="article"
      />
      
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                Scale from 1→100
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {program.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                You've gone 0→1 with Quick Win in a Box. Maybe 1→10 with SOPs and custom GPTs.
                Now it's time for hardcore automation to scale 10→100 or even 1→100.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 px-8"
                  onClick={() => window.open(program.calendlyLink, '_blank')}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Discovery Call
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="py-6 px-8"
                  onClick={() => document.getElementById('program-details')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Operating Leverage Section */}
            <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-8 rounded-xl border border-secondary/20 mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-4">Real Operating Leverage for Your Business</h2>
              <p className="text-gray-700 mb-6">
                {program.extraText}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">10x-100x</div>
                  <div className="text-sm text-gray-600">Cycle Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">Lean Growth</div>
                  <div className="text-sm text-gray-600">Foundation Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">EBITDA</div>
                  <div className="text-sm text-gray-600">Expansion Ready</div>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Full-Stack Automation Capabilities</h2>
              <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
                We work across the entire automation spectrum - from low-code platforms to custom software development
              </p>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {techStack.map((tech, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    {/* TODO: Replace with actual logos when available */}
                    <div className="text-2xl font-bold text-secondary mb-2">{tech.name}</div>
                    <div className="text-sm text-gray-600">{tech.description}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600">
                Plus custom software development, API integrations, and enterprise platform connectors
              </p>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Common Implementation Areas</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MCP Connector Section */}
            <div className="bg-gray-50 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-4">Custom MCP Connector Development</h2>
              <p className="text-gray-700 mb-6">
                Unlock the power of ChatGPT Enterprise and Claude Enterprise for your business users by building 
                custom MCP (Model Context Protocol) connectors to your systems of record.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What We Build:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Custom connectors for proprietary databases</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Integration with internal APIs and services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Secure authentication and data access controls</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Business Impact:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span className="text-gray-700">Enable natural language queries of business data</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span className="text-gray-700">Generate deep research reports automatically</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span className="text-gray-700">Empower non-technical users with data access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Program Details */}
            <div id="program-details" className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">What's Included</h2>
                <ServiceFeaturesList features={program.features} />
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold text-primary mb-4">Investment</h2>
                <p className="text-4xl font-bold text-secondary mb-2">{program.price}</p>
                <p className="text-gray-600 mb-6">{program.subtext}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Initial discovery and assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Custom automation roadmap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Flexible engagement model</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Hosted or on-premise deployment</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6"
                  onClick={() => window.open(program.calendlyLink, '_blank')}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Discovery Call
                </Button>
                
                <p className="text-gray-600 text-sm text-center mt-4">
                  Let's discuss your specific automation needs and create a custom solution
                </p>
              </div>
            </div>

            {/* Deployment Options */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Flexible Deployment Options</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Managed Service</h3>
                  <p className="text-gray-700 mb-4">
                    We host and manage your automation infrastructure, handling updates, monitoring, and optimization.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      No infrastructure overhead
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Continuous optimization
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      24/7 monitoring
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Deploy to Your Environment</h3>
                  <p className="text-gray-700 mb-4">
                    We deploy automations directly to your infrastructure, giving you full control and ownership.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Complete data sovereignty
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Meets compliance requirements
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Full customization control
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIAutomationIntegration;