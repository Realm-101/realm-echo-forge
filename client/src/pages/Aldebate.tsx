import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { SignUpDialog } from "@/components/forms/SignUpDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Brain, Users, Lightbulb, Scale, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import aldebateImage from "@assets/AIdebate-infographic-2d (Medium).jpeg";

const features = [
  {
    title: "AI-Powered Debate Partners",
    description: "Engage with intelligent AI agents that can argue any position, helping you explore ideas from multiple perspectives.",
    icon: Brain,
  },
  {
    title: "Structured Discussions",
    description: "Follow proven debate formats or create your own. Track arguments, rebuttals, and conclusions in an organized way.",
    icon: MessageSquare,
  },
  {
    title: "Collaborative Thinking",
    description: "Invite team members to join discussions. Build consensus through structured dialogue and argument mapping.",
    icon: Users,
  },
  {
    title: "Idea Exploration",
    description: "Use debate as a tool for innovation. Challenge assumptions and discover new insights through dialectical thinking.",
    icon: Lightbulb,
  },
];

const Aldebate = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-furry-sage via-furry-forest to-furry-brown">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background/80" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <BlurInText
                text="Aldebate"
                className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-4"
              />
              
              <motion.p
                className="text-xl sm:text-2xl text-white/90 mb-6 font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                AI-Driven Debate & Discussion Platform
              </motion.p>

              <motion.p
                className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-body leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Explore ideas, challenge assumptions, and refine your thinking through structured 
                debates with AI and human collaborators.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <SignUpDialog>
                  <MagneticButton variant="hero" size="xl" className="group" data-testid="button-early-access">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Early Access
                  </MagneticButton>
                </SignUpDialog>
                
                <Link to="/" data-testid="link-learn-more">
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
                <div className="inline-flex items-center gap-2 bg-furry-sage/20 text-furry-forest px-4 py-2 rounded-full mb-6">
                  <Scale className="w-4 h-4" />
                  <span className="text-sm font-medium">The Power of Debate</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                  Think Deeper. Decide Better.
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Aldebate transforms how you explore ideas. Whether you're making business decisions, 
                  exploring philosophical questions, or simply trying to understand different perspectives, 
                  our AI-powered platform helps you think more clearly.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Engage with AI debate partners that can argue any position intelligently, 
                  helping you stress-test your ideas and discover blind spots in your thinking.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={aldebateImage}
                  alt="Aldebate Platform"
                  className="w-full h-auto rounded-2xl shadow-premium"
                />
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
                Tools designed to enhance your critical thinking
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
                    <Card className="h-full bg-gradient-card shadow-premium border-0" data-testid={`card-feature-${feature.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      <CardHeader>
                        <div className="w-14 h-14 bg-gradient-to-br from-furry-sage to-furry-forest rounded-xl flex items-center justify-center mb-4">
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
                text="Ready to Debate?"
                className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground mb-8">
                Join the waitlist and be among the first to experience AI-powered discussions.
              </p>
              <SignUpDialog>
                <MagneticButton variant="hero" size="lg" data-testid="button-join-waitlist">
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

export default Aldebate;
