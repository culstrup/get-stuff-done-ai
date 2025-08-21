
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Github } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/lib/navigation-menu-variants";
import { shadows, gradients, buttonStyles, animations, borderRadius } from "@/lib/design-tokens";

export const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="col-span-2 mb-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">Our AI Implementation Journey</div>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/enterprise-ai-cooking-show"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Step 0</span>
                          <span className="text-sm font-medium leading-none">Enterprise AI Cooking Show</span>
                        </div>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded ml-2">$4,999</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        High-energy, live AI transformation workshop
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/ai-oracle-session"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Step 1</span>
                          <span className="text-sm font-medium leading-none">AI Oracle Session</span>
                        </div>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded ml-2">$2,499</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        AI-powered executive intelligence system
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/ai-action-workshop" 
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Step 2</span>
                          <span className="text-sm font-medium leading-none">AI Action Workshop</span>
                        </div>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded ml-2">$4,999</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Quick win in a box - 10X transformation guaranteed
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/10x-executive"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Step 3</span>
                          <span className="text-sm font-medium leading-none">10x Effective Executive</span>
                        </div>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded ml-2">$19,999</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        AI transformation for executives and their teams
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/ai-automation-integration"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Step 4</span>
                          <span className="text-sm font-medium leading-none">AI Automation & Integration</span>
                        </div>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded ml-2">Custom</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Scale 10→100 with hardcore automation
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/triple-a-transformation"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Step 5</span>
                          <span className="text-sm font-medium leading-none">Triple-A Transformation</span>
                        </div>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded ml-2">Custom</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Complete organizational AI implementation program
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/blog"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="text-sm font-medium leading-none">Professional Insights</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        Articles and posts on AI strategy and digital transformation
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <Link to="/ai-tooling-report"
                      className={`flex h-full w-full select-none flex-col justify-end ${borderRadius.md} ${gradients.secondaryStrong} p-6 no-underline outline-none ${shadows.hoverEffect}`}
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-white">
                        2025 AI Tooling & Budget Report
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Comprehensive guide to AI tool budgeting for businesses
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/cases"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="text-sm font-medium leading-none">Case Studies</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        Real-world AI implementation success stories
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/methodology"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium leading-none">GSD Methodologies</span>
                        <Badge variant="secondary" className="text-xs py-0 px-1 h-5">
                          <Github className="w-3 h-3 mr-1" />
                          Open Source
                        </Badge>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        Our proven methodologies for AI transformation
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/hirescope"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium leading-none">HireScope</span>
                        <Badge variant="secondary" className="text-xs py-0 px-1 h-5">
                          <Github className="w-3 h-3 mr-1" />
                          Open Source
                        </Badge>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        AI-powered candidate analysis for Greenhouse ATS
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/associate-program" className={navigationMenuTriggerStyle()}>
                Become an Associate
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Button
        className={`ml-2 ${buttonStyles.primary} ${shadows.buttonEffect}`}
        onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
      >
        Book a Strategy Call
      </Button>
    </nav>
  );
};
