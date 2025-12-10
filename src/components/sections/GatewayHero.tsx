"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const GatewayHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-background pt-16 overflow-hidden">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Realm101: The Forge & The Witness
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bridging the gap between rapid acceleration and human alignment.
        </motion.p>
      </div>

      {/* Split Gateway */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-[500px]">
        {/* Left Side - The Factory (StackStudio) */}
        <motion.div
          className="flex-1 relative group cursor-pointer overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ flex: 1.2 }}
        >
          <Link to="/stackstudio" className="absolute inset-0 z-10" />
          
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-factory-bg via-[hsl(230,25%,12%)] to-[hsl(260,30%,10%)]" />
          
          {/* Geometric Data Lines */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <motion.line
                x1="0%" y1="20%" x2="100%" y2="40%"
                stroke="hsl(230 70% 55%)" strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <motion.line
                x1="0%" y1="60%" x2="100%" y2="30%"
                stroke="hsl(200 80% 60%)" strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="20%" y1="0%" x2="40%" y2="100%"
                stroke="hsl(260 60% 50%)" strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <motion.line
                x1="70%" y1="0%" x2="80%" y2="100%"
                stroke="hsl(230 70% 55%)" strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.4 }}
              />
            </svg>
          </div>
          
          {/* Glowing orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-factory-primary/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-factory-accent/15 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          {/* Content */}
          <div className="relative z-[5] h-full flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-factory-primary/20 border border-factory-primary/40 flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Cpu className="w-10 h-10 text-factory-accent" />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
              StackStudio Ecosystem
            </h2>
            <p className="text-lg text-white/70 font-body max-w-md mb-6">
              Intelligent developer tools for the next generation of builders. Home of StackFast and RepoRadar.
            </p>
            
            <motion.div
              className="flex items-center gap-2 text-factory-accent font-heading font-semibold"
              whileHover={{ x: 10 }}
            >
              Enter The Factory
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-factory-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Divider */}
        <motion.div
          className="hidden lg:flex w-px bg-gradient-to-b from-transparent via-border to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Right Side - The Witness Protocol */}
        <motion.div
          className="flex-1 relative group cursor-pointer overflow-hidden"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ flex: 1.2 }}
        >
          <Link to="/witness" className="absolute inset-0 z-10" />
          
          {/* Background - Editorial warm/gold */}
          <div className="absolute inset-0 bg-gradient-to-br from-witness-bg via-[hsl(38,25%,92%)] to-[hsl(35,20%,88%)] dark:from-[hsl(0,0%,6%)] dark:via-[hsl(0,0%,8%)] dark:to-[hsl(0,0%,4%)]" />
          
          {/* Organic texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(42 80% 55% / 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, hsl(35 70% 45% / 0.2) 0%, transparent 50%)`
          }} />
          
          {/* Subtle gold accents */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-witness-primary/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          {/* Content */}
          <div className="relative z-[5] h-full flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-witness-primary/20 border border-witness-primary/40 flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <BookOpen className="w-10 h-10 text-witness-secondary dark:text-witness-accent" />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              The Witness Protocol
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-md mb-6">
              Preserving high-signal human wisdom for AI alignment. A non-profit research initiative.
            </p>
            
            <motion.div
              className="flex items-center gap-2 text-witness-secondary dark:text-witness-accent font-heading font-semibold"
              whileHover={{ x: 10 }}
            >
              Enter The Protocol
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-witness-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </section>
  );
};
