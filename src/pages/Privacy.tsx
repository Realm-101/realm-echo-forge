import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Information We Collect</h2>
            <p className="text-foreground mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us for support.
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-4">
              <li>Name and email address</li>
              <li>Company information (optional)</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">How We Use Your Information</h2>
            <p className="text-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-4">
              <li>Provide and improve our services</li>
              <li>Send you updates and marketing communications</li>
              <li>Respond to your requests and provide customer support</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Data Security</h2>
            <p className="text-foreground mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Contact Us</h2>
            <p className="text-foreground">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@realm101.com" className="text-primary hover:underline">
                privacy@realm101.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;