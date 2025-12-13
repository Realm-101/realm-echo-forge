"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { EcosystemBubbleMenu } from "./EcosystemBubbleMenu";
import { SignUpDialog } from "@/components/forms/SignUpDialog";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBubbleMenuOpen, setIsBubbleMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  
  const products = [
    { name: "StackStudio", href: "/stackstudio", description: "Development ecosystem" },
    { name: "C4-Studio", href: "/c4-studio", description: "AI creative studio" },
    { name: "The WebKnot", href: "/webknot", description: "Component curation" },
    { name: "Aldebate", href: "/aldebate", description: "AI debate platform" },
  ];
  
  const navLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "Products",
    href: "#products",
    hasDropdown: true
  }, {
    name: "About",
    href: "#about"
  }];
  return <motion.header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border" initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{
              scale: 1.05
            }}
            transition={{
              duration: 0.2
            }}
          >
            <img src="/realm101-logo.png" alt="Realm 101 Logo" className="w-40 h-16 object-contain" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => 
              link.hasDropdown ? (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <motion.button
                    className="flex items-center gap-1 text-foreground hover:text-accent transition-colors duration-200 font-body cursor-pointer bg-transparent border-none"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", isProductsOpen && "rotate-180")} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-premium overflow-hidden"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            to={product.href}
                            className="block px-4 py-3 hover:bg-muted/50 transition-colors"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            <div className="font-body font-medium text-foreground">{product.name}</div>
                            <div className="text-sm text-muted-foreground">{product.description}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.name === "Home" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-body"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-body"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              )
            )}
            
            <ThemeToggle />

            <SignUpDialog>
              <Button variant="fur" size="sm" className="font-body">
                Start Building
              </Button>
            </SignUpDialog>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && <motion.nav className="md:hidden py-4 border-t border-border" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }}>
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-foreground hover:text-accent transition-colors duration-200 font-body py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                <div className="py-2">
                  <div className="text-muted-foreground text-sm mb-2 font-body">Products</div>
                  <div className="pl-4 space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="block text-foreground hover:text-accent transition-colors duration-200 font-body py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <a
                  href="#about"
                  className="text-foreground hover:text-accent transition-colors duration-200 font-body py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>

                <SignUpDialog>
                  <Button variant="fur" className="w-full font-body mt-4">
                    Start Building
                  </Button>
                </SignUpDialog>
              </div>
            </motion.nav>}
        </AnimatePresence>
      </div>

      {/* Ecosystem Bubble Menu */}
      <EcosystemBubbleMenu isOpen={isBubbleMenuOpen} onClose={() => setIsBubbleMenuOpen(false)} />
    </motion.header>;
};