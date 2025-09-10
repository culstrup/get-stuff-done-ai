import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

const Energy = () => {
  const structuredData = [
    generateServicePageStructuredData(
      "AI for Energy",
      "AI deployment for energy production, grid management, and sustainability initiatives.",
      "https://gsdat.work/industries/energy",
      undefined,
      "GSD at Work",
      "$4999"
    ),
    generateFAQStructuredData([
      { question: "Do you work with renewable operators?", answer: "Yes, we optimize solar, wind, and storage assets with predictive analytics." },
      { question: "How do you improve grid reliability?", answer: "Machine learning forecasts demand and balances load across resources." }
    ])
  ];

  return (
    <>
      <SEOHead
        title="AI for Energy"
        description="AI deployment for energy production, grid management, and sustainability initiatives."
        canonicalUrl="/industries/energy"
        structuredData={structuredData}
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">AI for Energy</h1>
        <p className="mb-4">We apply AI to forecast demand, optimize assets, and support safer, cleaner energy operations.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Precise demand forecasting and load balancing</li>
          <li>Asset performance optimization</li>
          <li>Enhanced safety and regulatory compliance</li>
        </ul>
      </main>
    </>
  );
};

export default Energy;
