"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SignUpDialog } from "@/components/forms/SignUpDialog";
import { Button } from "@/components/ui/button";
import { BlurInText } from "@/components/interactive/BlurInText";
import { Mail, MessageSquare, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BlurInText
                text="Get in Touch"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground font-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Have questions about StackStudio? Want to be an early adopter? We'd love to hear from you.
            </motion.p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center bg-gradient-card border-0 shadow-sm hover:shadow-premium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Email Us</h3>
                  <a
                    href="mailto:dev@realm101.nl"
                    className="text-sm text-accent hover:text-accent/80 transition-colors duration-200"
                  >
                    dev@realm101.nl
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center bg-gradient-card border-0 shadow-sm hover:shadow-premium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Early Access</h3>
                  <SignUpDialog>
                    <button className="text-sm text-accent hover:text-accent/80 transition-colors duration-200 bg-transparent border-none cursor-pointer">
                      Join the Waitlist
                    </button>
                  </SignUpDialog>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center bg-gradient-card border-0 shadow-sm hover:shadow-premium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your thoughts and help us build better tools
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-hero border-0 shadow-glow">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                  Ready to Transform Your Development Workflow?
                </h3>
                <p className="text-white/90 font-body mb-6 max-w-2xl mx-auto">
                  Be among the first to experience the power of a truly integrated development ecosystem.
                  Sign up for early access and get exclusive updates on our launch.
                </p>
                <SignUpDialog>
                  <Button variant="secondary" size="lg" className="font-body">
                    Get Early Access
                  </Button>
                </SignUpDialog>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
