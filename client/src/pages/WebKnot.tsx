import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { SignUpDialog } from "@/components/forms/SignUpDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Blocks, Search, Palette, Code2, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Component Discovery",
    description: "Explore thousands of curated components from the best open-source libraries. Find exactly what you need in seconds.",
    icon: Search,
  },
  {
    title: "Visual Customization",
    description: "Customize components visually with our intuitive editor. See changes in real-time before integrating into your project.",
    icon: Palette,
  },
  {
    title: "Smart Integration",
    description: "One-click integration with your existing codebase. Automatic dependency management and conflict resolution.",
    icon: Code2,
  },
  {
    title: "Design System Sync",
    description: "Keep your design system in sync with your component library. Automatic updates when your tokens change.",
    icon: Layers,
  },
];

const WebKnot = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-furry-tan via-furry-brown to-furry-forest">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background/80" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <BlurInText
                text="The WebKnot"
                className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-4"
              />
              
              <motion.p
                className="text-xl sm:text-2xl text-white/90 mb-6 font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Component Curation Reimagined
              </motion.p>

              <motion.p
                className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-body leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Discover, customize, and integrate the perfect UI components for your projects. 
                Streamline your frontend workflow with intelligent component management.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <SignUpDialog>
                  <MagneticButton variant="hero" size="xl" className="group">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Early Access
                  </MagneticButton>
                </SignUpDialog>
                
                <Link to="/">
                  <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-furry-tan/20 text-furry-brown px-4 py-2 rounded-full mb-6">
                  <Blocks className="w-4 h-4" />
                  <span className="text-sm font-medium">Featured Product</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                  UXC: The Component Curator
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  UXC is the heart of The WebKnot ecosystem. It's an intelligent component curation 
                  system that learns your design preferences and suggests components that match your 
                  project's aesthetic.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With AI-powered recommendations, semantic search, and seamless integration workflows, 
                  UXC transforms how teams discover and implement UI components.
                </p>
                <SignUpDialog>
                  <Button variant="fur" size="lg">
                    <span className="flex items-center">
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </SignUpDialog>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-furry-tan/20 via-furry-brown/10 to-furry-forest/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-16 h-16 bg-gradient-to-br from-furry-tan to-furry-brown rounded-lg shadow-fur"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Key Features"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build beautiful interfaces faster
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-gradient-card shadow-premium border-0">
                      <CardHeader>
                        <div className="w-14 h-14 bg-gradient-to-br from-furry-tan to-furry-brown rounded-xl flex items-center justify-center mb-4">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-xl font-heading text-primary">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <BlurInText
                text="Start Building"
                className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground mb-8">
                Ready to streamline your frontend workflow? Join the waitlist today.
              </p>
              <SignUpDialog>
                <MagneticButton variant="hero" size="lg">
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </MagneticButton>
              </SignUpDialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebKnot;
