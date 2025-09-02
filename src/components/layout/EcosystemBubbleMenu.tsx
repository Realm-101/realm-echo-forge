"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Code, Zap, Bot, Radar, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EcosystemBubbleMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const tools = [
  {
    name: "StackStudio",
    description: "Full-stack development platform",
    icon: Code,
    href: "/stackstudio",
    color: "from-blue-500 to-purple-600",
    position: { x: 0, y: 0 },
  },
  {
    name: "Unbuilt",
    description: "Rapid prototyping tool",
    icon: Zap,
    href: "/unbuilt",
    color: "from-green-500 to-teal-600",
    position: { x: 150, y: -80 },
  },
  {
    name: "VentureClone AI",
    description: "Business idea generator",
    icon: Bot,
    href: "/ventureclone-ai",
    color: "from-purple-500 to-pink-600",
    position: { x: -150, y: -80 },
  },
  {
    name: "RepoRadar",
    description: "Code repository analysis",
    icon: Radar,
    href: "/reporadar",
    color: "from-orange-500 to-red-600",
    position: { x: 120, y: 100 },
  },
  {
    name: "StackFast",
    description: "Coming soon...",
    icon: Rocket,
    href: "/stackfast",
    color: "from-gray-500 to-gray-600",
    position: { x: -120, y: 100 },
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
              const IconComponent = tool.icon;
              
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
                    className={cn(
                      "block w-24 h-24 rounded-full bg-gradient-to-br shadow-lg hover:shadow-xl",
                      "flex items-center justify-center text-white cursor-pointer",
                      "transition-all duration-300",
                      tool.color
                    )}
                    whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                    onClick={onClose}
                  >
                    <IconComponent size={32} />
                  </motion.a>
                  
                  {/* Tool Info */}
                  <motion.div
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center"
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
              className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-white font-bold text-lg">R</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};