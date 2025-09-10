
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

export const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          aria-label="Open navigation menu"
          data-testid="mobile-nav-button"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-white p-0 flex flex-col h-full max-h-[100vh] max-h-[100dvh]">
        <div className="flex flex-col h-full overflow-hidden">
          <div className="flex-shrink-0 flex flex-col items-center justify-center pt-12 pb-8">
            <img 
              src="/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png" 
              alt="GSD at Work Logo" 
              className="h-16 w-16" 
            />
            <span className="text-xl font-bold text-primary mt-2">at Work</span>
          </div>
          
          <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain [-webkit-overflow-scrolling:touch] px-6">
            <div className="flex flex-col space-y-6 pb-6">
              <Link to="/" className="text-lg font-medium">
                Home
              </Link>
              <Link to="/enterprise-ai-cooking-show" className="text-lg font-medium">
                Enterprise AI Cooking Show
              </Link>
              <Link to="/ai-oracle-session" className="text-lg font-medium">
                AI Oracle Session
              </Link>
              <Link to="/ai-action-workshop" className="text-lg font-medium">
                AI Action Workshop
              </Link>
              <Link to="/10x-executive" className="text-lg font-medium">
                10x Executive Program
              </Link>
              <Link to="/ai-automation-integration" className="text-lg font-medium">
                AI Automation & Integration
              </Link>
              <Link to="/triple-a-transformation" className="text-lg font-medium">
                Triple-A Transformation
              </Link>
              <Link to="/industries/law-firms" className="text-lg font-medium">
                AI for Law Firms
              </Link>
              <Link to="/industries/manufacturing" className="text-lg font-medium">
                AI in Manufacturing
              </Link>
              <Link to="/industries/energy" className="text-lg font-medium">
                AI for Energy
              </Link>
              <Link to="/industries/financial-services" className="text-lg font-medium">
                AI in Financial Services
              </Link>
              <Link to="/cases" className="text-lg font-medium">
                Case Studies
              </Link>
              <Link to="/ai-tooling-report" className="text-lg font-medium">
                AI Tooling Report
              </Link>
              <Link to="/methodology" className="text-lg font-medium">
                GSD Methodologies (Open Source)
              </Link>
              <Link to="/blog" className="text-lg font-medium">
                Professional Insights
              </Link>
              <Link to="/hirescope" className="text-lg font-medium">
                HireScope (Open Source)
              </Link>
              <Link to="/associate-program" className="text-lg font-medium">
                Associate Program
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0 px-6 pb-8 pt-6 flex flex-col gap-4 border-t">
            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-white py-6"
              onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
