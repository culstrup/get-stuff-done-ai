
import { Button } from "@/components/ui/button";
import { GraduationCap, CircuitBoard, TrendingUp, File } from "lucide-react";
import { animations, gradients, typography, layouts } from "@/lib/design-tokens";
import { SEOHeading, SEOParagraph, KeywordRichContent } from "@/components/seo/KeywordRichContent";

export const About = () => {
  return (
    <div className="py-16 sm:py-24 bg-gray-50/50 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SEOHeading 
            level={2} 
            className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            keywords={["AI implementation expert", "AI consulting", "business automation"]}
          >
            About Christian Ulstrup - AI Implementation Expert
          </SEOHeading>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Profile Photo */}
          <div className="lg:w-2/5 flex justify-center">
            <div className={`relative w-[180px] h-[180px] sm:w-[360px] sm:h-[360px] ${animations.magneticPull} group`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/20 group-hover:to-white/40 transition-all duration-500"></div>
              <img
                src="/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png"
                alt="Christian Ulstrup"
                className="relative rounded-full w-full h-full object-cover shadow-xl group-hover:shadow-2xl transition-all duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-white/50 group-hover:ring-white/80 transition-all duration-500"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-3/5">
            <h3 className={`${typography.fluid.h3} font-bold text-primary mb-2 ${animations.liquidMotion} p-2 -m-2 rounded-lg`}>
              Christian Ulstrup
            </h3>
            <h4 className={`${typography.fluid.h4} font-semibold text-secondary mb-8`}>
              AI Implementation Expert | Founder, GSD at Work
            </h4>

            <div className="space-y-8 text-gray-600">
              <p>
                As a former MIT AI Conference Co-Chair and startup executive, Christian brings deep expertise in translating AI possibilities into concrete business results.
              </p>
              <p className="mb-12">
                Working with enterprise and growth-stage companies across regulated industries, he has consistently delivered transformative outcomes: 30-40% cost reduction in target processes, and productivity gains ranging from 100% to 2,000%. His focus is on quick wins that build momentum for larger transformations.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-12">
                <div 
                  className={`flex flex-col items-center text-center p-6 ${gradients.cardGlass} rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${animations.breathingGlow} hover:bg-white/90 h-full group ${animations.scaleIn}`}
                  style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                >
                  <GraduationCap className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-primary">MIT Sloan MBA</span>
                  <span className="text-sm text-gray-500">Graduate</span>
                </div>
                <div 
                  className={`flex flex-col items-center text-center p-6 ${gradients.cardGlass} rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${animations.hoverLift} ${animations.hoverGlow} hover:bg-white/90 h-full group ${animations.scaleIn}`}
                  style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
                >
                  <CircuitBoard className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-primary">MIT AI</span>
                  <span className="text-sm text-gray-500">Former Co-Chair</span>
                </div>
                <div 
                  className={`flex flex-col items-center text-center p-6 ${gradients.cardGlass} rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${animations.hoverLift} ${animations.hoverGlow} hover:bg-white/90 h-full group ${animations.scaleIn}`}
                  style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
                >
                  <TrendingUp className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-primary">Productivity Gains</span>
                  <span className="text-sm text-gray-500">100-2,000% Improvement</span>
                </div>
                <div 
                  className={`flex flex-col items-center text-center p-6 ${gradients.cardGlass} rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${animations.hoverLift} ${animations.hoverGlow} hover:bg-white/90 h-full group ${animations.scaleIn}`}
                  style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
                >
                  <File className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-primary">Patent Holder</span>
                  <span className="text-sm text-gray-500">Medical Imaging AI</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <Button
                  className={`w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 sm:py-2 ${animations.hoverLift} ${animations.hoverGlow} hover:shadow-secondary/25`}
                  onClick={() => window.open("https://www.linkedin.com/in/christianulstrup/", "_blank")}
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className={`w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary/10 py-6 sm:py-2 ${animations.hoverLift} hover:border-secondary/70`}
                  onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
                >
                  Schedule Strategy Call
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* GSD Associates Section - Enhanced */}
        <div className="mt-24 pt-16">
          <div className="mx-auto max-w-6xl">
            <div className={`text-center mb-12 ${animations.fadeIn}`}>
              <h3 className={`${typography.fluid.h2} text-primary mb-6`}>
                Join the GSD Associate Network
              </h3>
              <p className={`${typography.fluid.large} text-gray-600 max-w-3xl mx-auto`}>
                Build your AI transformation practice with our proven methodologies and support
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className={`space-y-8 ${animations.slideInLeft}`}>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To expand our capacity and help more organizations achieve AI transformation, we've established the GSD Associate Program. 
                    Our associates are experienced professionals who have been hand-picked and certified to deliver the transformative results you expect from GSD.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "Hand-picked by Christian Ulstrup for their expertise and methodology alignment",
                      "Trained extensively in the GSD Quick Win in a Box framework",
                      "Certified to deliver the same transformative results with competitive pricing", 
                      "Backed by our satisfaction guarantee—same quality as founder-led services"
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-4 p-4 bg-white rounded-lg ${gradients.cardGlass} hover:shadow-md transition-all duration-300 ${animations.scaleIn}`} style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-secondary/80 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column - Call to Action Card */}
              <div className={`${animations.slideInRight}`}>
                <div className={`p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 ${gradients.cardGlass} ${animations.breathingGlow} hover:shadow-xl transition-all duration-500`}>
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    
                    <h4 className={`${typography.fluid.h3} text-primary font-bold`}>
                      Join Our Network of AI Transformation Leaders
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Are you passionate about AI transformation? Join our elite network of associates 
                      and help organizations achieve 10x improvements while building your own practice.
                    </p>
                    
                    <div className="space-y-4">
                      <div className={`bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 ${animations.pulsingGlow}`}>
                        <div className="flex items-center justify-center gap-2">
                          <CircuitBoard className="h-5 w-5 text-green-600" />
                          <span className="text-green-800 font-semibold">Performance-Based Compensation</span>
                        </div>
                      </div>
                      
                      <Button
                        className={`w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white font-semibold py-4 ${animations.hoverLift} ${animations.hoverGlow} hover:shadow-secondary/25`}
                        onClick={() => window.location.href = "/associate-program"}
                      >
                        <GraduationCap className="h-5 w-5 mr-2" />
                        Become a GSD Associate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom banner */}
            <div className={`mt-12 text-center ${animations.fadeIn}`}>
              <div className={`bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-xl border border-secondary/20 ${gradients.cardGlass}`}>
                <p className={`${typography.fluid.large} font-semibold text-secondary`}>
                  This expansion allows us to serve more organizations while maintaining our 
                  unwavering commitment to exceptional results and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
