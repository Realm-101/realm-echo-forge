import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { SignUpDialog } from "@/components/forms/SignUpDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Wand2, Zap, Eye, GitBranch, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const subProducts = [
  {
    title: "C4 Studio Pro",
    description: "Professional-grade creative tools for designers and developers. Advanced canvas, layering, and export capabilities.",
    icon: Palette,
    color: "from-furry-forest/30 to-furry-sage/20",
  },
  {
    title: "Omnicodent 2.0",
    description: "AI-powered dental imaging and analysis platform with real-time visualization and diagnostic assistance.",
    icon: Eye,
    color: "from-furry-tan/30 to-furry-brown/20",
  },
  {
    title: "Hyper Boost AI",
    description: "Accelerate your creative workflow with intelligent automation, smart suggestions, and predictive design tools.",
    icon: Zap,
    color: "from-furry-sage/30 to-furry-forest/20",
  },
  {
    title: "Reality Tuner",
    description: "Fine-tune augmented and virtual reality experiences with precise controls and real-time preview capabilities.",
    icon: Wand2,
    color: "from-furry-brown/30 to-furry-tan/20",
  },
  {
    title: "VisualGit",
    description: "Visual version control for creative assets. Track changes, branch designs, and collaborate with your team visually.",
    icon: GitBranch,
    color: "from-furry-forest/30 to-furry-brown/20",
  },
];

const C4Studio = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-furry-forest via-furry-sage to-furry-tan">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background/80" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <BlurInText
                text="C4-Studio"
                className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-4"
              />
              
              <motion.p
                className="text-xl sm:text-2xl text-white/90 mb-6 font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                AI-Powered Creative Studio
              </motion.p>

              <motion.p
                className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-body leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                A comprehensive suite of AI-driven creative tools for multimedia generation, 
                visual coding, and immersive development experiences.
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
            <div className="text-center mb-16">
              <BlurInText
                text="The C4 Suite"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Five powerful products working together to revolutionize your creative workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-gradient-card shadow-premium border-0 transition-all duration-300 hover:shadow-glow">
                      <CardHeader>
                        <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4`}>
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-heading text-primary">
                          {product.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground text-base leading-relaxed">
                          {product.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <BlurInText
                text="Ready to Create?"
                className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground mb-8">
                Join the waitlist and be among the first to experience the future of creative tools.
              </p>
              <SignUpDialog>
                <MagneticButton variant="hero" size="lg">
                  Join the Waitlist
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

export default C4Studio;
