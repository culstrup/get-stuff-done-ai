
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Target, CheckCircle, ArrowRight, Zap, TrendingUp, Star } from "lucide-react";
import { ServiceFeaturesList } from "@/components/services/ServiceFeaturesList";
import { services } from "@/components/services/data";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { ServiceRecommendation } from "@/components/internal-linking/ServiceRecommendation";
import { animations, shadows, typography, gradients, buttonStyles, layouts, borderRadius } from "@/lib/design-tokens";

const AIActionWorkshop = () => {
  const workshop = services.find(s => s.title === "AI Action Workshop");
  
  if (!workshop) return null;
  
  // Current date for dateModified schema property
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Extract pricing tiers for better display
  const pricingTiers = workshop.pricingTiers || [];

  // Generate structured data with consistent branding
  const serviceStructuredData = generateServicePageStructuredData(
    workshop.title,
    workshop.description,
    "https://gsdat.work/ai-action-workshop",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "GSD at Work",
    "$4,999"
  );

  // Enhanced FAQ structured data with more comprehensive answers
  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the AI Action Workshop?",
      answer: "The AI Action Workshop is your quick win in a box - a hands-on session where you'll break your four-minute mile with AI. Transform tasks that take days or weeks into victories achieved in hours, while gaining the know-how to replicate this success across your organization."
    },
    {
      question: "Who should attend the AI Action Workshop?",
      answer: "The workshop is ideal for business professionals, executives, and teams who want to quickly implement AI solutions for specific workflows or processes. It's perfect for those who prefer learning by doing rather than theoretical discussions."
    },
    {
      question: "What will I accomplish during the workshop?",
      answer: "You'll achieve your own four-minute mile moment: 1) Identify your highest-leverage AI opportunity, 2) Transform a 2-day task into a 2-hour victory, 3) Create documented SOPs and templates your team can use, 4) Learn to fish - gain the skills to replicate this success independently."
    },
    {
      question: "What results can I expect from the workshop?",
      answer: "Participants typically achieve 100-2000% efficiency gains for targeted tasks. You'll develop transferable SOPs, reduce cycle times, and maintain higher energy levels throughout your workday by eliminating tedious tasks."
    },
    {
      question: "How much does the AI Action Workshop cost?",
      answer: "The AI Action Workshop is $4,999 for a Founder-led workshop with Christian Ulstrup. We also offer Associate-led workshops with our GSD Certified Associates at competitive rates - perfect for organizations needing flexible scheduling or multiple workshops. Both deliver the same transformative results and satisfaction guarantee."
    },
    {
      question: "How does the workshop process work?",
      answer: "The process is designed for maximum impact: 1) Discovery call to identify what takes you 2 days that we'll do in 2 hours, 2) AI Action Workshop where you'll experience your 10X transformation firsthand and create reusable processes, and 3) Follow-up support to ensure your success becomes charismatic - spreading throughout your organization."
    },
    {
      question: "What's the difference between Founder-led and Associate-led workshops?",
      answer: "Both workshops follow the exact same proven process and deliver identical outcomes. The key difference is the facilitator: Christian Ulstrup personally leads the Founder workshops (limited availability), while our GSD Certified Associates - who have been hand-picked and trained by Christian - lead the Associate workshops with more flexible scheduling. The Associate option provides the same quality at competitive rates."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="AI Action Workshop | GSD at Work - Get Stuff Done with AI"
        content="GSD at Work's AI Action Workshop ($4,999): Break your four-minute mile with AI. Transform tasks that take days into victories achieved in hours. Founder-led workshops with hands-on implementation and immediate results."
        canonicalUrl="https://gsdat.work/ai-action-workshop"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-28 pb-20 ${animations.fadeIn}`}>
        {/* Background Elements */}
        <div className={`absolute -top-24 -right-24 w-96 h-96 ${gradients.decorative.secondary} ${animations.floatingElements}`} />
        <div className={`absolute -bottom-24 -left-24 w-96 h-96 ${gradients.decorative.primary} ${animations.pulsingGlow}`} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className={`space-y-8 ${animations.slideInLeft}`}>
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-bold">
                  ⚡ Quick Win in a Box
                </Badge>
                
                <h1 className={`${typography.fluid.h1} text-primary mb-6 leading-tight`}>
                  AI Action Workshop
                  <span className="block text-secondary mt-2">Your Four-Minute Mile Moment</span>
                </h1>
                
                <p className={`${typography.fluid.large} text-gray-700 leading-relaxed`}>
                  Transform what takes <strong>2 days into 2 hours</strong>. Experience breakthrough AI implementation 
                  that's so compelling it becomes charismatic—spreading throughout your organization.
                </p>
                
                {/* Value Props */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-secondary" />
                    <span className="font-semibold">100-2000% efficiency gains</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-secondary" />
                    <span className="font-semibold">Working solution by end</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-secondary" />
                    <span className="font-semibold">Transferable frameworks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                    <span className="font-semibold">Repeatable success</span>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className={`${buttonStyles.primary} ${buttonStyles.sizes.large} font-semibold ${buttonStyles.effects.liftGlow} ${buttonStyles.effects.morphing} relative`}
                    onClick={() => window.open('https://calendly.com/gsdatwork/ai-workshop', '_blank')}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Your Workshop
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold px-2 py-1 rounded-full text-white shadow-lg">
                      $4,999
                    </span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className={`${buttonStyles.outline.secondary} ${buttonStyles.sizes.large} ${buttonStyles.effects.borderGlow} font-semibold`}
                    onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
                  >
                    Free Consultation
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                
                {/* Social Proof */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">Trusted by 100+ executives</span>
                </div>
              </div>
              
              {/* Right Column - Visual Element */}
              <div className={`${animations.slideInRight} relative`}>
                <Card className={`${shadows.floating} ${shadows.floatingHover} hover:-translate-y-2 transition-all duration-300 ${borderRadius.xl} overflow-hidden`}>
                  <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white p-8">
                    <CardTitle className="text-2xl font-bold text-center">
                      Workshop Transformation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-400 mb-2">Before</div>
                        <div className="text-lg text-gray-600">2 days of manual work</div>
                      </div>
                      
                      <div className="flex justify-center">
                        <ArrowRight className="h-8 w-8 text-secondary transform rotate-90" />
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">After</div>
                        <div className="text-lg text-gray-600">2 hours with AI automation</div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="text-center text-green-800 font-semibold">
                          🎯 10X Productivity Gain
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results & Social Proof Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Results Preview */}
            <div className={`text-center mb-16 ${animations.fadeIn}`}>
              <h2 className={`${typography.fluid.h2} text-primary mb-6`}>
                Real Results From Real Workshops
              </h2>
              <p className={`${typography.fluid.large} text-gray-600 max-w-3xl mx-auto`}>
                {workshop?.extraText}
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { stat: "100-2000%", label: "Efficiency Gains", icon: TrendingUp },
                { stat: "2 Hours", label: "From 2 Days", icon: Clock },
                { stat: "100+", label: "Happy Executives", icon: Users }
              ].map((item, index) => (
                <Card key={index} className={`text-center p-8 ${shadows.floating} ${animations.breathingGlow} ${animations.scaleIn}`} style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
                  <CardContent className="p-0">
                    <item.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                    <div className="text-gray-600">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Perfect For Section */}
            <Card className={`p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 ${shadows.floating}`}>
              <CardHeader className="text-center pb-6">
                <CardTitle className={`${typography.fluid.h3} text-primary`}>
                  🎯 Perfect for Business Leaders Who Want
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Immediate AI implementation with working solutions",
                    "Practical automation strategies for workflow optimization", 
                    "Hands-on experience with proven AI tools and frameworks",
                    "Executable roadmaps for scaling AI across your organization"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
            
      {/* Quick Win Process */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 ${animations.fadeIn}`}>
              <h2 className={`${typography.fluid.h2} text-primary mb-6`}>
                🎯 Your Quick Win in a Box Process
              </h2>
              <p className={`${typography.fluid.large} text-gray-600 max-w-3xl mx-auto`}>
                Experience success so compelling it becomes charismatic—spreading throughout your organization
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Your Challenge",
                  description: "Something that takes you 2 days or 2 weeks",
                  icon: "😓",
                  color: "border-gray-300 bg-gray-50"
                },
                {
                  title: "Our Workshop", 
                  description: "Get it done in hours with 10X transformation",
                  icon: "⚡",
                  color: "border-secondary bg-secondary/5"
                },
                {
                  title: "Your Victory",
                  description: "Break your four-minute mile & inspire others", 
                  icon: "🏆",
                  color: "border-green-300 bg-green-50"
                }
              ].map((step, index) => (
                <Card key={index} className={`p-8 border-2 ${step.color} ${shadows.floating} ${animations.scaleIn} relative overflow-hidden`} style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'both' }}>
                  <CardContent className="text-center p-0 relative z-10">
                    <div className="text-6xl mb-4">{step.icon}</div>
                    <h3 className={`${typography.fluid.h4} text-gray-900 mb-4`}>{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                  
                  {/* Arrow connector (except for last item) */}
                  {index < 2 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="h-8 w-8 text-secondary" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
            
      {/* Workshop Benefits & Pricing */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Benefits Section */}
              <div className={`space-y-8 ${animations.slideInLeft}`}>
                <div>
                  <h2 className={`${typography.fluid.h2} text-primary mb-8`}>
                    What You'll Get in Your Workshop
                  </h2>
                  <div className="space-y-4">
                    {workshop?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    )) || <ServiceFeaturesList features={workshop?.features || []} />}
                  </div>
                </div>
              </div>
              
              {/* Pricing Section */}
              <div className={`space-y-6 ${animations.slideInRight}`}>
                <h2 className={`${typography.fluid.h2} text-primary mb-8`}>
                  Investment & Availability
                </h2>
                
                {/* Founder-Led Workshop */}
                <Card className={`relative overflow-hidden border-2 border-secondary/50 ${shadows.floating} ${animations.breathingGlow}`}>
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 text-sm font-bold">
                    🔥 Most Popular
                  </div>
                  <CardHeader className="pt-12 pb-6">
                    <CardTitle className="text-xl font-bold text-gray-900">Founder-Led Workshop</CardTitle>
                    <p className="text-gray-600">Led by Christian Ulstrup</p>
                    <div className="flex items-baseline gap-2 mt-4">
                      <span className="text-4xl font-bold text-secondary">$4,999</span>
                      <span className="text-gray-500">one-time</span>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 text-orange-600 border-orange-200">
                      Limited availability
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className={`w-full ${buttonStyles.primary} ${buttonStyles.sizes.large} font-semibold ${buttonStyles.effects.liftGlow}`}
                      onClick={() => {
                        const founderTier = pricingTiers.find(tier => tier.label === 'Founder-Led Workshop');
                        const link = founderTier?.calendlyLink || workshop?.calendlyLink;
                        if (link) window.open(link, '_blank');
                      }}
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Workshop Now
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Associate-Led Workshop */}
                <Card className={`border-2 border-blue-200 ${shadows.floating} hover:shadow-xl transition-all duration-300`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Associate-Led Workshops</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Led by our GSD Certified Associates—hand-picked and trained by Christian to deliver 
                      the exact same transformative workshop experience.
                    </p>
                    <div className="mt-4">
                      <div className="text-2xl font-bold text-blue-600 mb-2">Competitive Rates</div>
                      <Badge variant="outline" className="w-fit text-blue-600 border-blue-200">
                        Flexible scheduling
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {[
                        "Same proven process and outcomes",
                        "More flexible scheduling options", 
                        "Competitive rates available"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold ${buttonStyles.sizes.large} ${buttonStyles.effects.liftGlow}`}
                      onClick={() => {
                        const associateTier = pricingTiers.find(tier => tier.label === 'Associate-Led Workshop');
                        const link = associateTier?.calendlyLink || workshop?.calendlyLink;
                        if (link) window.open(link, '_blank');
                      }}
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Inquire About Associates
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Guarantee & Volume Discounts */}
                <div className="space-y-4 mt-8">
                  <Card className="p-6 bg-green-50 border-2 border-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-bold text-green-900 mb-2">✅ Satisfaction Guaranteed</h4>
                        <p className="text-green-800 text-sm">
                          Both Founder and Associate workshops are backed by our satisfaction guarantee. 
                          Same transformative results, every time.
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                    <div className="flex items-start gap-3">
                      <Target className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">🎯 Volume Discounts Available</h4>
                        <p className="text-blue-800 text-sm">
                          Planning multiple workshops? Bundle pricing available starting at 10 workshops. 
                          Ask about our organizational transformation packages.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works - Enhanced Timeline */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-16 ${animations.fadeIn}`}>
              <h2 className={`${typography.fluid.h2} text-primary mb-6`}>
                How Your Workshop Works
              </h2>
              <p className={`${typography.fluid.large} text-gray-600`}>
                A simple, proven 3-step process to your AI breakthrough
              </p>
            </div>
            
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Discovery Call",
                  description: "We'll discuss your specific challenges and identify the most impactful area for AI implementation during the workshop.",
                  icon: "🎯"
                },
                {
                  step: "2", 
                  title: "AI Action Workshop",
                  description: "Experience your 10X transformation: What normally takes 2 days gets done in 2 hours. Build real solutions, create reusable SOPs, and gain the confidence to replicate this success.",
                  icon: "⚡"
                },
                {
                  step: "3",
                  title: "Follow-Up Support", 
                  description: "Access to implementation guides, templates, and a follow-up check-in to ensure your solutions continue to deliver value.",
                  icon: "🚀"
                }
              ].map((item, index) => (
                <div key={index} className={`flex gap-8 items-start ${animations.slideInLeft}`} style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-secondary/80 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <Card className={`flex-1 p-8 ${shadows.floating} hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <h3 className={`${typography.fluid.h4} text-gray-900 mb-4`}>{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* GSD Associates Section - Enhanced */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 ${animations.fadeIn}`}>
              <h2 className={`${typography.fluid.h2} text-primary mb-6`}>
                About GSD Certified Associates
              </h2>
              <p className={`${typography.fluid.large} text-gray-600`}>
                Expanding our impact through hand-picked, certified professionals
              </p>
            </div>
            
            <Card className={`p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-200 ${shadows.floating}`}>
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 mb-6">
                  To expand our capacity and help more organizations achieve AI transformation, we've established the GSD Associate Program. 
                  Our associates are experienced professionals who have been:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Hand-picked by Christian Ulstrup for their expertise and alignment with our methodology",
                    "Trained extensively in the GSD AI Action Workshop framework",
                    "Certified to deliver the same transformative results you expect from GSD", 
                    "Backed by our satisfaction guarantee—same as founder-led workshops"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg border border-secondary/20">
                  <p className="text-lg font-semibold text-secondary text-center">
                    Choose an associate-led workshop when you want immediate scheduling flexibility 
                    at competitive rates without compromising on quality or outcomes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Enhanced Service Recommendations */}
      <div className="container mx-auto px-4 pb-16">
        <ServiceRecommendation 
          currentService="ai-action-workshop"
          recommendationType="upsell"
          maxServices={2}
          title="Ready to Scale Your AI Success?"
          description="Great results start with action. Now accelerate your AI transformation with these comprehensive programs."
        />
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <ServiceRecommendation 
          currentService="ai-action-workshop"
          recommendationType="crosssell"
          maxServices={1}
          title="Specialized Workshops"
          description="Explore our other hands-on workshops designed for specific use cases."
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default AIActionWorkshop;
