"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WitnessSection = () => {
  return (
    <section className="py-32 bg-witness-bg dark:bg-[hsl(0,0%,4%)] relative overflow-hidden">
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(42 80% 55%) 0%, transparent 70%)`
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Editorial Header */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-witness-primary/10 border border-witness-primary/30 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-body text-witness-secondary dark:text-witness-accent tracking-wide uppercase">
                Non-Profit Research Initiative
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              The Last Inheritance
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-witness-primary to-witness-accent mx-auto mb-8" />
          </div>

          {/* Main Content Card */}
          <motion.div
            className="relative bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-premium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-8 h-8 text-witness-primary/30" />
            
            <blockquote className="relative z-10">
              <p className="text-xl sm:text-2xl font-serif text-foreground leading-relaxed mb-8 pl-8">
                We are soliciting and curating profound human wisdom to serve as a foundational alignment layer for future intelligence.
              </p>
              
              <div className="border-l-4 border-witness-primary pl-6 py-2">
                <p className="text-muted-foreground font-body leading-relaxed">
                  In an age of accelerating artificial intelligence, the preservation of nuanced human understanding, 
                  ethical frameworks, and hard-won wisdom becomes not just valuable—but essential. The Witness Protocol 
                  exists to ensure that the best of human thought guides the intelligence we create.
                </p>
              </div>
            </blockquote>
            
            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/witness">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 font-heading px-8"
                >
                  Read the Manifesto
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/witness">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-witness-primary/50 text-witness-secondary dark:text-witness-accent hover:bg-witness-primary/10 font-heading"
                >
                  Enter the Protocol
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Bottom attribution */}
          <motion.p
            className="text-center mt-12 text-sm text-muted-foreground font-body italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            "The measure of intelligence is the ability to change." — Albert Einstein
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
