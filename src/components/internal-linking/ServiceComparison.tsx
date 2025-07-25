import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Clock, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceComparisonProps {
  title?: string;
  description?: string;
  showAllServices?: boolean;
  highlightService?: string;
}

export const ServiceComparison: React.FC<ServiceComparisonProps> = ({
  title = "Choose the Right Program for You",
  description = "Compare our AI implementation services to find the perfect fit for your needs and goals.",
  showAllServices = true,
  highlightService
}) => {
  const services = [
    {
      id: "ai-oracle-session",
      name: "AI Oracle Session",
      subtitle: "Executive Intelligence System",
      price: "$2,499",
      duration: "Setup & Integration",
      ideal: "C-suite & senior leadership",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-green-500",
      link: "/ai-oracle-session",
      features: [
        "AI-powered executive intelligence",
        "Strategic foresight & risk detection",
        "Integrate into executive syncs",
        "Interactive scenario testing",
        "Organizational visibility"
      ],
      outcomes: [
        "Proactive strategic planning",
        "Data-driven alignment",
        "AI as C-suite participant"
      ]
    },
    {
      id: "ai-action-workshop",
      name: "AI Action Workshop",
      subtitle: "Quick Start Implementation",
      price: "$4,999",
      duration: "Quick Win Implementation",
      ideal: "Individual contributors, small teams",
      icon: <Target className="h-6 w-6" />,
      color: "bg-blue-500",
      link: "/ai-action-workshop",
      features: [
        "Immediate hands-on implementation",
        "Working AI solution by end of session",
        "Transferable frameworks and SOPs",
        "Follow-up support and templates",
        "Perfect for testing our approach"
      ],
      outcomes: [
        "100-2000% efficiency gains",
        "10X transformation in hours not days",
        "Ready-to-use processes"
      ]
    },
    {
      id: "10x-executive",
      name: "10x Executive Program",
      subtitle: "Executive & Team Transformation",
      price: "$19,999",
      duration: "10 weeks",
      ideal: "Executives and their teams",
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-500",
      link: "/10x-executive",
      features: [
        "5 bi-weekly sessions (2 hours each)",
        "Team members welcome to join",
        "Organization-wide AI implementation",
        "Scalable automation frameworks",
        "Session recordings for knowledge sharing"
      ],
      outcomes: [
        "10x productivity across teams",
        "Organization-wide AI adoption",
        "Scalable AI processes"
      ]
    },
    {
      id: "ai-automation-integration",
      name: "AI Automation & Custom Integration",
      subtitle: "Scale from 10→100",
      price: "Custom",
      duration: "Flexible",
      ideal: "Growing teams & departments",
      icon: <Target className="h-6 w-6" />,
      color: "bg-indigo-500",
      link: "/ai-automation-integration",
      features: [
        "Custom MCP connectors for ChatGPT/Claude Enterprise",
        "Voice agents & workflow automation",
        "Full-stack: n8n, Zapier, custom code",
        "Deploy to your environment or hosted",
        "Order-of-magnitude improvements"
      ],
      outcomes: [
        "10x-100x cycle time reduction",
        "Real operating leverage achieved",
        "EBITDA expansion foundation"
      ]
    },
    {
      id: "triple-a-transformation",
      name: "Triple-A Transformation",
      subtitle: "Organizational Change",
      price: "Custom",
      duration: "14 weeks",
      ideal: "Organizations, large teams",
      icon: <Target className="h-6 w-6" />,
      color: "bg-orange-500",
      link: "/triple-a-transformation",
      features: [
        "Complete organizational AI adoption",
        "Team-wide transformation program",
        "Measurable ROI and KPI tracking",
        "Change management support",
        "Custom implementation roadmap"
      ],
      outcomes: [
        "Organization-wide AI adoption",
        "Measurable business outcomes",
        "Cultural transformation"
      ]
    }
  ];

  const displayServices = showAllServices ? services : services.filter(s => s.id !== highlightService);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {displayServices.map((service, index) => (
            <Card 
              key={service.id}
              className={`group hover:shadow-2xl transition-all duration-300 border-2 ${
                service.id === highlightService 
                  ? 'border-secondary shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-secondary/30'
              } relative overflow-hidden`}
            >
              {service.id === highlightService && (
                <div className="absolute top-0 left-0 right-0 bg-secondary text-white text-center py-1 text-sm font-medium">
                  Recommended for You
                </div>
              )}
              
              <CardHeader className={`pb-4 ${service.id === highlightService ? 'pt-8' : ''}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {service.duration}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                  {service.name}
                </CardTitle>
                
                <p className="text-sm text-gray-600 mb-2">
                  {service.subtitle}
                </p>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-secondary">
                    {service.price}
                  </span>
                  {service.price !== "Custom" && (
                    <span className="text-sm text-gray-500">one-time</span>
                  )}
                </div>
                
                <p className="text-xs text-gray-500 mt-2">
                  Ideal for: {service.ideal}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-medium text-primary mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-primary mb-3">Expected Outcomes:</h4>
                  <ul className="space-y-1">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <ArrowRight className="h-3 w-3 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={service.link}>
                  <Button 
                    className={`w-full ${
                      service.id === highlightService 
                        ? 'bg-secondary hover:bg-secondary/90' 
                        : 'bg-primary hover:bg-primary/90'
                    } text-white group-hover:shadow-md transition-all`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 relative z-10">
          <p className="text-gray-600 mb-6">
            🤔 <strong>Not sure which program is right for you?</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20"
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 relative z-20">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="tel:+18482610259" className="relative z-20">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 relative z-20">
                Call AI Assistant: (848) 261-0259
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};