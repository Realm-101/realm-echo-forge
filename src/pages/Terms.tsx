import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Acceptance of Terms</h2>
            <p className="text-foreground mb-4">
              By accessing and using Realm 101 services, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Use License</h2>
            <p className="text-foreground mb-4">
              Permission is granted to temporarily use Realm 101 services for personal, 
              non-commercial transitory viewing only.
            </p>
            <p className="text-foreground mb-4">This license shall automatically terminate if you violate any of these restrictions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Disclaimer</h2>
            <p className="text-foreground mb-4">
              The materials on Realm 101's website are provided on an 'as is' basis. 
              Realm 101 makes no warranties, expressed or implied, and hereby disclaims and 
              negates all other warranties including without limitation, implied warranties or 
              conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Limitations</h2>
            <p className="text-foreground mb-4">
              In no event shall Realm 101 or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on Realm 101's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Contact Information</h2>
            <p className="text-foreground">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@realm101.com" className="text-primary hover:underline">
                legal@realm101.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;