"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Radar, Copy, Lightbulb, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: "stackfast",
    name: "StackFast",
    tagline: "Launch full-stack apps in minutes. The Alpha Builder.",
    tag: "Alpha",
    tagColor: "bg-factory-primary text-white",
    icon: Zap,
    href: "/stackfast",
    size: "large",
  },
  {
    id: "reporadar",
    name: "RepoRadar",
    tagline: "The AI Telescope for GitHub. Deep repository analysis.",
    tag: "Beta",
    tagColor: "bg-factory-accent text-white",
    icon: Radar,
    href: "https://reporadar.online/",
    external: true,
    size: "medium",
  },
  {
    id: "ventureclone",
    name: "VentureClone",
    tagline: "Business model replication and analysis.",
    tag: "Beta",
    tagColor: "bg-factory-accent text-white",
    icon: Copy,
    href: "/ventureclone-ai",
    size: "medium",
  },
  {
    id: "unbuilt",
    name: "Unbuilt",
    tagline: "The Innovation Engine.",
    tag: "Internal",
    tagColor: "bg-muted text-muted-foreground",
    icon: Lightbulb,
    href: "/unbuilt",
    size: "small",
  },
];

export const StackStudioSection = () => {
  return (
    <section className="py-24 bg-factory-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-factory-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-factory-secondary/10 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(230 70% 55% / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(230 70% 55% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 border-factory-primary/50 text-factory-accent">
            Commercial Products
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            The StackStudio Ecosystem
          </h2>
          <p className="text-lg text-white/60 font-body max-w-2xl mx-auto">
            A suite of intelligent developer tools designed to accelerate innovation and streamline the building process.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isLarge = product.size === "large";
            const isMedium = product.size === "medium";
            
            return (
              <motion.div
                key={product.id}
                className={`
                  relative group
                  ${isLarge ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${isMedium ? "lg:col-span-2" : ""}
                `}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {product.external ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <ProductCard product={product} isLarge={isLarge} IconComponent={IconComponent} />
                  </a>
                ) : (
                  <Link to={product.href} className="block h-full">
                    <ProductCard product={product} isLarge={isLarge} IconComponent={IconComponent} />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/stackstudio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-factory-primary hover:bg-factory-primary/90 text-white font-heading font-semibold rounded-lg transition-colors"
          >
            Explore Full Ecosystem
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ 
  product, 
  isLarge, 
  IconComponent 
}: { 
  product: typeof products[0]; 
  isLarge: boolean; 
  IconComponent: typeof Zap;
}) => (
  <div
    className={`
      h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
      p-6 flex flex-col justify-between
      hover:border-factory-primary/50 hover:bg-white/10
      transition-all duration-300 group-hover:shadow-factory
      ${isLarge ? "min-h-[320px]" : "min-h-[180px]"}
    `}
  >
    <div>
      <div className="flex items-start justify-between mb-4">
        <div className={`
          rounded-xl bg-factory-primary/20 flex items-center justify-center
          ${isLarge ? "w-14 h-14" : "w-10 h-10"}
        `}>
          <IconComponent className={`text-factory-accent ${isLarge ? "w-7 h-7" : "w-5 h-5"}`} />
        </div>
        <Badge className={product.tagColor}>
          {product.tag}
        </Badge>
      </div>
      
      <h3 className={`font-heading font-bold text-white mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}>
        {product.name}
      </h3>
      <p className={`text-white/60 font-body ${isLarge ? "text-base" : "text-sm"}`}>
        {product.tagline}
      </p>
    </div>
    
    <div className="mt-4 flex items-center gap-2 text-factory-accent font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity">
      Learn more
      <ArrowUpRight className="w-4 h-4" />
    </div>
  </div>
);
