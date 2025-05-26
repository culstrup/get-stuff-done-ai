
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { ServiceFeaturesList } from "@/components/services/ServiceFeaturesList";
import { services } from "@/components/services/data";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { ServiceRecommendation } from "@/components/internal-linking/ServiceRecommendation";

const AIActionWorkshop = () => {
  const workshop = services.find(s => s.title === "AI Action Workshop");
  
  if (!workshop) return null;
  
  // Current date for dateModified schema property
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate structured data with enhanced descriptions from our Helmet implementation
  const serviceStructuredData = generateServicePageStructuredData(
    workshop.title,
    workshop.description,
    "https://gsdat.work/ai-action-workshop",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "Get Stuff Done AI",
    workshop.price
  );

  // Enhanced FAQ structured data with more comprehensive answers
  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the AI Action Workshop?",
      answer: "The AI Action Workshop is your quick win in a box - a hands-on session where you'll break your four-minute mile with AI. Transform tasks that take days or weeks into victories achieved in hours, while gaining the know-how to replicate this success across your organization."
    },
    {
      question: "Who should attend the AI Action Workshop?",
      answer: "The workshop is ideal for business professionals, executives, franchise owners, multi-location operators, and teams who want to quickly implement AI solutions for specific workflows or processes. It's perfect for those managing complex operations who prefer learning by doing rather than theoretical discussions."
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
      answer: workshop.price + ". " + workshop.subtext
    },
    {
      question: "How does the workshop process work?",
      answer: "The process is designed for maximum impact: 1) Discovery call to identify what takes you 2 days that we'll do in 2 hours, 2) AI Action Workshop where you'll experience your 10X transformation firsthand and create reusable processes, and 3) Follow-up support to ensure your success becomes charismatic - spreading throughout your organization."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="AI Action Workshop | Quick Win in a Box"
        content="Quick win in a box: Break your four-minute mile with AI. Transform tasks that take days into victories achieved in hours. This hands-on workshop delivers 10X productivity gains while teaching you to fish - giving you the know-how to replicate success across your organization."
        canonicalUrl="https://gsdat.work/ai-action-workshop"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
      />
      
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              AI Action Workshop: Your Quick Win in a Box
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Break your four-minute mile with AI. Turn what takes days or weeks into hours of focused execution. Learn to fish while achieving immediate, game-changing results that inspire your entire organization.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">🎯 Perfect for Business Leaders Who Want:</h2>
              <ul className="space-y-2 text-blue-800">
                <li>• <strong>Immediate AI implementation</strong> with working solutions</li>
                <li>• <strong>Practical automation strategies</strong> for workflow optimization</li>
                <li>• <strong>Hands-on experience</strong> with proven AI tools and frameworks</li>
                <li>• <strong>Executable roadmaps</strong> for scaling AI across your organization</li>
              </ul>
            </div>
            
            {/* Industry-specific use cases */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 mb-8">
              <h2 className="text-lg font-semibold text-green-900 mb-3">🏢 Real-World AI Applications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-green-800 mb-2">For Multi-Location Businesses:</h3>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Contract & lease review automation (save $10k+ per location)</li>
                    <li>• Multi-location performance analytics</li>
                    <li>• Franchise operations optimization</li>
                    <li>• Location profitability analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-green-800 mb-2">For Service Industries:</h3>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Customer conversation insights mining</li>
                    <li>• Revenue optimization (3x catering growth)</li>
                    <li>• Automated demand generation campaigns</li>
                    <li>• Operational efficiency improvements</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20 mb-12">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Results You Can Expect</h2>
              <p className="text-gray-700 mb-0">
                {workshop.extraText}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200 mb-12">
              <h2 className="text-3xl font-bold text-center text-primary mb-6">🎯 Quick Win in a Box</h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Your Challenge</h3>
                  <p className="text-gray-600">Something that takes you 2 days or 2 weeks</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Workshop</h3>
                  <p className="text-gray-600">Get it done in hours with 10X transformation</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Your Victory</h3>
                  <p className="text-gray-600">Break your four-minute mile & inspire others</p>
                </div>
              </div>
              
              <p className="text-center mt-6 text-lg font-medium text-gray-800">
                Experience success so compelling it becomes charismatic - spreading throughout your organization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">Workshop Benefits</h2>
                <ServiceFeaturesList features={workshop.features} />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Investment</h2>
                <p className="text-3xl font-bold text-secondary mb-2">{workshop.price}</p>
                <p className="text-gray-600 mb-6">{workshop.subtext}</p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6"
                    onClick={() => workshop.calendlyLink && window.open(workshop.calendlyLink, '_blank')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Free Consultation
                  </Button>
                  
                  <p className="text-gray-600 text-sm text-center">
                    Discuss your specific needs and explore if this workshop is right for you
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-900">
                    🎯 Volume Discounts Available
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    Planning multiple workshops? Bundle pricing available starting at 10 workshops. 
                    Ask about our organizational transformation packages.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-semibold text-primary mb-6">How It Works</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Discovery Call</h3>
                    <p className="text-gray-700">We'll discuss your specific challenges - whether it's franchise profitability, operational efficiency, or revenue optimization - and identify the most impactful area for AI implementation during the workshop.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">AI Action Workshop</h3>
                    <p className="text-gray-700">Experience your 10X transformation: What normally takes 2 days gets done in 2 hours. Build real solutions, create reusable SOPs, and gain the confidence to replicate this success. Your victory becomes charismatic - inspiring others to follow.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Follow-Up Support</h3>
                    <p className="text-gray-700">Access to implementation guides, templates, and a follow-up check-in to ensure your solutions continue to deliver value.</p>
                  </div>
                </div>
              </div>
            </div>
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
