import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Palette, Layout, Rocket, CheckCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Prototyping",
    description: "Transform your ideas into working prototypes in minutes with our intuitive drag-and-drop interface and pre-built components.",
  },
  {
    icon: Palette,
    title: "Visual Design Tools",
    description: "Professional design tools with customizable themes, color palettes, and typography options for stunning visual experiences.",
  },
  {
    icon: Layout,
    title: "Responsive Layouts",
    description: "Create responsive designs that work perfectly across all devices with automatic layout optimization and breakpoint management.",
  },
  {
    icon: Rocket,
    title: "One-Click Deployment",
    description: "Deploy your prototypes instantly to the web with custom domains, SSL certificates, and global CDN distribution.",
  },
];

const benefits = [
  "Rapid idea validation",
  "No-code visual interface",
  "Real-time collaboration",
  "Instant deployment",
  "Mobile-responsive designs",
  "Export to production code",
];

const Unbuilt = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-green-500/5 pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.img
                src="/lovable-uploads/unbuilt.gif"
                alt="Unbuilt"
                className="mx-auto mb-6 max-w-full h-auto"
                style={{ maxHeight: "200px" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <BlurInText
                  text="Rapid Prototyping & Ideation Tool"
                  className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 font-body leading-relaxed"
                  delay={0.3}
                />
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Turn your wildest ideas into interactive prototypes faster than ever before. 
                No coding required, unlimited creativity enabled.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <MagneticButton variant="hero" size="xl" className="group">
                  Start Prototyping
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                
                <Button variant="outline" size="xl">
                  View Gallery
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Prototype Like Never Before"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                Revolutionary prototyping tools that bridge the gap between imagination and reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                    <Card className="h-full bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl font-heading text-primary">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Benefits List */}
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-card shadow-premium border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-heading text-primary">
                    Why Choose Unbuilt?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-body text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurInText
              text="Ready to Build the Unbuildable?"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-8"
            />
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-body">
              Join creative minds worldwide who are turning impossible ideas into reality with Unbuilt.
            </p>
            <MagneticButton
              variant="outline"
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Creating Free
            </MagneticButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Unbuilt;