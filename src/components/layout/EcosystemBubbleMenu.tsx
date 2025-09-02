"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EcosystemBubbleMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const tools = [
  {
    name: "StackFast",
    description: "AI-powered launchpad",
    logoSrc: "/lovable-uploads/Logos/Stackfast.png",
    href: "/stackfast",
    color: "from-blue-500 to-purple-600",
    position: { x: -200, y: -60 },
  },
  {
    name: "Unbuilt feat. the EurekaShelf",
    description: "Innovation platform",
    logoSrc: "/lovable-uploads/Logos/UNBUILT.png",
    href: "/unbuilt",
    color: "from-green-500 to-teal-600",
    position: { x: 200, y: -60 },
  },
  {
    name: "VentureClone AI",
    description: "Business cloning platform",
    logoSrc: "/lovable-uploads/Logos/VC2.png",
    href: "/ventureclone-ai",
    color: "from-purple-500 to-pink-600",
    position: { x: -200, y: 140 },
  },
  {
    name: "RepoRadar",
    description: "GitHub intelligence",
    logoSrc: "/lovable-uploads/Logos/Reporadar.png",
    href: "/reporadar",
    color: "from-orange-500 to-red-600",
    position: { x: 200, y: 140 },
  },
];

export const EcosystemBubbleMenu = ({ isOpen, onClose }: EcosystemBubbleMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Bubble Container */}
          <div className="relative">
            {/* Background Circle - positioned behind everything */}
            <motion.div
              className="absolute left-1/3 top-3/5 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-500/40 to-indigo-600/30 backdrop-blur-sm border border-white/30 shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-emerald-400/20 before:via-transparent before:to-rose-400/20 after:absolute after:inset-0 after:bg-gradient-to-bl after:from-yellow-300/25 after:via-transparent after:to-cyan-400/25"
              style={{ zIndex: -1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* Close Button */}
            <motion.div
              className="absolute -top-16 right-0 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={onClose}
                className="bg-background/80 backdrop-blur-sm"
              >
                <X size={20} />
              </Button>
            </motion.div>

            {/* Tool Bubbles */}
            {tools.map((tool, index) => {
              return (
                <motion.div
                  key={tool.name}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${tool.position.x}px)`,
                    top: `calc(50% + ${tool.position.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: tool.position.x * 0.3,
                    y: tool.position.y * 0.3,
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: 0,
                    y: 0,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0,
                    x: tool.position.x * 0.3,
                    y: tool.position.y * 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.a
                    href={tool.href}
                    className="block w-36 h-36 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/30 to-indigo-600/25 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-emerald-400/10 before:via-transparent before:to-rose-400/10 after:absolute after:inset-0 after:bg-gradient-to-bl after:from-yellow-300/15 before:via-transparent after:to-cyan-400/15"
                    whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                    onClick={onClose}
                  >
                    <img 
                      src={tool.logoSrc} 
                      alt={`${tool.name} logo`}
                      className="w-20 h-20 object-contain relative z-10"
                      onError={(e) => {
                        console.error(`Failed to load logo: ${tool.logoSrc}`);
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded logo: ${tool.logoSrc}`);
                      }}
                    />
                  </motion.a>
                  
                  {/* Tool Info */}
                  <motion.div
                    className={`absolute top-full mt-2 text-center ${
                      tool.position.x > 0 
                        ? 'right-0 transform translate-x-0' 
                        : 'left-1/2 transform -translate-x-1/2'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <p className="text-sm font-semibold text-foreground font-heading">
                        {tool.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-body">
                        {tool.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Center Logo */}
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/30 to-indigo-600/25 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center transition-all duration-300 relative overflow-hidden p-3 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-emerald-400/10 before:via-transparent before:to-rose-400/10 after:absolute after:inset-0 after:bg-gradient-to-bl after:from-yellow-300/15 after:via-transparent after:to-cyan-400/15"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img 
                src="/lovable-uploads/Logos/Stackstudio.png" 
                alt="StackStudio logo"
                className="w-full h-full object-contain relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};