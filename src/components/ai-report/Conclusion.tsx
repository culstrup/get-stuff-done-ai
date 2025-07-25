
import React from "react";
import { CheckSquare, ArrowRight, Zap, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Conclusion = () => {
  const { toast } = useToast();
  
  const keyTakeaways = [
    "Start with essentials: Every team member needs at least a basic AI chatbot",
    "Budget wisely: Allocate $100/month per basic user, $500+ for power users",
    "Evaluate ROI: Measure time saved and output quality improvements",
    "Scale gradually: Begin with pilot programs before full deployment"
  ];

  const handleScheduleNow = () => {
    window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank");
    toast({
      title: "Calendly opened",
      description: "Schedule your free AI tools strategy session now.",
      duration: 3000,
    });
  };

  return (
    <section id="conclusion" className="mb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center">
          <CheckSquare className="h-6 w-6 text-secondary mr-2" />
          Conclusion & Next Steps
        </h2>
        
        <div className="mb-8">
          <p className="mb-4">
            AI is reshaping how businesses operate—from the way we schedule meetings to how we build software. By budgeting correctly and providing the right tools, you can increase efficiency, reduce manual work, and empower your team to get stuff done faster.
          </p>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Key Takeaways</h3>
            <ul className="space-y-3">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-secondary/10 text-secondary rounded-full mr-3">
                    <CheckSquare className="h-3 w-3" />
                  </div>
                  <span className="text-gray-700">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* New executive program cross-promotion */}
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-primary">Looking for a Hands-On Executive Approach?</h3>
            <p className="mb-4">
              Want personalized guidance on harnessing these AI tools at an executive level? Our 10x Effective Executive program provides a structured approach for busy leaders seeking to implement AI tools for maximum impact.
            </p>
            <Link to="/10x-executive" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium hover:underline">
              Learn more about the 10x Effective Executive program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="bg-secondary/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">Ready to Implement?</h3>
          <ol className="list-none space-y-4 ml-0">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white text-secondary rounded-full mr-3 font-semibold text-sm border border-secondary/20">
                1
              </div>
              <div>
                <strong className="text-gray-800 block">Identify Core vs. Optional Tools</strong>
                <p className="text-gray-600 text-sm">Not every employee needs every subscription. Segment your workforce by AI needs.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white text-secondary rounded-full mr-3 font-semibold text-sm border border-secondary/20">
                2
              </div>
              <div>
                <strong className="text-gray-800 block">Adopt a Zero-Based Budget</strong>
                <p className="text-gray-600 text-sm">Evaluate each line item every month to ensure you're getting value from each tool.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white text-secondary rounded-full mr-3 font-semibold text-sm border border-secondary/20">
                3
              </div>
              <div>
                <strong className="text-gray-800 block">Pilot, Measure, Scale</strong>
                <p className="text-gray-600 text-sm">Start small with promising new tools, measure ROI, and expand if they deliver.</p>
              </div>
            </li>
          </ol>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-100 flex flex-col h-full hover:shadow-md transition-all">
          <div className="bg-primary/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Book a Strategy Session</h3>
          <p className="text-sm text-gray-600 mb-4">Get personalized guidance on implementing AI tools for your specific needs.</p>
          <button 
            onClick={handleScheduleNow}
            className="mt-auto inline-flex items-center text-secondary hover:text-secondary/80 hover:translate-x-1 transition-all"
          >
            Schedule Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
