
import { ServiceType, PricingTier } from "./types";

export const services: ServiceType[] = [
  {
    title: "Enterprise AI Cooking Show",
    description: "High-energy, live AI transformation demonstration that gets your team excited about what's possible with AI",
    price: "$4,999",
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
    price: "$2,499 per session",
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
    title: "AI Action Workshop",
    description: "Quick win in a box: Transform what takes days or weeks into hours. Break your four-minute mile with AI and gain the know-how to replicate success across your organization",
    price: "$4,999 per session",
    subtext: "Associate-led workshops also available - pricing varies",
    extraText: "100-2000% efficiency gain for targeted tasks. Participants develop transferable SOPs, reduce cycle times, and maintain significantly higher energy levels throughout the workday.",
    pricingTiers: [
      {
        label: 'Founder-Led Workshop',
        price: '$4,999',
        description: 'Led by Christian Ulstrup',
        availability: 'Limited availability',
        calendlyLink: 'https://calendly.com/gsdatwork/ai-workshop'
      },
      {
        label: 'Associate-Led Workshop',
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
    ],
    cta: "Learn More",
    secondaryCta: "Schedule a Consultation",
    calendlyLink: "https://calendly.com/gsdatwork/free-consult",
    learnMoreLink: "/ai-action-workshop",
  },
  {
    title: "10x Effective Executive",
    description: "A 10-week AI-powered transformation program for executives and their teams to accelerate productivity, reclaim time, and master AI tools organization-wide",
    price: "$19,999",
    subtext: "One-time engagement fee",
    extraText: "Transform your organization's productivity through executive leadership. Cut email handling time by 50-80%, reclaim 10+ hours weekly for strategic work, and create scalable AI systems that benefit your entire team.",
    features: [
      "5 bi-weekly coaching sessions (2 hours each)",
      "Team members welcome to join relevant sessions",
      "Personalized AI tool stack for your organization",
      "Cut email handling time by 50-80% across your team",
      "Build scalable AI processes that spread success",
      "Measurable outcomes tied to organizational results",
    ],
    cta: "Learn More",
    secondaryCta: "Schedule a Consultation",
    calendlyLink: "https://calendly.com/gsdatwork/10x-executive-consult",
    learnMoreLink: "/10x-executive",
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
    price: "Starts at $150,000 for 100+ person organizations",
    subtext: "Includes performance-based incentives and scales with org size",
    extraText: "Organization-wide efficiency gains leading to significant cost reduction, accelerated growth in new markets, greater velocity in delivering offerings, and elevated employee energy levels across teams.",
    features: [
      "Fractional Chief AI Officer services",
      "Comprehensive AI opportunity assessment",
      "Custom implementation roadmap",
      "Team training and change management",
      "ROI-focused metrics and tracking",
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
