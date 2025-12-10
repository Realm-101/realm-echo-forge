"use client";

import { motion } from "framer-motion";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { SignUpDialog } from "@/components/forms/SignUpDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 pt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Headline */}
          <BlurInText
            text="Redefining the Development Playground"
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary mb-6"
          />
          
          {/* Hero Subheading */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 font-body leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            An inclusive development ecosystem that makes software development accessible and empowering for everyone, from beginners to seasoned developers.
          </motion.p>

          {/* Hero Visual */}
          <motion.div
            className="mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="/lovable-uploads/stack-universe3_(large).png"
              alt="StackStudio Ecosystem Visualization"
              className="w-full h-auto rounded-2xl shadow-glow"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a href="https://realm101.com/stackstudio" target="_blank" rel="noopener noreferrer">
              <MagneticButton
                variant="hero"
                size="xl"
                className="group"
              >
                Explore StackStudio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </a>

            <SignUpDialog>
              <Button
                variant="outline"
                size="xl"
                className="group"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get Early Access
              </Button>
            </SignUpDialog>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-heading">4</div>
              <div className="text-sm text-muted-foreground font-body">Integrated Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-heading">Real-time</div>
              <div className="text-sm text-muted-foreground font-body">Sync & Collaboration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-heading">One</div>
              <div className="text-sm text-muted-foreground font-body">Unified Platform</div>
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