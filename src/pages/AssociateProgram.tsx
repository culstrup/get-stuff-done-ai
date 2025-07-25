import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, DollarSign, TrendingUp, Users, Briefcase, Target, Award, ArrowRight, Zap } from "lucide-react";
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
      <section className={`pt-28 pb-20 ${gradients.backgroundSubtle}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Users className="w-3 h-3 mr-1" />
              Now Accepting Applications
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Become a GSD at Work Associate
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join our network of elite AI practitioners. Deliver transformations using proven 
              methodologies. Earn based on outcomes, not hours. Build your path from 
              associate to principal to CEO.
            </p>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-emerald-900 mb-2">
                💰 Performance-Based Compensation
              </p>
              <p className="text-emerald-800">
                No wages, no timesheets. Earn based on the value you deliver. 
                Top performers lead teams and spin-off companies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                onClick={() => window.open("https://calendly.com/gsdatwork/associate-program", "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect}`}
                onClick={() => window.location.href = "/methodology"}
              >
                Study Our Methods First
              </Button>
            </div>
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