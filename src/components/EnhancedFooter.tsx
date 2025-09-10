import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Linkedin, ArrowRight, ExternalLink } from "lucide-react";
import { Separator } from "./ui/separator";

export const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationLinks = {
    services: [
      { name: "Enterprise AI Cooking Show", href: "/enterprise-ai-cooking-show", description: "Live AI transformation workshop" },
      { name: "AI Action Workshop", href: "/ai-action-workshop", description: "Quick win in a box" },
      { name: "10x Executive Program", href: "/10x-executive", description: "Executive productivity transformation" },
      { name: "Triple-A Transformation", href: "/triple-a-transformation", description: "Complete organizational AI adoption" },
      { name: "AI Oracle Session", href: "/ai-oracle-session", description: "Executive intelligence system" },
    ],
    industries: [
      { name: "AI for Law Firms", href: "/industries/law-firms", description: "Secure legal workflows" },
      { name: "AI in Manufacturing", href: "/industries/manufacturing", description: "Operational efficiency" },
      { name: "AI for Energy", href: "/industries/energy", description: "Data-driven operations" },
      { name: "AI in Financial Services", href: "/industries/financial-services", description: "Compliance and automation" },
    ],
    resources: [
      { name: "AI Tooling Report", href: "/ai-tooling-report", description: "2025 implementation guide" },
      { name: "Professional Insights", href: "/blog", description: "Expert AI implementation blog" },
      { name: "Case Studies", href: "/cases", description: "Real-world success stories" },
      { name: "Evidence", href: "/evidence", description: "Proof of outcomes" },
      { name: "Free Consultation", href: "https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", external: true, description: "Schedule your strategy session" },
    ],
    company: [
      { name: "About Christian", href: "/#about", description: "AI implementation expert" },
      { name: "Contact Us", href: "mailto:hello@gsdat.work", external: true, description: "Get in touch directly" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/christianulstrup/", external: true, description: "Follow our updates" },
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200" itemScope itemType="https://schema.org/WPFooter">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png" 
                  alt="GSD at Work Logo" 
                  className="h-10 w-10 mr-2"
                />
                <span className="text-xl font-bold text-primary">at Work</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              AI adoption and implementation for law firms, manufacturing, energy, and financial services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@gsdat.work"
                className="flex items-center text-primary hover:text-secondary transition-colors group"
                aria-label="Email Us"
              >
                <MessageSquare className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>hello@gsdat.work</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Services</h3>
            <nav className="space-y-3">
              {navigationLinks.services.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-start hover:text-secondary transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 mt-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-xs text-gray-500">{link.description}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Industries</h3>
            <nav className="space-y-3">
              {navigationLinks.industries.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-start hover:text-secondary transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 mt-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-xs text-gray-500">{link.description}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Resources</h3>
            <nav className="space-y-3">
              {navigationLinks.resources.map((link) => (
                <div key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3 mt-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500">{link.description}</div>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="group flex items-start hover:text-secondary transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 mt-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500">{link.description}</div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Company & Social */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Company</h3>
            <nav className="space-y-3 mb-6">
              {navigationLinks.company.map((link) => (
                <div key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3 mt-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500">{link.description}</div>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="group flex items-start hover:text-secondary transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 mt-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500">{link.description}</div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Social Links */}
            <div>
              <h4 className="font-medium text-primary mb-3">Follow Us</h4>
              <a
                href="https://www.linkedin.com/in/christianulstrup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A66C2]/90 transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* CTA Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific needs and discover how AI can accelerate your success.
          </p>
          <a
            href="https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors shadow-sm hover:shadow-md"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span>© {currentYear} GSD at Work LLC</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="hover:text-secondary transition-colors">
              Latest Insights
            </Link>
            <span>•</span>
            <Link to="/ai-tooling-report" className="hover:text-secondary transition-colors">
              AI Report
            </Link>
            <span>•</span>
            <a 
              href="https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};