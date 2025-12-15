import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Rocket, Clock, Bell, Mail } from "lucide-react";

const StackFast = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-gray-500/5 pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <BlurInText
                text="StackFast"
                className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary mb-6"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <BlurInText
                  text="Coming Soon"
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
                Revolutionary development acceleration platform for lightning-fast project delivery. 
                The future of rapid development is almost here.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <MagneticButton variant="outline" size="xl" className="group" data-testid="button-notify">
                  <Bell className="mr-2 h-5 w-5" />
                  Notify Me
                </MagneticButton>
                
                <Button variant="ghost" size="xl" data-testid="button-join-waitlist">
                  <Mail className="mr-2 h-5 w-5" />
                  Join Waitlist
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coming Soon Features */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="What's Coming"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                StackFast will revolutionize how you build applications with unprecedented speed and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading text-primary">
                      Lightning Speed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      Build applications 10x faster with revolutionary automation and intelligent code generation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading text-primary">
                      Zero Setup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      Start building immediately with pre-configured environments and intelligent project scaffolding.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Bell className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading text-primary">
                      Smart Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      AI-powered automation that learns from your patterns and anticipates your needs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Waitlist CTA */}
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-card shadow-premium border-0">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    Be Among the First
                  </h3>
                  <p className="text-muted-foreground font-body mb-6">
                    Join our exclusive waitlist and get early access to StackFast when it launches. 
                    Plus, receive special launch pricing and bonus features.
                  </p>
                  <MagneticButton variant="hero" size="lg" className="w-full sm:w-auto" data-testid="button-waitlist-cta">
                    Join the Waitlist
                  </MagneticButton>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurInText
              text="Launch Timeline"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-12"
            />
            
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent font-heading mb-2">Q1</div>
                  <div className="text-lg font-semibold text-primary font-heading mb-2">2024</div>
                  <div className="text-muted-foreground font-body">Beta Access</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent font-heading mb-2">Q2</div>
                  <div className="text-lg font-semibold text-primary font-heading mb-2">2024</div>
                  <div className="text-muted-foreground font-body">Public Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent font-heading mb-2">Q3</div>
                  <div className="text-lg font-semibold text-primary font-heading mb-2">2024</div>
                  <div className="text-muted-foreground font-body">Enterprise Features</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StackFast;