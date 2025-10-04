import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, Users, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ContextualServiceCTAProps {
  blogTitle: string;
  blogContent: string;
  blogType: "article" | "post";
  className?: string;
}

interface ServiceCTA {
  id: string;
  title: string;
  description: string;
  link: string;
  price: string;
  icon: React.ReactNode;
  keywords: string[];
  cta: string;
  badge?: string;
}

export const ContextualServiceCTA: React.FC<ContextualServiceCTAProps> = ({
  blogTitle,
  blogContent,
  blogType,
  className = ""
}) => {
  // Define services with their targeting keywords
  const services: ServiceCTA[] = [
    {
      id: "enterprise-ai-cooking-show",
      title: "Enterprise AI Cooking Show",
      description: "High-energy, live AI transformation workshop",
      link: "/enterprise-ai-cooking-show",
      price: "$4,999",
      icon: <Zap className="h-6 w-6" />,
      keywords: ["live", "workshop", "demonstration", "team", "enterprise", "cooking", "show"],
      cta: "Book Your Show",
      badge: "Live"
    },
    {
      id: "ai-oracle-session",
      title: "AI Oracle Session",
      description: "Transform executive decision-making with AI-powered organizational intelligence",
      link: "/ai-oracle-session",
      price: "$2,499",
      icon: <BarChart3 className="h-6 w-6" />,
      keywords: ["executive", "strategy", "decision", "leadership", "intelligence", "foresight", "c-suite", "visibility", "alignment", "planning"],
      cta: "Schedule Your AI Oracle Session",
      badge: "Executive Focus"
    },
    {
      id: "ai-action-workshop",
      title: "Quick Win in a Box",
      description: "Transform your ideas into immediate results with hands-on AI implementation",
      link: "/ai-action-workshop",
      price: "0.05 BTC",
      icon: <Zap className="h-6 w-6" />,
      keywords: ["implementation", "practical", "hands-on", "execute", "action", "immediate", "workflow", "process", "tools", "automation"],
      cta: "Get Hands-On Implementation",
      badge: "Quick Results"
    },
    {
      id: "10x-executive",
      title: "10x Effective Executive Program",
      description: "Master AI-powered productivity and executive decision-making over 10 weeks",
      link: "/10x-executive",
      price: "$9,999",
      icon: <Target className="h-6 w-6" />,
      keywords: ["executive", "leadership", "productivity", "strategy", "decision", "management", "effectiveness", "okr", "planning", "time"],
      cta: "Accelerate Your Executive Impact",
      badge: "Executive Focus"
    },
    {
      id: "ai-automation-integration",
      title: "AI Automation & Custom Integration",
      description: "Scale from 10→100 with MCP connectors, voice agents, and full-stack automation",
      link: "/ai-automation-integration",
      price: "Custom",
      icon: <Target className="h-6 w-6" />,
      keywords: ["automation", "workflow", "integration", "scale", "systematic", "agent", "voice", "MCP", "connector", "n8n", "zapier", "operating leverage", "EBITDA", "hiring", "recruitment", "candidate", "ATS", "CRM", "data entry"],
      cta: "Scale Your AI Automation",
      badge: "10→100 Scaling"
    },
    {
      id: "triple-a-transformation",
      title: "Triple-A Transformation Program",
      description: "Complete organizational AI adoption with measurable ROI in 14 weeks",
      link: "/triple-a-transformation",
      price: "Custom",
      icon: <Users className="h-6 w-6" />,
      keywords: ["transformation", "organization", "enterprise", "team", "scale", "adoption", "culture", "change", "roi", "company"],
      cta: "Transform Your Organization",
      badge: "Enterprise Solution"
    }
  ];

  // Analyze content to find most relevant service
  const findBestService = (): ServiceCTA => {
    const combinedText = `${blogTitle} ${blogContent}`.toLowerCase();
    
    // Score each service based on keyword matches
    const scoredServices = services.map(service => {
      const score = service.keywords.reduce((acc, keyword) => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        const matches = combinedText.match(regex);
        return acc + (matches ? matches.length : 0);
      }, 0);
      
      return { service, score };
    });
    
    // Sort by score and return the best match
    scoredServices.sort((a, b) => b.score - a.score);
    
    // If no strong match, default based on blog type
    if (scoredServices[0].score === 0) {
      return blogType === "article" 
        ? services.find(s => s.id === "ai-action-workshop")! 
        : services.find(s => s.id === "10x-executive")!;
    }
    
    return scoredServices[0].service;
  };

  const recommendedService = findBestService();

  // Generate contextual messaging based on content
  const getContextualMessage = (): string => {
    const lowerContent = `${blogTitle} ${blogContent}`.toLowerCase();
    
    if (lowerContent.includes("how to") || lowerContent.includes("implement")) {
      return "Ready to put these insights into action?";
    } else if (lowerContent.includes("strategy") || lowerContent.includes("plan")) {
      return "Turn strategy into execution";
    } else if (lowerContent.includes("challenge") || lowerContent.includes("problem")) {
      return "Solve this challenge with expert guidance";
    } else if (lowerContent.includes("transform") || lowerContent.includes("change")) {
      return "Accelerate your transformation";
    } else {
      return "Take the next step in your AI journey";
    }
  };

  const contextualMessage = getContextualMessage();

  return (
    <Card className={`border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-primary/5 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
            {recommendedService.icon}
          </div>
          <div className="flex-1">
            <Badge variant="secondary" className="mb-1">
              {recommendedService.badge}
            </Badge>
            <CardTitle className="text-xl text-primary">
              {contextualMessage}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-primary mb-2">
            {recommendedService.title}
          </h3>
          <p className="text-gray-600 mb-3">
            {recommendedService.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-secondary">
              {recommendedService.price}
            </span>
            <span className="text-sm text-gray-500">
              Starting price
            </span>
          </div>
        </div>
        
        <div className="space-y-3">
          <Link to={recommendedService.link}>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium">
              {recommendedService.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          
          <Link 
            to="https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-3">
          💡 Not sure if this is right for you? Our consultation is always free.
        </p>
      </CardContent>
    </Card>
  );
};