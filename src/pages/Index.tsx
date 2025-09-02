import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { EcosystemOverview } from "@/components/sections/EcosystemOverview";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <Hero />
        <EcosystemOverview />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
