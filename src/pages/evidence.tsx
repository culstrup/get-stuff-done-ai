import { SEOHead } from "@/components/SEOHead";
import { generateOrganizationStructuredData } from "@/lib/seo-utils";

const Evidence = () => {
  const structuredData = [generateOrganizationStructuredData()];

  return (
    <>
      <SEOHead
        title="Evidence"
        description="Awards, partner highlights, and fast facts about GSD at Work."
        canonicalUrl="/evidence"
        structuredData={structuredData}
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Evidence</h1>
        <p className="mb-4">Proof of our AI implementations and industry partnerships.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Trusted by over 50 organizations worldwide</li>
          <li>Partnered with leading AI vendors</li>
          <li>Speaker at top industry events</li>
        </ul>
      </main>
    </>
  );
};

export default Evidence;
