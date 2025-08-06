import { spacing, typography } from "@/lib/design-tokens";
import { CheckCircle, TrendingUp, Clock, Shield, DollarSign, Zap } from "lucide-react";

const points = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    text: "Unlock 20%+ EBITDA in 90 days—AI that pays for itself fast.",
    highlight: "20%+ EBITDA"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    text: "Board pressure for quick EBITDA wins? Our 14-day pilot frees 10× capacity—verified by finance.",
    highlight: "14-day pilot"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    text: "Built for operators, not IT. Zero rip-and-replace—we layer on top of your existing stack.",
    highlight: "Zero rip-and-replace"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    text: "Rapid pilots, real dollars: first 30-day quick-win typically frees 10× capacity or compresses a 10-day report cycle to same-day.",
    highlight: "10× capacity"
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    text: "PE-grade rigor with privately-held speed: Expect 5–10× payback as verified by finance teams across sectors.",
    highlight: "5–10× payback"
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    text: "Risk-free start: 30-minute free consult pinpoints your fastest ROI lever before you spend a dollar.",
    highlight: "Risk-free start"
  }
];

export const ExecutiveMessaging = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why PE Firms & Portfolio Companies Choose GSD at Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven ROI that CFOs trust. Rapid deployment that operators love.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 h-fit">
                  <div className="text-primary">{point.icon}</div>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    {point.text.split(point.highlight)[0]}
                    <span className="font-semibold text-primary">{point.highlight}</span>
                    {point.text.split(point.highlight)[1]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-semibold text-gray-900">Trusted by Portfolio Companies & PE Partners Across the US</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExecutiveMessaging;
