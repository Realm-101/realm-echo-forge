"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { name: "StackStudio", href: "/stackstudio" },
    { name: "Unbuilt", href: "/unbuilt" },
    { name: "VentureClone AI", href: "/ventureclone-ai" },
    { name: "RepoRadar", href: "/reporadar" },
    { name: "StackFast", href: "/stackfast" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Community", href: "/community" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/realm101" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/realm101" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/realm101" },
  { name: "Email", icon: Mail, href: "mailto:hello@realm101.dev" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">R</span>
                  </div>
                  <span className="text-xl font-heading font-bold">Realm 101</span>
                </div>
                <p className="text-primary-foreground/80 font-body leading-relaxed mb-6">
                  Empowering developers with an inclusive ecosystem of premium tools for building, 
                  deploying, and scaling applications with confidence.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Product Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 font-body"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 font-body"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 font-body"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Legal Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 font-body"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-foreground/60 text-sm font-body">
              © 2024 Realm 101. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm font-body">
              Built with ❤️ for developers, by developers
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};