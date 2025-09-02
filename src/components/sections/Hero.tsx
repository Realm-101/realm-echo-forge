"use client";

import { motion } from "framer-motion";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { SignUpDialog } from "@/components/forms/SignUpDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Headline */}
          <BlurInText
            text="Build, Deploy, Scale with Confidence"
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary mb-6"
          />
          
          {/* Hero Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <BlurInText
              text="Realm 101 is an inclusive development ecosystem that empowers every developer with premium tools and seamless workflows."
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 font-body leading-relaxed"
              delay={0.3}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <SignUpDialog>
              <MagneticButton
                variant="hero"
                size="xl"
                className="group"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </SignUpDialog>
            
            <Button
              variant="outline"
              size="xl"
              className="group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-heading">5+</div>
              <div className="text-sm text-muted-foreground font-body">Development Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-heading">∞</div>
              <div className="text-sm text-muted-foreground font-body">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-heading">100%</div>
              <div className="text-sm text-muted-foreground font-body">Developer Focused</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};