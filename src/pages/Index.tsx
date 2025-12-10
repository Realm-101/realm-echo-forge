import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { EcosystemOverview } from "@/components/sections/EcosystemOverview";
import { About } from "@/components/sections/About";
import { SocialProof } from "@/components/sections/SocialProof";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { CookieConsent } from "@/components/ui/cookie-consent";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <Hero />
        <EcosystemOverview />
        <About />
        <SocialProof />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
