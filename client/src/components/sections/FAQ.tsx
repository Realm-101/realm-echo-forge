"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurInText } from "@/components/interactive/BlurInText";

const faqs = [
  {
    question: "What is Realm 101?",
    answer: "Realm 101 is a comprehensive development ecosystem that provides developers with a suite of integrated tools for building, deploying, and scaling applications. Our platform includes StackStudio for full-stack development, Unbuilt for rapid prototyping, VentureClone AI for business ideation, and more.",
  },
  {
    question: "How do the tools work together?",
    answer: "All Realm 101 tools are designed with interoperability in mind. You can seamlessly move projects between tools, share data and configurations, and maintain consistent workflows across the entire development lifecycle. For example, prototype in Unbuilt, develop in StackStudio, and analyze with RepoRadar.",
  },
  {
    question: "Is Realm 101 suitable for beginners?",
    answer: "Absolutely! Realm 101 is designed to be inclusive and accessible to developers of all skill levels. Our tools feature intuitive interfaces, comprehensive documentation, and guided workflows that help beginners learn while providing the advanced features that experienced developers need.",
  },
  {
    question: "What programming languages are supported?",
    answer: "Realm 101 supports all major programming languages including JavaScript, TypeScript, Python, Java, C#, Go, Rust, and many more. Our platform is language-agnostic and can adapt to your preferred tech stack and development environment.",
  },
  {
    question: "How much does Realm 101 cost?",
    answer: "We offer flexible pricing plans to suit different needs, from individual developers to enterprise teams. Many of our tools have free tiers to get you started, with premium features available through subscription plans. Contact us for detailed pricing information.",
  },
  {
    question: "Can I integrate Realm 101 with my existing tools?",
    answer: "Yes! Realm 101 is built with integration in mind. We provide APIs, webhooks, and direct integrations with popular development tools like GitHub, GitLab, Slack, Jira, and many more. You can easily incorporate our tools into your existing workflow.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including detailed documentation, video tutorials, community forums, and direct support channels. Premium users get priority support with dedicated account managers and custom integration assistance.",
  },
  {
    question: "Is my code and data secure?",
    answer: "Security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure, regular security audits, and compliance with industry standards like SOC 2 and GDPR.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BlurInText
              text="Frequently Asked Questions"
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
            Get answers to the most common questions about Realm 101 and our development ecosystem.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-gradient-card rounded-lg px-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-primary hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};