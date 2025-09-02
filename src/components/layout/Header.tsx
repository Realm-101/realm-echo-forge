"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EcosystemBubbleMenu } from "./EcosystemBubbleMenu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBubbleMenuOpen, setIsBubbleMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/lovable-uploads/Logos/Realm101furtrans.png" 
              alt="Realm 101 Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-heading font-bold text-primary">
              Realm 101
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-body"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            <Button
              variant="outline"
              onClick={() => setIsBubbleMenuOpen(true)}
              className="font-body"
            >
              Ecosystem Tools
            </Button>
            
            <Button variant="hero" size="sm" className="font-body">
              Start Building
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden py-4 border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-accent transition-colors duration-200 font-body py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsBubbleMenuOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full font-body"
                >
                  Ecosystem Tools
                </Button>
                
                <Button variant="hero" className="w-full font-body">
                  Start Building
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Ecosystem Bubble Menu */}
      <EcosystemBubbleMenu
        isOpen={isBubbleMenuOpen}
        onClose={() => setIsBubbleMenuOpen(false)}
      />
    </motion.header>
  );
};