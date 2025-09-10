import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

const LawFirms = () => {
  const structuredData = [
    generateServicePageStructuredData(
      "AI for Law Firms",
      "Secure AI implementation for litigation, research, and intake workflows.",
      "https://gsdat.work/industries/law-firms",
      undefined,
      "GSD at Work",
      "$4999"
    ),
    generateFAQStructuredData([
      { question: "How do you handle confidentiality?", answer: "We implement org-scoped models, DLP, and redaction to protect sensitive data." },
      { question: "What are typical first steps?", answer: "Discovery, policy development, proof of concept in intake or research, and training." }
    ])
  ];

  return (
    <>
      <SEOHead
        title="AI for Law Firms"
        description="Secure AI implementation for legal workflows—intake, research, drafting."
        canonicalUrl="/industries/law-firms"
        structuredData={structuredData}
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">AI for Law Firms</h1>
        <p className="mb-4">We help law firms implement AI securely to accelerate document review, research, and client intake.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reduce review times by up to 70%</li>
          <li>Confidentiality safeguards for sensitive data</li>
          <li>Workflow automation for intake and discovery</li>
        </ul>
      </main>
    </>
  );
};

export default LawFirms;
