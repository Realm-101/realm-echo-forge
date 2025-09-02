"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurInText = ({ text, className, delay = 0 }: BlurInTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-2"
        >
          {word === "StackStudio," ? (
            <>
              <video 
                src="/lovable-uploads/kling_20250901_Image_to_Video_The_vibran_617_3.mp4"
                className="inline h-20 w-auto object-cover rounded align-baseline"
                autoPlay
                loop
                muted
              />
              ,
            </>
          ) : word === "StackStudio" ? (
            <video 
              src="/lovable-uploads/kling_20250901_Image_to_Video_The_vibran_617_3.mp4"
              className="inline h-20 w-auto object-cover rounded align-baseline"
              autoPlay
              loop
              muted
            />
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.div>
  );
};