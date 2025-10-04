import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Github, Users, ArrowRight, Rocket, Target, Building2, Lightbulb, Phone, ChefHat, Wrench } from "lucide-react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData } from "@/lib/seo-utils";
import { shadows, gradients, buttonStyles, animations, borderRadius, spacing } from "@/lib/design-tokens";

const Methodology = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const serviceStructuredData = generateServicePageStructuredData(
    "Open Source Methodologies - GSD at Work",
    "Free, battle-tested methodologies for AI transformation. We open source our proven frameworks to enable permissionless learning and accelerate AI adoption globally.",
    "https://gsdat.work/methodology",
    "https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png",
    "GSD at Work LLC",
    "Free (Open Source)"
  );

  const methodologies = [
    {
      title: "Discovery Calls",
      subtitle: "Sales & Transformation Discovery",
      description: "Master the art of uncovering 10x opportunities through structured discovery conversations and process mapping.",
      features: [
        "Discovery call scripts",
        "Process mapping techniques",
        "Counterfactual questioning",
        "Workshop negotiation"
      ],
      status: "Available Now",
      statusColor: "bg-emerald-100 text-emerald-800",
      link: "/methodology/sales-discovery",
      icon: <Phone className="w-6 h-6" />,
      disabled: false
    },
    {
      title: "Quick Win in a Box",
      subtitle: "Core Transformation Unit",
      description: "The foundational 2-hour workshop that achieves 10x improvements. Go from 0→1 with hands-on AI transformation.",
      features: [
        "2-hour intensive sessions",
        "10x workflow improvements",
        "Teach-to-fish approach",
        "Immediate ROI"
      ],
      status: "Available Now",
      statusColor: "bg-emerald-100 text-emerald-800",
      link: "/methodology/action-workshop",
      icon: <Lightbulb className="w-6 h-6" />,
      disabled: false
    },
    {
      title: "AI Oracle / Crystal Ball",
      subtitle: "Strategic Pipeline Building",
      description: "Analyze company-wide data to surface hidden AI opportunities and build transformation pipeline from the top down.",
      features: [
        "Mass data analysis",
        "Risk & opportunity identification",
        "Strategic prioritization",
        "Pipeline generation"
      ],
      status: "Available Now",
      statusColor: "bg-emerald-100 text-emerald-800",
      link: "/methodology/ai-oracle",
      icon: <Target className="w-6 h-6" />,
      disabled: false
    },
    {
      title: "Enterprise AI Cooking Show",
      subtitle: "Premium Workshop Experience",
      description: "High-energy, paid workshop ($4,999) that gets enterprises and mastermind groups excited about AI possibilities.",
      features: [
        "Live AI demonstrations",
        "Interactive transformations",
        "Executive engagement",
        "Pipeline generation tool"
      ],
      status: "Coming Soon",
      statusColor: "bg-red-100 text-red-800",
      link: "#",
      icon: <ChefHat className="w-6 h-6" />,
      disabled: true
    },
    {
      title: "10x Effective Executive",
      subtitle: "Leadership AI Transformation",
      description: "Micro-transformation program for executive teams and capital allocators. Perfect for VCs, PEs, and C-suites.",
      features: [
        "Executive AI literacy",
        "5 action workshops bundle",
        "Decision enhancement",
        "Portfolio company insights"
      ],
      status: "Coming Soon",
      statusColor: "bg-indigo-100 text-indigo-800",
      link: "#",
      icon: <Building2 className="w-6 h-6" />,
      disabled: true
    },
    {
      title: "Triple-A Transformation Playbook",
      subtitle: "Accelerated AI Adoption",
      description: "Comprehensive bundle for systematic AI transformation. Includes all methodologies for identifying, developing, and scaling AI opportunities.",
      features: [
        "10x process improvements",
        "CFO-validated ROI",
        "0→1→10→10+ scaling model",
        "Complete implementation guide"
      ],
      status: "Available Now",
      statusColor: "bg-emerald-100 text-emerald-800",
      link: "/methodology/triple-a-framework",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Artisanal Product Development",
      subtitle: "Custom Software & Automation",
      description: "When 10x isn't enough - build custom AI-powered software and automation for mission-critical workflows.",
      features: [
        "Custom GPT development",
        "Process automation",
        "API integrations",
        "Scalable solutions"
      ],
      status: "Coming Soon",
      statusColor: "bg-gray-100 text-gray-800",
      link: "#",
      icon: <Wrench className="w-6 h-6" />,
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO
        title="Open Source AI Methodologies - Free Frameworks | GSD at Work"
        content="Access battle-tested AI transformation methodologies for free. Triple-A framework, AI Oracle system, and team productivity frameworks. Enable permissionless learning and accelerate your AI journey."
        canonicalUrl="https://gsdat.work/methodology"
        pageType="service"
        datePublished={currentDate}
        dateModified={currentDate}
        structuredData={[serviceStructuredData]}
        ogType="website"
        ogImage="https://gsdat.work/og-image.png"
        ogImageAlt="GSD at Work - Open Source AI Methodologies"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-28 pb-20 ${gradients.backgroundSubtle} relative overflow-hidden`}>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-float animation-delay-500" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in-down hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-3 h-3 mr-1" />
              Open Source Initiative
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up animate-gradient-shift">
              We Open Source Our Methodologies
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
              Access the same frameworks we use to deliver <strong className="text-purple-600">10x transformations</strong> for 
              SMBs, equity-financed businesses, global enterprises, and public sector clients. Learn at your own pace, implement with your team, 
              or engage us for expert guidance.
            </p>
            
            <div className="glass-effect border border-blue-200/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto shadow-xl animate-fade-in-up animation-delay-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                🎓 Permissionless Apprenticeship Model
              </p>
              <p className="text-blue-800">
                Study our methods. Apply them in your organization. Master the frameworks. 
                Then join our associate program to help others transform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.location.href = "#methodologies"}
              >
                Explore Methodologies
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

      {/* Why Open Source */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Why We Open Source
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover-lift animate-fade-in-up`}>
                <CardHeader>
                  <CardTitle className="text-xl">Accelerate AI Adoption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The world needs AI transformation now. By sharing our methods freely, 
                    we help organizations move faster and avoid common pitfalls.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="text-xl">Build Trust Through Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    See exactly how we work before engaging us. Our methods are proven, 
                    documented, and ready for you to evaluate and implement.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="text-xl">Create Better Practitioners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Those who master our frameworks become ideal associates. This creates 
                    a virtuous cycle of learning, implementation, and teaching.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies Grid */}
      <section id="methodologies" className={`${spacing.section.md} bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 relative`}>
        <div className="absolute inset-0 bg-grid-gray-100/[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center animate-fade-in-down">
              Available Methodologies
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Battle-tested frameworks from hundreds of successful implementations
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {methodologies.map((methodology, index) => (
                <Card 
                  key={index} 
                  className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300 ${
                    methodology.disabled ? 'opacity-75' : 'hover:scale-[1.02] hover:-translate-y-2'
                  } hover-lift animate-fade-in-up overflow-hidden relative group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${gradients.primaryLight} group-hover:scale-110 transition-transform duration-300`}>
                        {methodology.icon}
                      </div>
                      <Badge className={`${methodology.statusColor} group-hover:scale-105 transition-transform duration-300`}>
                        {methodology.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{methodology.title}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {methodology.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      {methodology.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {methodology.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className={`w-full ${
                        methodology.disabled 
                          ? 'bg-gray-200 text-gray-700 cursor-not-allowed hover:bg-gray-200' 
                          : `${buttonStyles.primary} ${shadows.buttonEffect}`
                      }`}
                      disabled={methodology.disabled}
                      onClick={() => !methodology.disabled && (window.location.href = methodology.link)}
                    >
                      {methodology.disabled ? 'Coming Soon' : 'View Framework'}
                      {!methodology.disabled && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Your Learning Journey
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Study the Frameworks</h3>
                  <p className="text-gray-600">
                    Download our methodologies and study them at your own pace. Each framework 
                    includes detailed guides, templates, and real-world examples.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Apply in Your Organization</h3>
                  <p className="text-gray-600">
                    Start with small pilot projects. Use our templates and tools to run 
                    discovery sessions, workshops, and implementations.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Support When Needed</h3>
                  <p className="text-gray-600">
                    Self-implementation is powerful, but sometimes you need expert guidance. 
                    Our team is available for training, coaching, or full implementation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Join as an Associate</h3>
                  <p className="text-gray-600">
                    Once you've mastered the frameworks, apply to our associate program. 
                    Help others transform while building your own practice.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                onClick={() => window.location.href = "/associate-program"}
              >
                Learn About the Associate Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className={`${spacing.section.sm} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Open Source License</h3>
            <p className="text-gray-600 mb-4">
              All methodologies are released under the Apache 2.0 License with GSD at Work LLC copyright. 
              You're free to use, modify, and distribute with attribution.
            </p>
            <Button
              variant="outline"
              className={`${buttonStyles.outline.secondary}`}
              onClick={() => window.open("https://github.com/culstrup/get-stuff-done-ai/blob/main/LICENSE", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              View License
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Ready to Transform Your Organization?
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Whether you implement yourself or engage our expertise, 
                  we're here to help you achieve 10x results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                    onClick={() => window.location.href = "/methodology/triple-a-framework"}
                  >
                    Start with Triple-A Playbook
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`${buttonStyles.outline.primary} ${shadows.buttonEffect}`}
                    onClick={() => window.open("https://calendly.com/gsdatwork/strategy", "_blank")}
                  >
                    Book Expert Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodology;