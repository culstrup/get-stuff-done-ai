
import React from "react";
import { Users } from "lucide-react";

const PerEmployeeBudgeting = () => {
  const budgetCategories = [
    {
      title: "Basic User:",
      price: "~$100/month",
      description: "Needs ChatGPT (e.g., Plus at $20/month), meeting transcription, a few automations."
    },
    {
      title: "Semi-Power User:",
      price: "$300–$500/month",
      description: "Multiple AI tools for advanced tasks, moderate usage of coding or design AI."
    },
    {
      title: "Full Power User:",
      price: "$500–$700/month",
      description: "Heavy use of premium AI subscriptions, possibly advanced dev tools, robust automations."
    },
    {
      title: "Engineer / Agent-Orchestrator:",
      price: "$1,000–$2,500+/month",
      description: "Extensive coding-agent usage, large API calls, specialized enterprise tools."
    }
  ];

  return (
    <section id="per-employee" className="mb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center">
          <Users className="h-6 w-6 text-secondary mr-2" />
          Scaling Up: Per-Employee Budgeting
        </h2>
        <p className="mb-6">
          We recommend segmenting your staff based on how heavily they use AI. Typically, about 5% of employees are power users:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {budgetCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {category.title} <span className="text-secondary">{category.price}</span>
              </h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerEmployeeBudgeting;
