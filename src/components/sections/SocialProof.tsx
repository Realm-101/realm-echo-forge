"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BlurInText } from "@/components/interactive/BlurInText";
import { TrendingUp, Users, Code2, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "4",
    label: "Tools in Beta",
    description: "Production-ready applications launching soon",
  },
  {
    icon: Users,
    value: "Early Access",
    label: "Now Available",
    description: "Join our community of forward-thinking developers",
  },
  {
    icon: Code2,
    value: "100%",
    label: "Integrated",
    description: "Tools designed to work seamlessly together",
  },
  {
    icon: Zap,
    value: "Built on",
    label: "Modern Stack",
    description: "Powered by Bolt.new, Supabase, and cutting-edge AI",
  },
];

const testimonials = [
  {
    quote: "The fragmentation in dev tools is real. Having everything work together out of the box would save countless hours of integration headaches.",
    author: "Alex Morrison",
    role: "Solo Developer",
    company: "Independent Builder",
  },
  {
    quote: "We spend more time choosing and configuring tools than actually building. An ecosystem approach is exactly what the industry needs.",
    author: "Jordan Rivera",
    role: "Tech Lead",
    company: "Early Stage Startup",
  },
  {
    quote: "The learning curve for new developers is steep because tools don't talk to each other. This unified platform could change that.",
    author: "Sam Patel",
    role: "Bootcamp Instructor",
    company: "Code Academy",
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
              text="Built for the Modern Developer"
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
            We're solving real problems that developers face every day. Join us in building the future of integrated development tools.
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