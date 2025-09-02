"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BlurInText } from "@/components/interactive/BlurInText";
import { TrendingUp, Users, Code2, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Faster Development",
    description: "Average speed improvement across all tools",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Developers",
    description: "Growing community of innovators",
  },
  {
    icon: Code2,
    value: "1M+",
    label: "Lines of Code",
    description: "Generated and optimized daily",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable infrastructure you can trust",
  },
];

const testimonials = [
  {
    quote: "Realm 101 transformed our development workflow. What used to take weeks now takes days.",
    author: "Sarah Chen",
    role: "Lead Developer",
    company: "TechStart Inc.",
  },
  {
    quote: "The ecosystem approach is brilliant. Everything just works together seamlessly.",
    author: "Marcus Rodriguez",
    role: "CTO",
    company: "BuildFast Co.",
  },
  {
    quote: "Finally, tools that actually understand what developers need. Game-changing.",
    author: "Aisha Patel",
    role: "Full-Stack Developer",
    company: "CodeCraft Studio",
  },
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-accent/5">
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
              text="Trusted by Developers Worldwide"
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
            Join thousands of developers who have accelerated their projects with Realm 101's comprehensive ecosystem.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary font-heading mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground font-heading mb-2">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground font-body">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="text-4xl text-accent mb-4">"</div>
                  <p className="text-muted-foreground mb-6 font-body leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-primary font-heading">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground font-body">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};