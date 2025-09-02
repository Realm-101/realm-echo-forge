import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Code, GitBranch, Users, Zap, CheckCircle, ArrowRight, Play } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Integrated Development Environment",
    description: "Full-featured IDE with syntax highlighting, intelligent code completion, and debugging tools for all major programming languages.",
  },
  {
    icon: GitBranch,
    title: "Version Control Integration",
    description: "Seamless Git integration with visual diff tools, branch management, and collaborative code review workflows.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaborative editing, shared workspaces, and integrated communication tools for distributed teams.",
  },
  {
    icon: Zap,
    title: "Auto-Deploy Pipeline",
    description: "Automated CI/CD pipelines with one-click deployments to popular cloud platforms and hosting services.",
  },
];

const benefits = [
  "Complete full-stack development environment",
  "Integrated testing and debugging tools",
  "Real-time collaboration features",
  "Automated deployment workflows",
  "Multi-language support",
  "Cloud-based development environment",
];

const StackStudio = () => {
  const { toast } = useToast();

  const handleStartBuilding = () => {
    toast({
      title: "Coming Soon!",
      description: "StackStudio will be available shortly.",
    });
  };

  const handleViewDemo = () => {
    toast({
      title: "Coming Soon!",
      description: "The demo video will be available shortly.",
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Coming Soon!",
      description: "StackStudio will be available shortly.",
    });
  };

  return (
    <div className="min-h-screen font-body">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-blue-500/5 pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <BlurInText
                text="StackStudio"
                className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary mb-6"
                showVideo={true}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <BlurInText
                  text="Complete Full-Stack Development Platform"
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
                Build, collaborate, and deploy with confidence using our integrated development environment 
                designed for modern full-stack applications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <MagneticButton 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  onClick={handleStartBuilding}
                >
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={handleViewDemo}
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Demo
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
                text="Powerful Development Features"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                Everything you need for professional full-stack development in one integrated platform.
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
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
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
                    Why Choose StackStudio?
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
              text="Ready to Transform Your Development Workflow?"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-8"
            />
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-body">
              Join thousands of developers who have accelerated their projects with StackStudio's powerful features.
            </p>
            <MagneticButton
              variant="outline"
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
              onClick={handleGetStarted}
            >
              Get Started Free
            </MagneticButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StackStudio;