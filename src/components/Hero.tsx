
import { Button } from "@/components/ui/button";
import { shadows, gradients, buttonStyles, animations, spacing, typography } from "@/lib/design-tokens";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ParallaxElement } from "@/components/ui/parallax-element";

export const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative overflow-hidden ${spacing.section.lg} ${animations.fadeIn}`}>
      {/* Background gradient elements with enhanced animations */}
      <ParallaxElement speed={0.3} className={`absolute -top-24 -right-24 w-96 h-96 ${gradients.decorative.secondary} ${animations.floatingElements}`}>
        <div />
      </ParallaxElement>
      <ParallaxElement speed={0.2} className={`absolute -bottom-24 -left-24 w-96 h-96 ${gradients.decorative.primary} ${animations.pulsingGlow}`}>
        <div />
      </ParallaxElement>
      
      {/* Additional floating elements */}
      <div className={`absolute top-1/3 left-1/4 w-32 h-32 ${gradients.decorative.secondary} opacity-30 ${animations.slowRotate}`} />
      <div className={`absolute bottom-1/3 right-1/4 w-24 h-24 ${gradients.decorative.primary} opacity-40 ${animations.gentleBounce}`} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-primary">
            AI Implementation Services: Get Stuff Done with AI
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-secondary">
            <TypingAnimation 
              text="From Insight to Action in minutes, not months"
              startDelay={500}
              speed={50}
              className="font-bold"
            />
          </p>
          <p className={`mt-4 sm:mt-6 ${typography.fluid.large} text-gray-600 px-2 sm:px-0`}>
            Expert AI consulting and implementation services that deliver measurable business results. We help organizations accelerate AI adoption with proven strategies, hands-on implementation, and practical automation solutions.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>AI Implementation</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>Business Automation</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>Executive Productivity</span>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              className={`${buttonStyles.primary} ${buttonStyles.sizes.large} ${typography.touchTargets.button} font-semibold w-full sm:w-auto ${buttonStyles.effects.liftGlow} ${buttonStyles.effects.morphing} relative`}
              onClick={scrollToServices}
            >
              <span>See How We Execute</span>
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold px-2 py-1 rounded-full text-white shadow-lg">
                100+ Clients Served
              </span>
            </Button>
            <Button
              variant="outline"
              className={`${buttonStyles.outline.secondary} ${buttonStyles.sizes.large} ${typography.touchTargets.button} w-full sm:w-auto ${buttonStyles.effects.borderGlow} hover:border-secondary/70 hover:bg-secondary/5 relative`}
              onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
            >
              <span>Schedule a Strategy Call</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
