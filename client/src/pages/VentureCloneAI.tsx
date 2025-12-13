import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, Brain, TrendingUp, Target, CheckCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Idea Generation",
    description: "Advanced machine learning algorithms analyze millions of successful businesses to generate unique, viable startup ideas tailored to your interests.",
  },
  {
    icon: Brain,
    title: "Market Intelligence",
    description: "Deep market analysis with competitive landscape mapping, target audience identification, and opportunity assessment using real-time data.",
  },
  {
    icon: TrendingUp,
    title: "Business Plan Creation",
    description: "Comprehensive business plans with financial projections, marketing strategies, and operational frameworks generated in minutes.",
  },
  {
    icon: Target,
    title: "Opportunity Scoring",
    description: "Proprietary scoring system that ranks business opportunities based on market potential, competition, and execution difficulty.",
  },
];

const benefits = [
  "AI-generated business ideas",
  "Market opportunity analysis",
  "Comprehensive business plans",
  "Competitive landscape mapping",
  "Financial projections",
  "Go-to-market strategies",
];

const VentureCloneAI = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-purple-500/5 pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <BlurInText
                text="VentureClone AI"
                className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary mb-6"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <BlurInText
                  text="AI-Powered Business Duplicator"
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
                VentureClone AI is a systematic business cloning platform that analyzes existing online businesses for clonability potential. The application helps entrepreneurs identify promising businesses to replicate by providing AI-powered analysis across multiple dimensions including technical complexity, market opportunity, competitive landscape, resource requirements, and time to market. Users can input URLs for analysis, receive detailed scoring and insights, and follow a structured 6-stage workflow from discovery through AI automation implementation.
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
                  onClick={() => window.open('https://VClone.online', '_blank')}
                >
                  see the demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                
                <Button variant="outline" size="xl">
                  View Success Stories
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
                text="Intelligence Meets Innovation"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                Harness the power of artificial intelligence to discover untapped market opportunities and validate business concepts.
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
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
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
                    Why Choose VentureClone AI?
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
              text="Ready to Discover Your Next Big Idea?"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-8"
            />
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-body">
              Join entrepreneurs worldwide who are turning AI-generated insights into successful ventures.
            </p>
            <MagneticButton
              variant="outline"
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Generating Ideas
            </MagneticButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VentureCloneAI;