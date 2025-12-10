"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BlurInText } from "@/components/interactive/BlurInText";
import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Innovation First",
    description: "We push the boundaries of what's possible in software development, creating tools that transform ideas into reality.",
  },
  {
    icon: Users,
    title: "Inclusive by Design",
    description: "From beginners to seasoned developers, our ecosystem empowers everyone to build, learn, and succeed.",
  },
  {
    icon: Lightbulb,
    title: "Solution-Oriented",
    description: "We identify real challenges in the development process and build practical, powerful solutions.",
  },
  {
    icon: Rocket,
    title: "Speed to Market",
    description: "Time is precious. Our tools are built to accelerate your journey from concept to deployment.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
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
              text="About Realm 101"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
            />
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Realm 101 is a software and web development company on a mission to redefine the development playground.
            Our flagship project, StackStudio, is an inclusive development ecosystem that makes software development
            an accessible, empowering journey for everyone.
          </motion.p>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-card border-0 shadow-premium">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
                We believe that powerful development tools should be accessible to everyone, regardless of experience level.
                StackStudio breaks down barriers by providing an integrated suite of tools that work seamlessly together,
                eliminating the complexity and confusion that often plague modern development.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Whether you're a first-time builder with a napkin sketch or an experienced developer shipping at scale,
                our ecosystem meets you where you are and accelerates your journey to production.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border-0 shadow-sm hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Get in Touch */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-card border-0 shadow-premium max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Let's Build Together
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                Have questions about our ecosystem or want to learn more about how Realm 101 can accelerate your development journey?
              </p>
              <a
                href="mailto:dev@realm101.nl"
                className="inline-flex items-center text-lg font-semibold text-accent hover:text-accent/80 transition-colors duration-200"
              >
                dev@realm101.nl
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
