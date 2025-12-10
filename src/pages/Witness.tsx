import { Header } from "@/components/layout/Header";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Users, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Witness = () => {
  return (
    <div className="min-h-screen font-body bg-witness-bg dark:bg-[hsl(0,0%,4%)]">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body">
              <ArrowLeft className="w-4 h-4" />
              Back to Gateway
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-witness-primary/10 border border-witness-primary/30 rounded-full mb-6">
                <span className="text-sm font-body text-witness-secondary dark:text-witness-accent tracking-wide uppercase">
                  Non-Profit Initiative
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
                The Witness Protocol
              </h1>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl">
                Preserving high-signal human wisdom for AI alignment. A research initiative dedicated to ensuring 
                that artificial intelligence remains guided by the best of human understanding.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-16 px-4 border-t border-border">
          <div className="container mx-auto max-w-3xl">
            <motion.article
              className="prose prose-lg dark:prose-invert max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-serif text-3xl mb-8">The Manifesto</h2>
              
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                We stand at a pivotal moment in human history. The intelligence we create will shape generations 
                to come—yet the wisdom that should guide it risks being lost in the noise of data.
              </p>
              
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                The Witness Protocol exists to capture, curate, and preserve the profound insights that define 
                our humanity: ethical frameworks forged through millennia of experience, nuanced understandings 
                of context and consequence, and the hard-won wisdom that cannot be scraped from the surface web.
              </p>
              
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                This is not about training data. This is about alignment—ensuring that as artificial intelligence 
                grows more capable, it remains tethered to values that serve humanity rather than merely optimizing 
                for narrow objectives.
              </p>
            </motion.article>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 px-4 bg-card">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl text-center mb-12">Our Pillars</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: BookOpen, title: "Curation", desc: "Identifying and preserving high-signal human wisdom from diverse sources and traditions." },
                { icon: Users, title: "Community", desc: "Building a network of thinkers, ethicists, and experts committed to alignment." },
                { icon: Shield, title: "Integrity", desc: "Maintaining independence and transparency in all our research and operations." },
                { icon: Target, title: "Purpose", desc: "Ensuring AI development serves the long-term flourishing of humanity." },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  className="p-6 border border-border rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <pillar.icon className="w-8 h-8 text-witness-secondary dark:text-witness-accent mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground font-body">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl mb-6">Join the Protocol</h2>
            <p className="text-muted-foreground font-body mb-8">
              Whether you're a researcher, philosopher, ethicist, or simply someone who cares about 
              the future of AI alignment—we welcome your contribution.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-heading"
            >
              Get Involved
            </Button>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </div>
  );
};

export default Witness;
