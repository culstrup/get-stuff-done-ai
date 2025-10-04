
import React from "react";
import { CheckCircle } from "lucide-react";

export const EventDetailsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Tired of AI Hype? See Real Legal Workflows Transformed in This Replay!
          </h2>
          
          <p className="text-gray-700 mb-6">
            The legal landscape is buzzing with talk of Artificial Intelligence, but how does it actually translate into tangible benefits for your law firm? Moving beyond theoretical discussions, this recorded session offers a practical, sleeves-rolled-up approach to understanding and implementing AI.
          </p>
          
          <p className="text-gray-700 mb-6">
            Watch AI implementation experts Christian Ulstrup (Principal, GSD at Work LLC) and Ryan Markman (CEO, Melior) in a dynamic, recorded working session – think of it as an "AI Cooking Show" specifically for lawyers. We didn't just talk about AI; we demonstrated its power in real-time by tackling a genuine legal workflow.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-secondary p-6 mb-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-primary mb-3">See a $2,500 Value Workflow Transformation in Action</h3>
            <p className="text-gray-700 mb-4">
              In this recording, you'll witness a live, hands-on workflow transformation, a process we offer in our private Quick Win in a Box workshops. See how Christian Ulstrup analyzed a firm's specific workflow (using anonymized data for confidentiality) and implemented AI tools step-by-step to drive efficiency. This is an unparalleled chance to see expert AI implementation insight applied to a real-world legal scenario.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-primary">What Makes This Recording Different?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Watch a Live Workflow Build:</strong> See the step-by-step process of analyzing and accelerating a real legal workflow using cutting-edge AI tools. No simulations, just practical application.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Gain Actionable Insights:</strong> Learn how AI can automate tasks, enhance analysis, and improve efficiency in areas relevant to your practice (e.g., intake analysis, discovery review, document drafting, case preparation).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Benefit from Expert Guidance:</strong> Leverage Christian's extensive experience across 100+ AI implementations (including multiple law firms) and Ryan's deep understanding of org-wide AI adoption.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Demystifies AI for Legal:</strong> Understand the tools, techniques, and strategies that are delivering real value in law firms today.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Learn How to Boost Efficiency & Profitability:</strong> Leave with concrete ideas and the confidence to identify and implement high-impact AI use cases within your own firm.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
