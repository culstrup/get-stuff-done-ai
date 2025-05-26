import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, FileText, Filter, Search, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";
import { shadows, gradients } from "@/lib/design-tokens";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Cases = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "AI Implementation Case Studies",
      "description": "Collection of real-world AI implementation case studies and success stories from GSD at Work clients.",
      "url": "https://gsdat.work/cases",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 0,
        "itemListElement": []
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://gsdat.work/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": "https://gsdat.work/cases"
          }
        ]
      }
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Case Studies | AI Implementation Success Stories"
        description="Real-world AI implementation case studies and success stories. Learn how businesses transform with practical AI solutions from GSD at Work. Detailed case studies coming soon."
        canonicalUrl="https://gsdat.work/cases"
        keywords="AI case studies, AI implementation success stories, business transformation AI, AI consulting results, practical AI solutions"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background py-24 sm:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-70 z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 z-0"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              Success Stories
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real-world examples of AI implementation success stories that drive measurable business outcomes.
            </p>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search case studies..." 
                className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200" 
                disabled
              />
            </div>
            
            <Button 
              variant="outline" 
              className="gap-2 group"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="h-4 w-4 text-gray-600 group-hover:text-primary transition-colors" />
              Filter by Industry
              <Badge className="ml-1 bg-secondary/20 text-secondary hover:bg-secondary/30 border-0">Coming Soon</Badge>
            </Button>
          </div>

          {/* Industry Focus Section */}
          <div className="mb-16 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200">
            <h2 className="text-2xl font-bold text-primary mb-4">Industry Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Franchise & Multi-Location</h3>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Franchisee profitability acceleration</li>
                  <li>• Multi-location performance tracking</li>
                  <li>• Contract automation ($10k+ savings)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Restaurant & Hospitality</h3>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Catering revenue optimization (3x)</li>
                  <li>• Customer data insights</li>
                  <li>• Operational efficiency</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 mb-2">Enterprise & Tech</h3>
                <ul className="space-y-1 text-sm text-purple-700">
                  <li>• Workflow automation</li>
                  <li>• AI adoption at scale</li>
                  <li>• Process optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mb-20">
            {/* Othership Case Study Card */}
            <Card className={`overflow-hidden border border-gray-200 ${shadows.cardEffect}`}>
              <CardHeader className={`${gradients.secondaryLight} pb-4`}>
                <div className="mb-2">
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                    Wellness Industry
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold line-clamp-2">
                  Othership Accelerates Growth with AI Implementation
                </CardTitle>
                <CardDescription>
                  Significant efficiency gains in recruitment, operations, and creative development
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-gray-600 line-clamp-3">
                    How a rapidly growing social bathhouse experience transformed key operational processes through targeted AI adoption coaching and implementation sprints.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      <span>May 2025</span>
                    </div>
                    <Badge variant="outline" className="text-gray-500">
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/cases/othership-ai-partnership">
                    <Button className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-white">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Tooling Report Card */}
            <Card className={`bg-secondary/5 border-secondary/20 ${shadows.cardEffect}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  2025 AI Tooling & Budget Guide
                </CardTitle>
                <CardDescription>
                  Get comprehensive insights on AI tool costs, budget tiers, and implementation strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png" 
                    alt="2025 AI Tooling & Budget Report" 
                    className="w-full rounded-md shadow-sm"
                    width="600"
                    height="315"
                  />
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <Badge variant="outline" className="mr-2">
                      <CalendarDays className="mr-1 h-3 w-3" /> Updated for 2025
                    </Badge>
                    <span>7-minute read</span>
                  </div>
                </div>
                <Link to="/ai-tooling-report">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Read the Full Report <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          {/* Coming soon section with improved styling */}
          <div className={`mx-auto max-w-2xl my-24 text-center p-10 rounded-xl ${gradients.primaryLight} border border-gray-200/50 ${shadows.md}`}>
            <h2 className="text-2xl font-bold mb-4">More Case Studies Coming Soon</h2>
            <p className="text-gray-600 mb-8">
              We're continuously documenting our client success stories. Check back for additional case studies demonstrating the practical impact of AI implementation.
            </p>
            <Button 
              variant="outline" 
              className="gap-2 border-primary/20 text-primary bg-white hover:bg-primary/5"
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Want to be our next case study? Book a call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cases;
