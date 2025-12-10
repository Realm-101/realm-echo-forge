import { Header } from "@/components/layout/Header";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { GatewayHero } from "@/components/sections/GatewayHero";
import { StackStudioSection } from "@/components/sections/StackStudioSection";
import { WitnessSection } from "@/components/sections/WitnessSection";
import { CookieConsent } from "@/components/ui/cookie-consent";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <GatewayHero />
        <StackStudioSection />
        <WitnessSection />
      </main>
      <SimpleFooter />
      <CookieConsent />
    </div>
  );
};

export default Index;
