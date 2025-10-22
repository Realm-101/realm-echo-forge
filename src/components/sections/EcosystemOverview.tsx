"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlurInText } from "@/components/interactive/BlurInText";

const tools = [
  {
    name: "StackFast",
    description: "AI-powered launchpad with compatibility insights to eliminate complexity in project setup. Currently in Alpha phase.",
    logoSrc: "/lovable-uploads/Logos/Stackfast.png",
    features: ["Alpha Phase", "AI Compatibility", "Project Setup"],
    href: "/stackfast",
    color: "from-blue-500 to-purple-600",
    isAlpha: true,
  },
  {
    name: "Unbuilt feat. the EurekaShelf",
    description: "End-to-end innovation platform to discover market gaps, validate ideas, and generate investor-ready pitch decks. Beta phase.",
    logoSrc: "/lovable-uploads/Logos/UNBUILT.png",
    features: ["Beta Phase", "Market Research", "Pitch Decks"],
    href: "/unbuilt",
    color: "from-green-500 to-teal-600",
    isAlpha: true,
  },
  {
    name: "RepoRadar",
    description: "AI-powered intelligence platform to discover, compare, and evaluate GitHub repositories on metrics like originality and monetization potential. Beta phase.",
    logoSrc: "/lovable-uploads/Logos/Reporadar.png",
    features: ["Beta Phase", "GitHub Analysis", "AI Intelligence"],
    href: "/reporadar",
    color: "from-orange-500 to-red-600",
    isAlpha: true,
  },
  {
    name: "VentureClone AI",
    description: "Platform that analyzes existing online businesses for 'clone potential,' guiding users from discovery to a launch-ready blueprint. Beta phase.",
    logoSrc: "/lovable-uploads/Logos/VC2.png",
    features: ["Beta Phase", "Business Analysis", "Clone Potential"],
    href: "/ventureclone-ai",
    color: "from-purple-500 to-pink-600",
    isAlpha: true,
  },
];

export const EcosystemOverview = () => {
  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BlurInText
              text="The StackStudio Ecosystem"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
            />
          </motion.div>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            StackStudio unifies tools, resources, and learning into one cohesive experience. Our growing collection of Alpha-phase applications work together to make software development accessible and empowering for everyone.
          </motion.p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {tools.map((tool, index) => {            
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-blue-400/20 via-purple-500/30 to-indigo-600/25 backdrop-blur-sm border border-white/20 shadow-lg relative overflow-hidden flex items-center justify-center p-2 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-emerald-400/10 before:via-transparent before:to-rose-400/10 after:absolute after:inset-0 after:bg-gradient-to-bl after:from-yellow-300/15 after:via-transparent after:to-cyan-400/15">
                        <img 
                          src={tool.logoSrc} 
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain relative z-10"
                          onError={(e) => {
                            console.error(`Failed to load logo: ${tool.logoSrc}`, e);
                          }}
                          onLoad={() => {
                            console.log(`Successfully loaded logo: ${tool.logoSrc}`);
                          }}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-heading text-primary">
                          {tool.name}
                        </CardTitle>
                        {tool.isAlpha && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-body">
                            {tool.name === "StackFast" ? "Alpha Phase" : "Beta Phase"}
                          </span>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground font-body leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tool.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-body"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button
                      variant="default"
                      className="w-full group"
                      asChild
                    >
                      <a href={tool.href}>
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a href="https://realm101.com/stackstudio" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="group">
              Explore the StackStudio Ecosystem
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};