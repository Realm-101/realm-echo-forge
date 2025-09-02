"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Zap, Bot, Radar, Rocket, ArrowRight } from "lucide-react";
import { BlurInText } from "@/components/interactive/BlurInText";

const tools = [
  {
    name: "StackStudio",
    description: "Complete full-stack development platform with integrated workflows, collaborative features, and deployment automation.",
    icon: Code,
    features: ["Integrated IDE", "Team Collaboration", "Auto Deploy"],
    href: "/stackstudio",
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "Unbuilt",
    description: "Rapid prototyping and ideation tool that transforms concepts into working prototypes in minutes.",
    icon: Zap,
    features: ["Rapid Prototyping", "Visual Design", "Quick Deploy"],
    href: "/unbuilt",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "VentureClone AI",
    description: "AI-powered business idea generator that analyzes markets and creates comprehensive business plans.",
    icon: Bot,
    features: ["AI-Powered Ideas", "Market Analysis", "Business Plans"],
    href: "/ventureclone-ai",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "RepoRadar",
    description: "Advanced code repository analysis tool for optimization, security scanning, and performance insights.",
    icon: Radar,
    features: ["Code Analysis", "Security Scan", "Performance Metrics"],
    href: "/reporadar",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "StackFast",
    description: "Coming soon - Revolutionary development acceleration platform for lightning-fast project delivery.",
    icon: Rocket,
    features: ["Coming Soon", "Speed Focused", "Performance First"],
    href: "/stackfast",
    color: "from-gray-500 to-gray-600",
    isComingSoon: true,
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
              text="Complete Development Ecosystem"
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
            From ideation to deployment, our comprehensive suite of tools covers every aspect of modern development. 
            Build faster, deploy smarter, and scale with confidence.
          </motion.p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            
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
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-heading text-primary">
                          {tool.name}
                        </CardTitle>
                        {tool.isComingSoon && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-body">
                            Coming Soon
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
                      variant={tool.isComingSoon ? "outline" : "default"}
                      className="w-full group"
                      disabled={tool.isComingSoon}
                      asChild={!tool.isComingSoon}
                    >
                      {tool.isComingSoon ? (
                        "Coming Soon"
                      ) : (
                        <a href={tool.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
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
          <Button variant="hero" size="lg" className="group">
            Explore All Tools
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};