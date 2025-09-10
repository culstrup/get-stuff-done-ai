import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Github, Download, BookOpen, Users, Target, TrendingUp, BarChart, FileText, Lightbulb, Scale, Search, Phone, Heart, DollarSign, Clock, Brain, Zap, AlertCircle, Mic, Shield, Link, ArrowRight, XCircle, Trophy, MessageSquare } from "lucide-react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { shadows, gradients, buttonStyles, animations, borderRadius, spacing } from "@/lib/design-tokens";

const SalesDiscovery = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Add scroll-triggered animations
  const animateOnScroll = "transition-all duration-700 ease-out";

  const serviceStructuredData = generateServicePageStructuredData(
    "GSD Sales Discovery Playbook - AI Adoption Sales Methodology",
    "Open-source sales discovery methodology for AI transformation. Learn to uncover 10x opportunities through structured discovery conversations focused on creating genuine value for prospects.",
    "https://gsdat.work/methodology/sales-discovery",
    "https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png",
    "GSD at Work LLC",
    "Free (Open Source)"
  );

  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the GSD Sales Discovery methodology?",
      answer: "The GSD Sales Discovery methodology is an open-source framework for conducting discovery calls that focuses on 'willing the good of the other person.' It transforms sales conversations from transactions into partnerships by ensuring every prospect is incontrovertibly better off from the interaction."
    },
    {
      question: "What makes this discovery approach different?",
      answer: "Unlike traditional sales methodologies, GSD Discovery prioritizes the prospect's success over closing deals. Every call must leave the prospect less anxious, more excited, and on a better trajectory - regardless of whether they become a customer."
    },
    {
      question: "What are the three paths in the methodology?",
      answer: "The methodology presents three clear paths: Pause (advising against action when appropriate), DIY (providing explicit steps for self-implementation with scheduled follow-up), and Accelerate (formal engagement to increase probability of desired outcomes). This structure respects prospect agency while ensuring value delivery."
    },
    {
      question: "How should I prepare for discovery calls?",
      answer: "Preparation is critical. Build a comprehensive dossier using AI research agents, gather financial data, estimate ROI potential, and use pre-call data gathering techniques like strategic email questions or AI voice assistants. Never enter a call unprepared - success is determined before you speak."
    },
    {
      question: "How do I price engagements using this methodology?",
      answer: "Never bill hourly - sell outcomes. Use the 'offensive amount' question to gauge maximum willingness to pay, then discount based on your confidence level (minimum 51%) and payment terms. Cash upfront with satisfaction guarantee for smaller engagements, performance-based for larger ones."
    }
  ]);

  const philosophyPrinciples = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Will the Good of the Other",
      description: "Every interaction must prioritize the prospect's goals. Based on the classical definition of charity (caritas), we commit to understanding and advancing their good, not ours."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Value Over Revenue",
      description: "Whether or not they become a customer is secondary. What matters is that they leave better off - less anxious, more excited, on a genuinely better trajectory."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Come to Terms First",
      description: "Before you can will someone's good, you must understand what that good is. Deep discovery and genuine curiosity are prerequisites for value creation."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Create Immediate Impact",
      description: "Every call should deliver actionable insights they can apply immediately. Share counterintuitive wisdom from your experience that challenges their assumptions."
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "The Preparation",
      subtitle: "Before the Call",
      icon: <Search className="w-5 h-5" />,
      description: "Success is determined before you ever speak to the prospect",
      steps: [
        {
          title: "Block Your Time",
          details: "Schedule 15 minutes before for focused prep, 15 minutes after for comprehensive follow-up"
        },
        {
          title: "Build the Dossier",
          details: "Use AI research agents to gather public information about the person, organization, and financials"
        },
        {
          title: "Understand the Financials",
          details: "Estimate revenue, profit, peer comparison, and potential ROI from your solution"
        },
        {
          title: "Gather Private Data",
          details: "Send strategic email questions or deploy AI voice assistants for pre-call intake"
        }
      ]
    },
    {
      phase: "Phase 2",
      title: "The Execution",
      subtitle: "During the Call",
      icon: <Phone className="w-5 h-5" />,
      description: "Guide the conversation with purpose and curiosity",
      steps: [
        {
          title: "Set the Stage",
          details: "Confirm time, state your goal to understand context and be maximally helpful"
        },
        {
          title: "Establish Present State",
          details: "Share your research findings, let them correct and fill gaps"
        },
        {
          title: "Define Desired Future",
          details: "Ask 'If you could wave a magic wand, where would you want to be in 3 months?'"
        },
        {
          title: "Identify the Gap",
          details: "Use counterfactuals: 'What would have to be true for that to happen?'"
        },
        {
          title: "Vision Stress Test",
          details: "Paint vivid picture of proximal outcome - answer must be 'fantastic' or keep discovering"
        }
      ]
    },
    {
      phase: "Phase 3",
      title: "The Decision",
      subtitle: "Structuring the Offer",
      icon: <Scale className="w-5 h-5" />,
      description: "Present three clear paths forward",
      steps: [
        {
          title: "Path 1: Pause",
          details: "Advise against action when it would be detrimental - builds immense trust"
        },
        {
          title: "Path 2: DIY",
          details: "Provide explicit action plan, secure commitment on timeline, schedule follow-up"
        },
        {
          title: "Path 3: Accelerate",
          details: "Formal engagement to increase probability of achieving desired outcome faster"
        }
      ]
    },
    {
      phase: "Phase 4",
      title: "The Commitment",
      subtitle: "After the Call",
      icon: <Check className="w-5 h-5" />,
      description: "Every successful call ends with clear mutual commitment",
      steps: [
        {
          title: "Execute Follow-Up",
          details: "Use your 15-minute block to draft comprehensive email using call transcript"
        },
        {
          title: "Schedule Check-ins",
          details: "For DIY path, schedule automated follow-up for their committed date"
        },
        {
          title: "Cultivate Goodwill",
          details: "Create space for reciprocity - ask for introductions or connections"
        }
      ]
    }
  ];

  const pricingFramework = [
    {
      title: "Never Bill Hourly",
      icon: <Clock className="w-5 h-5" />,
      description: "You're selling outcomes, not time. AI enables massive acceleration - hourly billing leaves value on the table."
    },
    {
      title: "The 'Offensive Amount' Question",
      icon: <DollarSign className="w-5 h-5" />,
      description: "Ask: 'If I could guarantee that outcome right now, what would be an offensive amount to ask for?' This reveals maximum willingness to pay."
    },
    {
      title: "Risk-Based Pricing",
      icon: <AlertCircle className="w-5 h-5" />,
      description: "Discount based on confidence (minimum 51%) and payment terms. Cash upfront = lower price, performance-based = higher price."
    },
    {
      title: "Quantify Both Sides",
      icon: <BarChart className="w-5 h-5" />,
      description: "Frame the upside potential AND the downside risk of inaction. Loss aversion is powerful motivation."
    }
  ];

  const researchPromptTemplate = `
Draft a dossier on [Person's Name], [Title] at [Company]. 
I am meeting with them to discuss [Context].

Focus on:
1. Professional background and recent activity
2. The organization's business model and customer experience
3. Financial metrics:
   - Revenue & profit estimates
   - Growth trajectory
   - Peer comparison
4. Potential ROI from our solution
5. Strategic initiatives they may be pursuing
6. Challenges they're likely facing

Draw a line from our potential solution to financial outcomes 
(increased revenue, cost savings, higher ROE).
  `;

  const visionTestQuestions = [
    "If I could snap my fingers and guarantee you'd have 10 qualified meetings with LPs booked by the conference, how would that feel?",
    "If we could guarantee your team would save 20 hours per week on repetitive tasks starting next month, what would that mean for you?",
    "If you knew with certainty that your conversion rate would double in 90 days, how would that change your planning?"
  ];

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="GSD Sales Discovery Playbook - Open Source AI Sales Methodology | GSD at Work"
        content="Master AI transformation discovery calls with our open-source methodology. Learn to uncover 10x opportunities while genuinely helping prospects succeed. Transform sales from transaction to partnership."
        canonicalUrl="https://gsdat.work/methodology/sales-discovery"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
        ogImage="https://gsdat.work/og-image.png"
        ogImageAlt="GSD Sales Discovery Playbook - Willing the Good of the Other"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-float animation-delay-500" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in-down hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-3 h-3 mr-1" />
              Open Source Methodology
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up animate-gradient-shift">
              The GSD Sales Discovery Playbook
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 animate-fade-in-up animation-delay-200">
              Willing the Good of the Other
            </p>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
              Transform sales conversations from transactions into partnerships. 
              Every interaction must leave the prospect <strong className="text-blue-600">incontrovertibly better off</strong> - 
              less anxious, more excited, and on a genuinely better trajectory.
            </p>
            
            <div className="glass-effect border border-blue-200/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto shadow-xl animate-fade-in-up animation-delay-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                📚 Based on St. Thomas Aquinas's Definition of Charity
              </p>
              <p className="text-blue-800">
                <em className="font-serif text-lg">"Caritas"</em> - To will the good of the other. This isn't about closing deals; 
                it's about creating value. When you commit to this, the right business naturally follows.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.location.href = "#methodology"}
              >
                Start Learning the Methodology
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.location.href = "/associate-program"}
              >
                <Users className="mr-2 h-5 w-5" />
                Become an Associate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Core Philosophy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {philosophyPrinciples.map((principle, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group hover-lift overflow-hidden relative animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${gradients.primaryLight} group-hover:scale-110 transition-transform duration-300`}>
                        {principle.icon}
                      </div>
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className={`mt-8 ${shadows.cardEffect} border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-500`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                  The Mindset Shift
                </h3>
                <p className="text-orange-800 mb-4">
                  This approach fights against selfish human nature, but the results compound. 
                  Get enough reps, see the fruit, and it becomes natural. Justice works in mysterious ways - 
                  goodwill creates capital, attention, and opportunities that flow back to you.
                </p>
                <p className="text-orange-800 font-medium">
                  Even if you don't get paid immediately, you're cultivating a network of authentic advocates 
                  who spread your name in private channels where decisions are made.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualification Patterns - Key Differentiators */}
      <section className={`${spacing.section.md} bg-gradient-to-br from-blue-50 via-white to-purple-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              The Five Key Differentiators
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Pattern recognition from hundreds of calls reveals what separates winning from losing prospects
            </p>
            
            <div className="space-y-8">
              {/* Differentiator 1: Problem Framing */}
              <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Problem Framing: Single Point of Pain vs. Laundry List
                    </CardTitle>
                    <Badge className="bg-red-100 text-red-800">Most Critical</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Winning Pattern
                      </h4>
                      <p className="text-sm text-green-800 mb-3">
                        Laser focus on one or two critical, interconnected problems that are:
                      </p>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>• Specific and quantifiable</li>
                        <li>• Tied to revenue or strategic goals</li>
                        <li>• Causing immediate business pain</li>
                        <li>• Clear in scope and impact</li>
                      </ul>
                      <p className="text-xs text-green-600 mt-3 italic">
                        Example: "Our inefficient recruiting process for 30,000+ annual hires is our biggest revenue risk"
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        Losing Pattern
                      </h4>
                      <p className="text-sm text-red-800 mb-3">
                        Scattered list of potential improvements without prioritization:
                      </p>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• Multiple "nice-to-have" improvements</li>
                        <li>• No central urgent driver</li>
                        <li>• Exploratory brainstorming mode</li>
                        <li>• Unable to prioritize impact</li>
                      </ul>
                      <p className="text-xs text-red-600 mt-3 italic">
                        Example: "We want to improve case management, mailroom, billing, intake, and reporting"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Differentiator 2: Urgency & Stakes */}
              <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    Urgency & Stakes: Bleeding Neck vs. Vitamin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Winning: High Stakes, Immediate Timeline</h4>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                          <Zap className="w-4 h-4 mt-0.5" />
                          <span>Clear time-bound financial threat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="w-4 h-4 mt-0.5" />
                          <span>Risk of losing major customers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="w-4 h-4 mt-0.5" />
                          <span>Hard deadlines with consequences</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">Losing: Important but Not Urgent</h4>
                      <ul className="space-y-2 text-sm text-red-700">
                        <li className="flex items-start gap-2">
                          <Clock className="w-4 h-4 mt-0.5" />
                          <span>Long-term efficiency improvements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="w-4 h-4 mt-0.5" />
                          <span>Recurring inconveniences, not crises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="w-4 h-4 mt-0.5" />
                          <span>Future-state desires, not present pain</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Differentiator 3: Authority */}
              <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Prospect's Role: Decision-Maker vs. Information Gatherer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Winning: Direct Authority</h4>
                      <p className="text-sm text-green-700">
                        Speaking directly to C-Suite, President, or Department Head with:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-green-700">
                        <li>• P&L responsibility</li>
                        <li>• Budget authority</li>
                        <li>• Mandate to solve the problem</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">Losing: Intermediary</h4>
                      <p className="text-sm text-red-700">
                        Speaking with someone who:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-red-700">
                        <li>• Needs approval from others</li>
                        <li>• Delegates next steps to subordinates</li>
                        <li>• Is "looking into options"</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Differentiator 4: Call Dynamics */}
              <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600" />
                    Call Dynamics: Convergent vs. Divergent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Winning: Quick Convergence</h4>
                      <p className="text-sm text-green-700">
                        Conversation quickly narrows to a specific, actionable "quick win" that can be implemented immediately
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">Losing: Endless Exploration</h4>
                      <p className="text-sm text-red-700">
                        Conversation remains broad, exploring many possibilities without landing on a concrete starting point
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Differentiator 5: Mindset */}
              <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Brain className="w-5 h-5 text-indigo-600" />
                    Mindset: Problem-Focused vs. Solution-Focused
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Winning: Problem Obsessed</h4>
                      <p className="text-sm text-green-700">
                        Describes the pain, business impact, and consequences of inaction. Open to your expertise on how to solve it.
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">Losing: Solution Shopping</h4>
                      <p className="text-sm text-red-700">
                        Fixated on specific technical features. Gets stuck on "can AI do X?" rather than the business problem to solve.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Rorschach Test Technique */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className={`${shadows.cardEffect} border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-purple-50`}>
              <CardHeader className="pb-4">
                <Badge className="mb-4 bg-primary text-white">Game-Changing Technique</Badge>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  The Rorschach Test: Your Hidden Qualification Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white/80 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">The Discovery</h3>
                  <p className="text-gray-700 mb-4">
                    Analysis of successful calls reveals a powerful pattern: When you tell an illustrative story early in the conversation,
                    the prospect's reaction instantly reveals whether they'll become a customer.
                  </p>
                  <p className="text-gray-700 font-medium">
                    The story is the inkblot. Their response tells you everything.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Winning Response Pattern
                    </h4>
                    <p className="text-sm text-green-800 mb-3">
                      The prospect immediately:
                    </p>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Interrupts to ask about the workflow</li>
                      <li>• Recognizes their own problem in your story</li>
                      <li>• Reframes their situation in that context</li>
                      <li>• Scales it to their larger challenge</li>
                    </ul>
                    <p className="text-xs text-green-600 mt-3 italic">
                      "That's exactly our problem, but we have it at 10x the scale..."
                    </p>
                  </div>

                  <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Losing Response Pattern
                    </h4>
                    <p className="text-sm text-red-800 mb-3">
                      The prospect:
                    </p>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Asks technical questions about HOW</li>
                      <li>• Treats it as an interesting anecdote</li>
                      <li>• Gets stuck on implementation details</li>
                      <li>• Never connects it to their own pain</li>
                    </ul>
                    <p className="text-xs text-red-600 mt-3 italic">
                      "What technology did you use? Is that ChatGPT? How does it integrate?"
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-900">
                    <strong className="text-yellow-900">Key Insight:</strong> You're not just telling stories for rapport. 
                    You're running a live qualification test. Winners see their world in your story. 
                    Losers just see an interesting story.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Anchor-Story-Pivot Framework */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              The Anchor-Story-Pivot Framework
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Stop waiting for prospects to reveal their problems. Use this three-step process to surface their most critical pain in the first 10-15 minutes.
            </p>

            <div className="space-y-6">
              {/* Step 1: Anchor */}
              <Card className={`${shadows.cardEffect} hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <CardTitle className="text-xl">Anchor (Listen for the Domain)</CardTitle>
                      <CardDescription>First 2-3 minutes</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Listen for the general business area of their pain. Don't let them give you a laundry list - just get a sense of the territory:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-semibold text-sm text-blue-900">Sales/Growth</p>
                      <p className="text-xs text-blue-700">Pipeline, conversion, outreach</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-semibold text-sm text-green-900">Operations</p>
                      <p className="text-xs text-green-700">Efficiency, automation, quality</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-sm text-purple-900">Talent/Hiring</p>
                      <p className="text-xs text-purple-700">Recruiting, training, retention</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: Story */}
              <Card className={`${shadows.cardEffect} hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <CardTitle className="text-xl">Story (Deploy the Rorschach Test)</CardTitle>
                      <CardDescription>Minutes 3-7</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Interrupt their exploration with: "That reminds me of a situation with another client..." 
                    Then tell your most relevant, vivid success story for that domain:
                  </p>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold text-sm">If they mention growth:</p>
                      <p className="text-sm text-gray-600">Tell about analyzing 40,000 data points to drive word-of-mouth growth</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-semibold text-sm">If they mention operations:</p>
                      <p className="text-sm text-gray-600">Tell about solving a customer service crisis that risked major accounts</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-semibold text-sm">If they mention talent:</p>
                      <p className="text-sm text-gray-600">Tell about fixing a high-volume hiring process losing revenue</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Focus on the business problem and outcome, not the technology.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3: Pivot */}
              <Card className={`${shadows.cardEffect} hover:shadow-xl transition-all duration-300 border-2 border-primary/20`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <CardTitle className="text-xl">Pivot (Ask The One Question)</CardTitle>
                      <CardDescription>Immediately after the story</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/5 p-6 rounded-lg mb-4">
                    <p className="text-lg font-semibold text-primary mb-2">The One Question:</p>
                    <p className="text-xl italic text-gray-800">
                      "What is the single biggest, most expensive version of that problem in your world right now?"
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">This question is engineered to:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Force Prioritization</p>
                        <p className="text-xs text-gray-600">Compels them to identify their #1 pain</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Frame for Value</p>
                        <p className="text-xs text-gray-600">"Most expensive" forces ROI thinking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Link className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Connect to Proof</p>
                        <p className="text-xs text-gray-600">Anchors to your proven success</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Qualify Authority</p>
                        <p className="text-xs text-gray-600">Leaders answer instantly, others struggle</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-900">
                      <strong>Critical:</strong> A strategic leader will answer immediately with specifics. 
                      An information gatherer will hesitate, deflect, or stay vague. Their response is your clearest qualification signal.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Phases */}
      <section id="methodology" className={`${spacing.section.md} bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative`}>
        <div className="absolute inset-0 bg-grid-gray-100/[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center animate-fade-in-down">
              The Four-Phase Process
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              From preparation to commitment, every step is designed to maximize value delivery
            </p>
            
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${phaseIndex * 150}ms` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full ${gradients.primaryLight} animate-pulse-soft`}>
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {phase.phase}: {phase.title}
                    </h3>
                    <p className="text-gray-600">{phase.subtitle}</p>
                  </div>
                </div>
                
                <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300 hover-lift overflow-hidden relative`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
                  <CardHeader>
                    <CardDescription className="text-base">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex gap-4 group hover:bg-gray-50/50 p-3 rounded-lg transition-all duration-200">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {stepIndex + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Three Paths */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              The Three Paths Forward
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="destructive">Path 1</Badge>
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl">Pause</CardTitle>
                  <CardDescription>When action would be detrimental</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Rare but powerful. When pursuing their idea would harm them, advise against it.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Example:</strong> "You're chasing an AI trend that doesn't fit your business model. 
                      I recommend focusing on your core strengths instead."
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    This builds immense trust and demonstrates true commitment to their success.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300 border-blue-200`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800">Path 2 (Default)</Badge>
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">DIY</CardTitle>
                  <CardDescription>Self-implementation with guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Your default value-add. Provide explicit, actionable steps to achieve their goal themselves.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Share the "secret" - exact steps and tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Include counterintuitive insights from experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Get commitment: "When will you have this done?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Schedule follow-up: "Can I check in on that date?"</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300 border-green-200`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-100 text-green-800">Path 3</Badge>
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Accelerate</CardTitle>
                  <CardDescription>Formal engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Take on the work to increase probability of success, faster.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900">Frame the Value</p>
                      <p className="text-sm text-green-800">
                        Quantify upside potential + downside of inaction
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900">Determine Investment</p>
                      <p className="text-sm text-green-800">
                        Use "offensive amount" question, discount by confidence
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900">Structure Terms</p>
                      <p className="text-sm text-green-800">
                        Cash upfront or performance-based, never hourly
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Framework */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Pricing & Terms Framework
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {pricingFramework.map((item, index) => (
                <Card key={index} className={`${shadows.cardEffect}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${gradients.primaryLight}`}>
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className={`${shadows.cardEffect} ${gradients.secondaryLight}`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Payment Structure Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Cash Upfront (Lower Risk)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Lower price for client</li>
                      <li>• Satisfaction guarantee</li>
                      <li>• Ideal for initial engagements</li>
                      <li>• Filters for serious clients</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance-Based (Higher Risk)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Higher price for client</li>
                      <li>• Pay on successful completion</li>
                      <li>• Demonstrates confidence</li>
                      <li>• Suitable for larger engagements</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-900">
                    <strong>Remember:</strong> Minimum 51% confidence required. Never take on engagements 
                    where success probability is below this threshold. Rescope if needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Real-World Examples & Scenarios
            </h2>
            
            <div className="space-y-8">
              <Card className={`${shadows.cardEffect} border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:border-l-8`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    The Pause Path: AI Trend Chaser
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Scenario:</strong> A traditional manufacturing CEO wants to "put AI on everything" after a conference.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Discovery:</strong> Their core competency is precision engineering. Their customers value reliability over innovation. 
                    AI implementation would distract from their differentiator.
                  </p>
                  <p className="text-gray-700 italic">
                    <strong>Your Response:</strong> "I'm going to recommend something unusual - don't pursue AI right now. 
                    Your 98% on-time delivery is why Fortune 500s choose you. Focus on getting to 99.5% instead. 
                    That's worth $2M more than any AI initiative."
                  </p>
                  <p className="text-sm text-green-700 mt-3">
                    <strong>Result:</strong> They become your biggest advocate, referring 3 clients who actually need AI transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:border-l-8`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    The DIY Path: Recruiter's 10x Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Scenario:</strong> A $500 engagement to help one recruiter optimize their workflow.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Discovery:</strong> They spend 3 hours daily typing up candidate notes into their ATS.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>DIY Solution:</strong> "Use this voice-to-text template with Claude. Record your thoughts, 
                    paste the transcript, and it formats everything for your ATS. Here's the exact prompt..."
                  </p>
                  <p className="text-gray-600 italic mb-3">
                    <strong>Commitment:</strong> "When will you test this with 5 candidates?" → "By Friday."
                    <br />
                    <strong>Follow-up:</strong> Automated email scheduled for Friday afternoon.
                  </p>
                  <p className="text-sm text-green-700">
                    <strong>Result:</strong> They save 2.5 hours daily. Six months later, their company engages you for 
                    a $50K enterprise transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:border-l-8`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    The Accelerate Path: Top-of-Funnel Crisis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Scenario:</strong> SaaS startup with 0.1% cold email response rate, burning $50K/month, 
                    4 months runway remaining.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Discovery:</strong> Generic messaging, no personalization, targeting too broad.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Vision Test:</strong> "If I could guarantee 100 qualified meetings booked next month, 
                    how would that feel?" → "That would literally save our company!"
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Offensive Amount Question:</strong> "What would be an offensive amount to ask for that?" 
                    → "$75,000"
                  </p>
                  <p className="text-gray-700 italic mb-3">
                    <strong>Your Offer:</strong> "For $15K upfront, I'll build an AI-powered outbound system using 
                    Clay + GPT-4 + multi-channel sequences. If we don't book 50 meetings, full refund."
                  </p>
                  <p className="text-sm text-green-700">
                    <strong>Result:</strong> 73 meetings booked, 12 deals closed, company extends runway by 18 months.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:border-l-8`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-orange-600" />
                    The Tire Kicker: "Just Exploring Options"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Red Flags:</strong> Vague about budget, no specific pain point, "just want to learn about AI," 
                    multiple stakeholders but no decision maker present.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Your Response:</strong> Shift to DIY immediately. Give them valuable resources, 
                    connect on LinkedIn, but don't invest more time.
                  </p>
                  <p className="text-gray-700 italic">
                    <strong>Script:</strong> "Based on what you've shared, you're in exploration mode. Here's my 
                    AI Readiness Checklist. Once you identify a specific workflow bottleneck costing over $50K annually, 
                    let's reconnect."
                  </p>
                  <p className="text-sm text-blue-700 mt-3">
                    <strong>Lesson:</strong> Qualify early and often. Your time has value - protect it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Technology Stack & Implementation
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover-lift group animate-fade-in-up`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${gradients.primaryLight} group-hover:scale-110 transition-transform duration-300`}>
                      <Search className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Research & Intelligence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>ChatGPT/Claude:</strong> Deep research agents with web browsing
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Perplexity:</strong> Real-time market intelligence
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Clay.com:</strong> Scalable data enrichment and qualification
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover-lift group animate-fade-in-up animation-delay-200`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${gradients.primaryLight} group-hover:scale-110 transition-transform duration-300`}>
                      <Mic className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Call & Capture Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Fireflies.ai:</strong> Automatic transcription and note-taking
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Vapi:</strong> AI voice assistant for pre-call intake
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Calendly:</strong> Scheduling with intake questions
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover-lift group animate-fade-in-up animation-delay-400`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${gradients.primaryLight} group-hover:scale-110 transition-transform duration-300`}>
                      <Link className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Relationship & Follow-up</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Happenstance:</strong> Find warm intros in your network
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Shortwave/Superhuman:</strong> Email scheduling and automation
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Clay:</strong> Data enrichment and personalization
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className={`${shadows.cardEffect} ${gradients.secondaryLight}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  Voice Assistant Setup (Vapi)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-4">
                    <p className="text-sm text-yellow-900">
                      <strong>Note:</strong> This is a sample intake script. To deploy, you'll need to create a proper system prompt 
                      that gives the assistant full context about your business, expertise, and discovery goals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sample Pre-Call Intake Script</h4>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm font-mono">
                        "Hi! I'm helping [Your Name] prepare for your upcoming conversation. 
                        To make the most of your time together, I'd love to learn more about your situation.
                        <br /><br />
                        First, what's the biggest challenge you're facing in your business right now?
                        <br /><br />
                        [Listen and probe deeper]
                        <br /><br />
                        What would success look like for you in 3 months?
                        <br /><br />
                        What have you already tried to solve this problem?
                        <br /><br />
                        On a scale of 1-10, how urgent is solving this for you?"
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implementation Steps</h4>
                    <ol className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">1.</span>
                        Deploy Vapi agent with intake script
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">2.</span>
                        Add phone number to calendar invite: "Call 555-XXX-XXXX for optional pre-meeting intake (5 min)"
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">3.</span>
                        Review transcript before live call
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">4.</span>
                        Start conversation with: "I reviewed your intake call notes..."
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Tools & Templates */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Practical Tools & Templates
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Research Dossier Prompt
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    <pre className="whitespace-pre-wrap">{researchPromptTemplate}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Vision Test Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Use these to validate you've found the right proximal goal:
                  </p>
                  <ul className="space-y-3">
                    {visionTestQuestions.map((question, index) => (
                      <li key={index} className="text-sm italic text-gray-700 pl-4 border-l-2 border-primary/30">
                        "{question}"
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    The answer must be "fantastic" or "incredible" - anything less means more discovery needed.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Time Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Before Call (15 min)</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Review dossier and research</li>
                        <li>• Prepare questions and hypothesis</li>
                        <li>• Set up note-taking (Fireflies)</li>
                        <li>• Get in the right mindset</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-semibold text-sm mb-1">During Call (20-50 min)</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• 2 min: Set stage and confirm time</li>
                        <li>• 10 min: Establish current state</li>
                        <li>• 15 min: Discovery and future state</li>
                        <li>• 10 min: Present paths forward</li>
                        <li>• 5 min: Secure commitments</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="font-semibold text-sm mb-1">After Call (15 min)</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Draft comprehensive follow-up</li>
                        <li>• Schedule DIY check-ins</li>
                        <li>• Update CRM and pipeline</li>
                        <li>• Share insights with team</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Follow-Up Templates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">DIY Follow-Up Structure</p>
                      <ol className="text-xs text-gray-600 space-y-1 list-decimal list-inside">
                        <li>Thank them for their time</li>
                        <li>Summarize key insights discovered</li>
                        <li>Provide detailed DIY instructions</li>
                        <li>Include resources and tools</li>
                        <li>Confirm their commitment date</li>
                        <li>Schedule check-in reminder</li>
                      </ol>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Accelerate Follow-Up Structure</p>
                      <ol className="text-xs text-gray-600 space-y-1 list-decimal list-inside">
                        <li>Restate the discovered opportunity</li>
                        <li>Quantify potential impact</li>
                        <li>Outline proposed approach</li>
                        <li>Present investment and terms</li>
                        <li>Include clear next steps</li>
                        <li>Attach relevant case studies</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prospect Profiles */}
      <section className={`${spacing.section.md} bg-gradient-to-br from-indigo-50 via-white to-blue-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Profile of a Winning vs. Losing Prospect
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Winning Prospect Profile */}
              <Card className={`${shadows.cardEffect} border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50`}>
                <CardHeader>
                  <Badge className="mb-3 bg-green-600 text-white">Ideal Prospect</Badge>
                  <CardTitle className="text-2xl text-green-900 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-green-600" />
                    The Strategic Firefighter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Role</h4>
                      <p className="text-sm text-green-800">
                        C-Suite, President, or Department Head with P&L or critical KPI responsibility
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Problem</h4>
                      <p className="text-sm text-green-800">
                        Articulates a single, specific, urgent business problem using phrases like "revenue risk," 
                        "losing customers," or "bottleneck to growth"
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Urgency</h4>
                      <p className="text-sm text-green-800">
                        Can point to clear negative consequences that will occur this quarter or half if unaddressed
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Mindset</h4>
                      <p className="text-sm text-green-800">
                        Problem-fluent and solution-agnostic. Trusts you to recommend the right approach
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Action</h4>
                      <p className="text-sm text-green-800">
                        Personally commits to clear next steps on the call with authority to greenlight a pilot
                      </p>
                    </div>
                    
                    <div className="bg-green-100 p-3 rounded-lg">
                      <p className="text-xs text-green-900 font-medium">
                        Key Signal: When you tell a relevant story, they immediately interrupt to relate it to their bigger problem
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Losing Prospect Profile */}
              <Card className={`${shadows.cardEffect} border-2 border-red-300 bg-gradient-to-br from-red-50 to-orange-50`}>
                <CardHeader>
                  <Badge className="mb-3 bg-red-600 text-white">Low Probability</Badge>
                  <CardTitle className="text-2xl text-red-900 flex items-center gap-2">
                    <Search className="w-6 h-6 text-red-600" />
                    The Curious Explorer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">Role</h4>
                      <p className="text-sm text-red-800">
                        Can be a leader, but often an intermediary or manager tasked with "looking into AI"
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">Problem</h4>
                      <p className="text-sm text-red-800">
                        Presents a broad list of potential improvements or general "inefficiencies" without a single priority
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">Urgency</h4>
                      <p className="text-sm text-red-800">
                        Pain is chronic but not acute. Focused on being "better" or "more efficient" with no immediate driver
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">Mindset</h4>
                      <p className="text-sm text-red-800">
                        Solution-focused, asking "can AI do X?" and getting stuck on technical features vs business outcomes
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">Action</h4>
                      <p className="text-sm text-red-800">
                        Non-committal, suggesting more meetings to explore ideas or delegating next steps to subordinates
                      </p>
                    </div>
                    
                    <div className="bg-red-100 p-3 rounded-lg">
                      <p className="text-xs text-red-900 font-medium">
                        Key Signal: When you tell a story, they ask about the technology instead of connecting it to their pain
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification & Red Flags */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Advanced Qualification Techniques
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={`${shadows.cardEffect} border-red-200`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <XCircle className="w-5 h-5" />
                    Red Flags to Watch For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Laundry list problems:</strong> Multiple unconnected pain points
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Solution shopping:</strong> "Can your AI do X, Y, Z?"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Delegates follow-up:</strong> "I'll have my team reach out"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Technical fixation:</strong> Gets stuck on HOW vs WHAT
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>No quantification:</strong> Can't articulate financial impact
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Vitamin problems:</strong> "Would be nice to improve"
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-green-200`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Shield className="w-5 h-5" />
                    Green Flags of Quality Prospects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Single burning issue:</strong> One critical problem to solve
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Revenue impact:</strong> "This is our biggest revenue risk"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Pattern matching:</strong> Relates your story to their problem
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Personal urgency:</strong> Decision maker feels the pain
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Quick convergence:</strong> Rapidly narrows to specific solution
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Immediate commitment:</strong> Books next step on the call
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Qualification Questions */}
            <Card className={`${shadows.cardEffect} border-2 border-primary/20 mb-8`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Power Questions for Qualification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Questions to Force Prioritization</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-primary pl-4">
                        <p className="text-sm italic text-gray-700">
                          "Of all the things you mentioned, which one is causing the most tangible pain right now?"
                        </p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <p className="text-sm italic text-gray-700">
                          "If we could only solve one of these in the next 90 days, which would have the biggest impact on your key business goals?"
                        </p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <p className="text-sm italic text-gray-700">
                          "What happens if none of these get addressed in the next six months?"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Questions to Reframe Efficiency as Opportunity</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-sm italic text-gray-700">
                          "If your top performers got 10 hours back each week, what high-value activities could they focus on?"
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-sm italic text-gray-700">
                          "What revenue opportunities are you missing because your team is stuck in manual processes?"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Questions to Sidestep Solution Shoppers</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="text-sm italic text-gray-700">
                          "Setting the technology aside for a moment, if we could save your team X hours per week, what would the value of that be?"
                        </p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="text-sm italic text-gray-700">
                          "Before we talk about HOW, help me understand WHAT success looks like for you in 3 months?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardHeader>
                <CardTitle>Updated Disqualification Scripts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm mb-2">For the Explorer (Multiple Problems, No Priority):</p>
                    <p className="text-sm italic text-gray-700">
                      "You've mentioned several areas for improvement, which tells me you're in exploration mode. 
                      I recommend identifying your single biggest bottleneck - the one costing you the most money right now. 
                      Once you can point to a specific problem losing over $50K annually, let's reconnect and I can show you 
                      exactly how to solve it."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm mb-2">For the Solution Shopper (Technology Focused):</p>
                    <p className="text-sm italic text-gray-700">
                      "I can see you're focused on the technical capabilities, but what I've found is that technology 
                      is only 20% of the solution. The real value comes from reimagining the process itself. 
                      When you're ready to focus on the business outcome rather than the specific tools, I'd be happy to help."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm mb-2">For the Delegator (Not the Decision Maker):</p>
                    <p className="text-sm italic text-gray-700">
                      "It sounds like the real decision needs to be made at a higher level. I've found these transformations 
                      only succeed when the person feeling the pain is directly involved. Would it make sense to schedule 
                      a brief call with [decision maker] to ensure we're solving the right problem?"
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm mb-2">For the Vitamin Seeker (No Urgency):</p>
                    <p className="text-sm italic text-gray-700">
                      "Based on what you've shared, this sounds like a 'nice to have' rather than a 'must solve now.' 
                      In my experience, these projects rarely get the resources and attention they need to succeed. 
                      When this becomes a burning priority that's costing you real money, I'd love to help you solve it."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Critical Best Practices
            </h2>
            
            <div className="space-y-6">
              <Card className={`${shadows.cardEffect} border-l-4 border-primary`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Always Secure Mutual Commitments</h3>
                  <p className="text-gray-600">
                    Every call must end with both parties committing to specific actions. 
                    Even if it's just connecting on LinkedIn, create mutual accountability. 
                    "Let me think about it" is a failure signal.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-blue-600`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Create Space for Reciprocity</h3>
                  <p className="text-gray-600">
                    After providing value, ask "How can I be helpful to you beyond this?" 
                    or "I'm looking to connect with more [target audience] - who's one person I should talk to?" 
                    People want to reciprocate value.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-green-600`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Use Technology as Force Multiplier</h3>
                  <p className="text-gray-600">
                    Deploy AI research agents for prep, Fireflies for note-taking, 
                    voice assistants for pre-call intake, and LLMs for follow-up drafting. 
                    But remember: technology enables the human connection, it doesn't replace it.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-purple-600`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Share Counterintuitive Insights</h3>
                  <p className="text-gray-600">
                    The mark of true expertise is sharing insights that challenge assumptions. 
                    "To achieve X, you might need to do the opposite of what you're thinking." 
                    Back it with stories and data from your experience.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-orange-600`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Speak the Language of Finance</h3>
                  <p className="text-gray-600">
                    Everything reduces to financial impact. Before every call, draw a line from 
                    your solution to ROI. Understand their revenue, costs, and profit structure. 
                    CFO-level validation transforms conversations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Flywheel Effect */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                  The Goodwill Flywheel
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 text-center">
                    When you consistently apply this methodology, something magical happens:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-semibold">You Create Genuine Value</p>
                          <p className="text-sm text-gray-600">Every interaction leaves people better off</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-semibold">Goodwill Accumulates</p>
                          <p className="text-sm text-gray-600">People remember and share their experience</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-semibold">Private Networks Activate</p>
                          <p className="text-sm text-gray-600">Your name spreads in decision-maker circles</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          4
                        </div>
                        <div>
                          <p className="font-semibold">Quality Opportunities Flow</p>
                          <p className="text-sm text-gray-600">The right clients find you naturally</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-6">
                    <p className="text-lg font-semibold text-gray-800">
                      You can't measure this channel, but it has no ceiling.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Trust the process. Will the good. The rest follows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section id="download" className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Start Tracking Your Discovery Calls
            </h2>
            
            <Card className={`${shadows.cardEffect} max-w-2xl mx-auto`}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Discovery Call Tracker</h3>
                    <p className="text-gray-600 mb-4">
                      Download our CSV tracker to start documenting your discovery calls. 
                      Each completed row represents one solid rep toward mastery.
                    </p>
                    <ul className="text-left space-y-2 text-gray-600 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Track prospect details and company info
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Document long-term goals and proximal challenges
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Record estimated value and path chosen
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Monitor concrete commitments and follow-ups
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Link to discovery call recordings
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <Button
                      size="lg"
                      className={`${buttonStyles.primary} ${shadows.buttonEffect} w-full`}
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/downloads/discovery-tracker-template.csv';
                        link.download = 'discovery-tracker-template.csv';
                        link.click();
                      }}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Discovery Tracker (CSV)
                    </Button>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Ready to take the next step?</strong> Complete 3+ successful discovery-to-engagement 
                        conversions using this methodology, then apply to become a GSD Associate.
                      </p>
                      <Button
                        size="lg"
                        variant="outline"
                        className={`${buttonStyles.outline.primary} ${shadows.buttonEffect} w-full`}
                        onClick={() => window.location.href = "/associate-program"}
                      >
                        <Users className="mr-2 h-5 w-5" />
                        Learn About the Associate Program
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p className="text-sm text-gray-500 mt-6">
              Licensed under Apache 2.0 with GSD at Work LLC copyright. 
              Free to use, modify, and distribute with attribution.
            </p>
          </div>
        </div>
      </section>

      {/* Connection to Other Methodologies */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              How This Connects to Other GSD Methodologies
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Discovery → Triple-A Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Discovery calls identify 10x opportunities that become candidates for the Triple-A transformation process.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-semibold">Discovery Output</p>
                      <p className="text-xs text-gray-600">Qualified 10x opportunity with stakeholder buy-in</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-semibold">Triple-A Input</p>
                      <p className="text-xs text-gray-600">0→1 Action Workshop to prototype solution</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Discovery → Action Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The "Accelerate" path often leads directly to booking an Action Workshop as the first engagement.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm font-semibold">Discovery Negotiation</p>
                      <p className="text-xs text-gray-600">"Let's do a 2-hour workshop for $X to prove the 10x improvement"</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm font-semibold">Workshop Delivery</p>
                      <p className="text-xs text-gray-600">Hands-on transformation with immediate ROI</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Discovery → Associate Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Master discovery calls to qualify for the GSD Associate Program.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Complete 3+ successful discovery-to-engagement conversions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Demonstrate mastery of the three paths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Build reputation for creating genuine value</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5" />
                    Discovery → AI Oracle Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Complex organizations may need an AI Oracle session before individual discoveries.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <p className="text-sm font-semibold">Oracle First</p>
                      <p className="text-xs text-gray-600">Top-down analysis identifies opportunities</p>
                    </div>
                    <div className="p-3 bg-teal-50 rounded-lg">
                      <p className="text-sm font-semibold">Discovery Second</p>
                      <p className="text-xs text-gray-600">Deep-dive with specific stakeholders</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className={`${shadows.cardEffect} ${gradients.primaryLight} mt-8`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-center">The Discovery Foundation</h3>
                <p className="text-gray-700 text-center mb-6">
                  Sales Discovery is the foundation of all GSD engagements. Master this methodology first, 
                  then layer on specialized frameworks based on client needs.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className={buttonStyles.outline.secondary}
                    onClick={() => window.location.href = "/methodology/triple-a-framework"}
                  >
                    Triple-A Framework
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={buttonStyles.outline.secondary}
                    onClick={() => window.location.href = "/ai-action-workshop"}
                  >
                    Action Workshops
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={buttonStyles.outline.secondary}
                    onClick={() => window.location.href = "/associate-program"}
                  >
                    Associate Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              The Bottom Line
            </Badge>
            
            <h2 className="text-2xl font-bold text-primary mb-4">
              It's Not About Closing Deals
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              It's about creating value. When you commit to willing the good of the other person, 
              you transform from a salesperson into a trusted advisor. 
              The right business naturally follows.
            </p>
            
            <Button
              size="lg"
              className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
              onClick={() => window.location.href = "/associate-program"}
            >
              Join Our Associate Program
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesDiscovery;