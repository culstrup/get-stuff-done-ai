
import { ServiceType, PricingTier } from "./types";

export const services: ServiceType[] = [
  {
    title: "Enterprise AI Cooking Show",
    description: "High-energy, live AI transformation demonstration that gets your team excited about what's possible with AI",
    price: "0.05 BTC",
    btcPrice: 0.05,
    subtext: "Premium workshop experience",
    extraText: "Perfect for enterprises and mastermind groups. Watch real transformations happen live, participate in hands-on demonstrations, and leave with the excitement and knowledge to kickstart your AI journey.",
    features: [
      "Live AI demonstrations with real business scenarios",
      "Interactive audience participation and Q&A",
      "Executive engagement and buy-in",
      "Pipeline generation for transformation opportunities",
      "Actionable takeaways for immediate implementation"
    ],
    cta: "Learn More",
    secondaryCta: "Book Your Show",
    calendlyLink: "https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call",
    learnMoreLink: "/enterprise-ai-cooking-show",
  },
  {
    title: "AI Oracle Session",
    description: "Transform executive decision-making with AI-powered organizational insights that integrate into your leadership cadence",
    price: "0.05 BTC per session",
    btcPrice: 0.05,
    subtext: "Executive Intelligence System",
    extraText: "See what others miss. AI Oracle provides C-suite teams with strategic foresight, identifies hidden risks and opportunities, and becomes an ongoing participant in executive decision-making.",
    features: [
      "Gain unprecedented organizational visibility",
      "AI-powered strategic foresight and risk detection",
      "Operationalize into weekly executive syncs",
      "Interactive scenario testing and assumption validation",
      "Create data-driven organizational alignment",
    ],
    cta: "Learn More",
    secondaryCta: "Schedule Executive Briefing",
    calendlyLink: "https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call",
    learnMoreLink: "/ai-oracle-session",
  },
  {
    title: "Quick Win in a Box",
    description: "Get to your outcome by a negotiated time. No more than 3 hours of sponsor team time required. Everything from accelerated contract review to massively faster hiring, financial analysis, GTM prospecting, software development, and analysis of massive unstructured datasets.",
    price: "0.05 BTC per session",
    btcPrice: 0.05,
    subtext: "Performance-based: 50% upfront, 50% upon verified success. Bundle discounts available.",
    extraText: "100-2000% efficiency gain for targeted tasks. We negotiate the outcome beforehand, figure out the scope, and get there in a live working session (90-120 min typically). You'll develop transferable SOPs, reduce cycle times 10x faster, and maintain significantly higher energy levels throughout the workday.",
    pricingTiers: [
      {
        label: 'Founder-Led Session',
        price: '0.05 BTC',
        btcPrice: 0.05,
        description: 'Led by Christian Ulstrup',
        availability: 'Limited availability',
        calendlyLink: 'https://calendly.com/gsdatwork/ai-workshop'
      },
      {
        label: 'Associate-Led Session',
        price: 'pricing varies',
        description: 'Led by GSD Certified Associates',
        availability: 'More flexible scheduling',
        calendlyLink: 'https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call'
      }
    ],
    features: [
      "Turn 2-day tasks into 2-hour victories with 10X transformation",
      "Learn to fish - gain skills to replicate success independently",
      "Create documented processes that spread success virally",
      "Break your four-minute mile - prove what's possible with AI",
      "Includes pre-session discovery and post-session support",
      "Performance-based: 50% upfront, 50% upon verified success"
    ],
    cta: "Learn More",
    secondaryCta: "Schedule a Consultation",
    calendlyLink: "https://calendly.com/gsdatwork/free-consult",
    learnMoreLink: "/ai-action-workshop",
  },
  {
    title: "AI Automation & Custom Integration",
    description: "Scale your AI success from isolated wins to systematic automation. Transform team workflows with AI agents and intelligent automation that integrates seamlessly with your existing systems.",
    price: "Custom Pricing",
    subtext: "Flexible engagement model",
    extraText: "This is where you get real operating leverage in your business - setting the foundation for lean growth and EBITDA expansion. Deploy AI workflows, digital workers, and custom integrations that deliver order-of-magnitude improvements while preparing your organization for scaled AI adoption.",
    features: [
      "Custom MCP connectors for ChatGPT/Claude Enterprise integration",
      "Deploy voice agents for lead qualification & customer inquiries",
      "AI-powered hiring automation: candidate scoring & triaging",
      "Automated data entry into CRM, ATS, ERP systems of record",
      "Full-stack automation: n8n, Zapier, custom software development",
      "Hosted solutions or deploy to your environment",
    ],
    cta: "Learn More",
    secondaryCta: "Schedule Discovery Call",
    calendlyLink: "https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call",
    learnMoreLink: "/ai-automation-integration",
  },
  {
    title: "Triple-A Transformation Program",
    description: "14-week program to revolutionize your operations with AI (Triple-A = Accelerated AI Adoption)",
    price: "Starts at 1 BTC for 100+ person organizations",
    btcPrice: 1.0,
    subtext: "Includes performance-based incentives - Pay full upfront OR share 10-20¢ per EBITDA dollar created",
    extraText: "Organization-wide efficiency gains leading to significant cost reduction, accelerated growth in new markets, greater velocity in delivering offerings, and elevated employee energy levels across teams. Performance incentives based on CFO-signed 1-year EBITDA with time/certainty discounts. For forward-thinking clients, we can structure prediction markets (see arlofs.pro) to incentivize employee participation in transformation.",
    features: [
      "Fractional Chief AI Officer services",
      "Comprehensive AI opportunity assessment",
      "Custom implementation roadmap",
      "Team training and change management",
      "ROI-focused metrics and tracking",
      "Performance-based: Full BTC upfront OR 10-20¢/$1 EBITDA created",
      "Optional: Prediction market incentives for employee engagement"
    ],
    cta: "Learn More",
    secondaryCta: "Schedule a Strategy Call",
    calendlyLink: "https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call",
    learnMoreLink: "/triple-a-transformation",
  },
];

export const valueMetrics = [
  "Immediate cost reduction (e.g., 30-40% on target processes)",
  "Direct revenue impact (e.g., 25%+ growth in target areas)",
  "Productivity gains (e.g., 3x faster execution on key tasks)",
  "Time saved (e.g., 15+ hours per week per team)",
  "ROI delivered (e.g., 5-10x return)",
];
