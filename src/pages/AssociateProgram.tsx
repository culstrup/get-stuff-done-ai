import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, DollarSign, TrendingUp, Users, Briefcase, Target, Award, ArrowRight, Zap, FileCheck, AlertCircle, BookOpen } from "lucide-react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { shadows, gradients, buttonStyles, animations, borderRadius, spacing } from "@/lib/design-tokens";

const AssociateProgram = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const serviceStructuredData = generateServicePageStructuredData(
    "Associate Program - Join GSD at Work's AI Transformation Network",
    "Become a GSD at Work associate. Deliver AI transformations using our proven methodologies. Outcome-based compensation, flexible engagement, and a path to leadership roles.",
    "https://gsdat.work/associate-program",
    "https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png",
    "GSD at Work LLC",
    "Performance-based"
  );

  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the GSD at Work Associate Program?",
      answer: "The Associate Program is a performance-based partnership where skilled practitioners deliver AI transformations using our proven methodologies. Associates work on client projects, earning outcome-based compensation while maintaining flexibility and autonomy."
    },
    {
      question: "How does compensation work?",
      answer: "We never pay wages - everything is outcome-based. Associates earn a percentage of project value delivered. Generally, revenue is split three ways: one-third to GSD as the capital provider, one-third to whoever sells the work, and one-third to those who fulfill it. Compensation scales with impact and complexity."
    },
    {
      question: "What are the requirements to become an associate?",
      answer: "Associates should have hands-on experience with AI tools, strong business acumen, excellent communication skills, and ideally have studied our open-source methodologies. We value practical experience and proven results over credentials."
    },
    {
      question: "How do associates progress in the program?",
      answer: "Associates start with discovery calls and action workshops, then progress to running full transformation cycles. High performers can advance to Principal level, leading teams of associates, and potentially become CEOs of spin-off product companies."
    },
    {
      question: "Is this a full-time commitment?",
      answer: "No. The program is designed for flexibility. Many associates balance this with other commitments. You choose your availability and the projects you take on. It's about delivering outcomes, not logging hours."
    }
  ]);

  const associateLevels = [
    {
      level: "Associate",
      description: "Entry level practitioners",
      responsibilities: [
        "Conduct discovery calls with stakeholders",
        "Facilitate AI action workshops",
        "Implement automation projects",
        "Document solutions and create SOPs"
      ],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      level: "Senior Associate",
      description: "Experienced transformation leaders",
      responsibilities: [
        "Lead full transformation cycles",
        "Manage complex implementations",
        "Train and mentor new associates",
        "Develop custom methodologies"
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      level: "Principal",
      description: "Strategic leaders and rainmakers",
      responsibilities: [
        "Coordinate teams of associates",
        "Design enterprise transformations",
        "Build client relationships",
        "Drive methodology innovation"
      ],
      icon: <Award className="w-6 h-6" />
    }
  ];

  const programBenefits = [
    {
      title: "Outcome-Based Rewards",
      description: "Earn based on the value you create, not hours worked",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: "Frontier Tech Access",
      description: "Company-funded credit cards for the most powerful AI tools",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Maximum Flexibility",
      description: "Async-first culture with freedom to deliver results your way",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: "Accelerated Learning",
      description: "Access to frontier know-how and proven methodologies",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Compelling Opportunities",
      description: "Work on the most interesting transformation challenges",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Path to Leadership",
      description: "Progress from associate to principal to spin-off CEO",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="Associate Program - Join Our AI Transformation Network | GSD at Work"
        content="Become a GSD at Work associate. Deliver AI transformations, earn outcome-based compensation, maintain flexibility. Clear path from associate to principal to spin-off CEO. Apply today."
        canonicalUrl="https://gsdat.work/associate-program"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
        ogImage="https://gsdat.work/og-image.png"
        ogImageAlt="GSD at Work Associate Program - Join Our Network"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-28 pb-20 ${gradients.backgroundSubtle} relative overflow-hidden`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl animate-float animation-delay-500" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in-down hover:scale-110 transition-transform duration-300">
              <Users className="w-3 h-3 mr-1" />
              Now Accepting Applications
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-emerald-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animate-gradient-shift">
              Become a GSD at Work Associate
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
              Join our network of elite AI practitioners. Deliver transformations using proven 
              methodologies. Earn based on outcomes, not hours. Build your path from 
              associate to principal to CEO.
            </p>
            
            <div className="glass-effect border border-emerald-200/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto shadow-xl animate-fade-in-up animation-delay-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <p className="text-lg font-semibold text-emerald-900 mb-2">
                💰 Performance-Based Compensation
              </p>
              <p className="text-emerald-800">
                No wages, no timesheets. Earn based on the value you deliver. 
                Top performers lead teams and spin-off companies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.open("https://calendly.com/gsdatwork/associate-program", "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.location.href = "/methodology"}
              >
                Study Our Methods First
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Requirement - CRITICAL */}
      <section className={`${spacing.section.md} bg-gradient-to-br from-red-50 via-white to-orange-50/30 relative`}>
        <div className="absolute inset-0 bg-grid-red-100/[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Card className={`${shadows.cardEffect} border-2 border-red-200 hover:shadow-2xl transition-all duration-300 animate-fade-in-up hover-lift`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-red-100">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-red-900">
                      Critical Requirement: Evidence of Impact
                    </CardTitle>
                    <CardDescription className="text-red-700 text-base">
                      You must demonstrate proven results before applying
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-red-100">
                  <h3 className="text-lg font-semibold mb-3 text-red-900">
                    To be seriously considered, you MUST present evidence that you have:
                  </h3>
                  <p className="text-gray-800 mb-4 text-lg">
                    <strong>Made at least 3 people incontrovertibly better off</strong> by implementing 
                    generative AI into their professional workflows.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Verifiable Evidence Required</p>
                        <p className="text-sm text-gray-600">
                          Recordings, transcripts, before/after metrics, testimonials - concrete proof that transformation occurred
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Quantifiable Impact</p>
                        <p className="text-sm text-gray-600">
                          Time saved, revenue generated, errors reduced - measurable improvements they can testify to
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">3 Separate Validations</p>
                        <p className="text-sm text-gray-600">
                          Could be 3 different people, same person 3 ways, or any combination - but 3 distinct transformations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    How to Compile Your Evidence Dossier
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Pro tip:</strong> Use AI to compile a compelling dossier from your work:
                  </p>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">1.</span>
                      <span>Gather all recordings, emails, and documentation from your transformations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">2.</span>
                      <span>Use AI tools to create a comprehensive summary with footnotes to primary sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">3.</span>
                      <span>Include specific metrics: hours saved, revenue impact, process improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">4.</span>
                      <span>Get written testimonials from those you've helped</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">5.</span>
                      <span>Create a portfolio showing before/after workflows</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Not There Yet? Here's Your Path:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-yellow-600" />
                      <span>Study our <a href="/methodology" className="text-primary underline font-semibold">open-source methodologies</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-yellow-600" />
                      <span>Follow Christian Ulstrup on LinkedIn for daily insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-yellow-600" />
                      <span>Apply the methods with friends, family, or in your current role</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-yellow-600" />
                      <span>Document everything - recordings, metrics, testimonials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-yellow-600" />
                      <span>Build your evidence portfolio over time</span>
                    </li>
                  </ul>
                  
                  <p className="mt-4 text-sm text-gray-600 italic">
                    <strong>Remember:</strong> Scale doesn't matter - helping one person save 2 hours daily 
                    counts just as much as enterprise transformations. What matters is verifiable, quantifiable impact.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    Ready with your evidence? Let's talk.
                  </p>
                  <Button
                    size="lg"
                    className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                    onClick={() => window.open("https://calendly.com/gsdatwork/associate-program", "_blank")}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Apply With Evidence
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              How the Program Works
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Study & Apply</h3>
                  <p className="text-gray-600">
                    Review our open-source methodologies. Complete a real project in your 
                    organization or for a client using our frameworks. Document your results.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interview & Demonstrate</h3>
                  <p className="text-gray-600">
                    Schedule an interview to discuss your experience. Show us how you've 
                    applied our methods and the results you've achieved. We value proven 
                    ability over credentials.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Start with Small Projects</h3>
                  <p className="text-gray-600">
                    Begin with discovery calls and action workshops. Build your reputation 
                    through successful deliveries. Each project expands your capabilities 
                    and earning potential.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scale Your Impact</h3>
                  <p className="text-gray-600">
                    Progress to leading full transformations. Coordinate teams of associates. 
                    Eventually, lead spin-off product companies as CEO with equity participation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Associate Levels */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Career Progression Path
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Clear advancement based on demonstrated results and value delivered
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {associateLevels.map((level, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <div className={`p-3 rounded-lg ${gradients.primaryLight} w-fit mb-4`}>
                      {level.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{level.level}</CardTitle>
                    <CardDescription className="text-base">
                      {level.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {level.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className={`${shadows.cardEffect} ${gradients.primaryLight} max-w-2xl mx-auto`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Beyond Principal: Spin-off CEO Opportunities
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Top principals who identify product opportunities can become founding 
                    CEOs of spin-off companies, with significant equity participation and 
                    full P&L responsibility.
                  </p>
                  <Badge variant="secondary" className="text-sm">
                    <Award className="w-3 h-3 mr-1" />
                    Ultimate Career Path
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Program Benefits
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programBenefits.map((benefit, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className={`p-2 rounded-lg ${gradients.secondaryLight}`}>
                        {benefit.icon}
                      </div>
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidate */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Are You the Right Fit?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="text-xl">Ideal Associates Have:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Hands-on experience with AI tools (ChatGPT, Claude, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Strong business acumen and process thinking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Excellent communication and facilitation skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Self-directed learning ability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Entrepreneurial mindset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Track record of delivering results</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="text-xl">You'll Thrive If You:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Love solving complex business problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Get energized by teaching others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Prefer outcomes over hours worked</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Want flexibility and autonomy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Seek continuous growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Dream of building something bigger</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Engagement Assessment */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className={`${shadows.cardEffect} ${gradients.secondaryLight} hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    Test Your AI Engagement Readiness
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Before applying, use our custom GPT to assess your readiness for AI engagement work. 
                    Get personalized insights on your strengths and areas for development.
                  </p>
                </div>
                
                <Button
                  size="lg"
                  className={`${buttonStyles.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                  onClick={() => window.open("https://chatgpt.com/g/g-685435835688819192a9245b85512233-ai-engagement-assessment", "_blank")}
                >
                  <Target className="mr-2 h-5 w-5" />
                  Take AI Engagement Assessment
                </Button>
                
                <p className="mt-4 text-sm text-gray-600">
                  Free assessment • Takes 5-10 minutes • Powered by ChatGPT
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Ready to Join Our Network?
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Start your journey from practitioner to principal. Apply today and 
                  show us how you've used AI to drive real business results.
                </p>
                
                <div className="space-y-4 max-w-2xl mx-auto mb-8">
                  <div className="bg-white/80 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Application Process:</h3>
                    <ol className="text-left space-y-2 text-gray-700">
                      <li>1. Book a 30-minute interview slot</li>
                      <li>2. Prepare examples of your AI implementation work</li>
                      <li>3. Demonstrate your understanding of our methodologies</li>
                      <li>4. Discuss your goals and availability</li>
                    </ol>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                    onClick={() => window.open("https://calendly.com/gsdatwork/associate-program", "_blank")}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Interview
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`${buttonStyles.outline.secondary} ${shadows.buttonEffect}`}
                    onClick={() => window.location.href = "/methodology/triple-a-framework"}
                  >
                    Review Methodologies
                  </Button>
                </div>

                <p className="mt-8 text-sm text-gray-600">
                  Not ready yet? Study our open-source methodologies and complete a project first.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssociateProgram;