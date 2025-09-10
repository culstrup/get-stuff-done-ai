import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

const FinancialServices = () => {
  const structuredData = [
    generateServicePageStructuredData(
      "AI in Financial Services",
      "Regulatory-compliant AI for risk analysis, customer service, and operational efficiency.",
      "https://gsdat.work/industries/financial-services",
      undefined,
      "GSD at Work",
      "$4999"
    ),
    generateFAQStructuredData([
      { question: "How do you address compliance?", answer: "We build transparent models and maintain audit trails to meet regulatory standards." },
      { question: "What problems do you tackle first?", answer: "Risk scoring, fraud detection, and automated client support deliver quick wins." }
    ])
  ];

  return (
    <>
      <SEOHead
        title="AI in Financial Services"
        description="Regulatory-compliant AI for risk analysis, customer service, and operational efficiency."
        canonicalUrl="/industries/financial-services"
        structuredData={structuredData}
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">AI in Financial Services</h1>
        <p className="mb-4">We deliver compliant AI solutions that enhance decision-making and customer experiences.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Automated compliance and reporting workflows</li>
          <li>Fraud detection and risk assessment</li>
          <li>Personalized customer insights</li>
        </ul>
      </main>
    </>
  );
};

export default FinancialServices;
