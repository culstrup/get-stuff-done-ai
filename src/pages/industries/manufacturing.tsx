import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

const Manufacturing = () => {
  const structuredData = [
    generateServicePageStructuredData(
      "AI in Manufacturing",
      "Industrial AI for predictive maintenance, quality control, and supply chain optimization.",
      "https://gsdat.work/industries/manufacturing",
      undefined,
      "GSD at Work",
      "$4999"
    ),
    generateFAQStructuredData([
      { question: "How does AI reduce downtime?", answer: "Predictive models forecast failures and schedule maintenance before issues arise." },
      { question: "Can you integrate with existing systems?", answer: "Yes, we connect to your MES/ERP and sensor data for seamless insights." }
    ])
  ];

  return (
    <>
      <SEOHead
        title="AI in Manufacturing"
        description="Industrial AI for predictive maintenance, quality control, and supply chain optimization."
        canonicalUrl="/industries/manufacturing"
        structuredData={structuredData}
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">AI in Manufacturing</h1>
        <p className="mb-4">We deploy AI to boost production efficiency, quality, and uptime across your operations.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Predictive maintenance to cut downtime</li>
          <li>Real-time quality inspection with vision AI</li>
          <li>Supply chain analytics for demand planning</li>
        </ul>
      </main>
    </>
  );
};

export default Manufacturing;
