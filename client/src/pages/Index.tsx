import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { SignUpDialog } from "@/components/forms/SignUpDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { motion } from "framer-motion";
import { ArrowRight, Blocks, Code2, Lightbulb, Users, Target, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@assets/brand-dna-1765653077322_(Medium)_1765657315308.jpeg";
import visionImage from "@assets/brand-dna-1765653316052_(Medium)_1765657315309.jpeg";
import officeImage from "@assets/brand-dna-1764712443658_(Medium)_1765657315307.jpeg";

const products = [
  {
    title: "StackStudio",
    description: "Our flagship development ecosystem. A unified platform bringing together tools for ideation, planning, building, and scaling your projects.",
    icon: Layers,
    link: "/stackstudio",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "C4-Studio",
    description: "AI-powered creative studio for multimedia generation, visual coding, and immersive development experiences.",
    icon: Code2,
    link: "/c4-studio",
    color: "from-furry-forest/20 to-furry-sage/20",
  },
  {
    title: "The WebKnot",
    description: "Component curation and web development tools designed to streamline your frontend workflow.",
    icon: Blocks,
    link: "/webknot",
    color: "from-furry-tan/20 to-furry-brown/20",
  },
  {
    title: "Aldebate",
    description: "AI-driven debate and discussion platform for exploring ideas, arguments, and collaborative thinking.",
    icon: Lightbulb,
    link: "/aldebate",
    color: "from-furry-sage/20 to-furry-forest/20",
  },
];

const values = [
  {
    icon: Target,
    title: "Accessible Innovation",
    description: "We believe powerful development tools should be available to everyone, from beginners taking their first steps to seasoned professionals pushing boundaries.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building together is better than building alone. Our ecosystem fosters collaboration, knowledge sharing, and mutual growth.",
  },
  {
    icon: Blocks,
    title: "Building Blocks Philosophy",
    description: "Like our signature furry blocks, great software is built piece by piece. We provide the blocks; you create the masterpiece.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Realm101 Furry Blocks"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <BlurInText
                text="Realm101"
                className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold text-white mb-4"
              />
              
              <motion.p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-6 font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Building the Future, Block by Block
              </motion.p>

              <motion.p
                className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-body leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                We create innovative development tools and ecosystems that make software creation accessible, 
                empowering, and enjoyable for builders at every level.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Link to="/stackstudio">
                  <MagneticButton variant="hero" size="xl" className="group">
                    Explore Our Ecosystem
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                </Link>
                
                <SignUpDialog>
                  <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Early Access
                  </Button>
                </SignUpDialog>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Realm101 is a technology company dedicated to democratizing software development. 
                  We believe that the best ideas can come from anywhere, and everyone deserves access 
                  to tools that help them bring their visions to life.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our signature "Furry Block" design philosophy represents our approach: building powerful, 
                  modular tools that are both approachable and professional. Each block represents a capability; 
                  together, they form complete solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From solo developers to enterprise teams, we're building the next generation of 
                  development ecosystems that grow with you.
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
                  src={officeImage}
                  alt="Realm101 Development Environment"
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
                text="Our Values"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we build
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-gradient-card shadow-premium border-0">
                      <CardHeader>
                        <div className="w-14 h-14 bg-gradient-to-br from-furry-forest to-furry-sage rounded-xl flex items-center justify-center mb-4">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-xl font-heading text-primary">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Our Product Ecosystem"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A suite of interconnected tools designed to support every stage of your development journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={product.link} className="block h-full">
                      <Card className="h-full bg-gradient-card shadow-premium border-0 transition-all duration-300 hover:shadow-glow group">
                        <CardHeader>
                          <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="text-2xl font-heading text-primary flex items-center gap-2">
                            {product.title}
                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground text-base leading-relaxed">
                            {product.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={visionImage}
              alt="Realm101 Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Vision
              </motion.h2>
              <motion.p
                className="text-xl text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We envision a world where anyone with an idea has the tools to build it. 
                Where development is not a barrier but a bridge. Where technology serves 
                creativity, and innovation is truly accessible to all.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <SignUpDialog>
                  <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white">
                    Join Our Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpDialog>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <BlurInText
                text="Get In Touch"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground mb-8">
                Have questions or want to collaborate? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <SignUpDialog>
                  <MagneticButton variant="hero" size="lg">
                    Contact Us
                  </MagneticButton>
                </SignUpDialog>
                <Link to="/stackstudio">
                  <Button variant="outline" size="lg">
                    Explore StackStudio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
