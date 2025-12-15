import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { 
  Radar, Shield, Zap, AlertTriangle, Search, GitCompare, 
  FileText, Users, TrendingUp, Code, Target, ArrowRight, 
  CheckCircle, Activity, Bell, Clock
} from "lucide-react";

const RepoRadar = () => {
  const coreMetrics = [
    {
      icon: Activity,
      title: "Health",
      description: "Overall stability and maintenance quality."
    },
    {
      icon: Zap,
      title: "Velocity",
      description: "Release/merge cadence and responsiveness."
    },
    {
      icon: AlertTriangle,
      title: "Risk",
      description: "Bus factor + single-maintainer risk and archival signals."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Dependency freshness and known vulnerabilities."
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Actionable AI Report",
      description: "A clear summary with why the score is what it is and practical next steps.",
      image: "/lovable-uploads/Reporadar/analyze.png"
    },
    {
      icon: Code,
      title: "Batch Analysis",
      description: "Evaluate multiple repos at once. Filter, sort, and export your results.",
      image: "/lovable-uploads/Reporadar/compare.png"
    },
    {
      icon: Search,
      title: "Discovery & Similar Repos",
      description: "Find look-alikes by functionality or stack. Spot up-and-coming projects.",
      image: "/lovable-uploads/Reporadar/search.png"
    },
    {
      icon: GitCompare,
      title: "Compare & Decide",
      description: "Side-by-side comparisons to choose dependencies, libraries, or forks with confidence.",
      image: "/lovable-uploads/Reporadar/compare.png"
    },
    {
      icon: FileText,
      title: "Exports & Sharing",
      description: "PDF/CSV reports your team, stakeholders, or clients can read in minutes.",
      image: "/lovable-uploads/Reporadar/analyze.png"
    },
    {
      icon: Bell,
      title: "Alerts (Coming Soon)",
      description: "Be the first to know when a repo trends, stalls, or gets a new security issue.",
      image: "/lovable-uploads/Reporadar/search.png"
    }
  ];

  const useCases = [
    {
      icon: Code,
      title: "Developers",
      benefits: [
        "Pick dependencies, avoid dead projects",
        "Find alternatives fast",
        "Get summaries, not spelunking"
      ]
    },
    {
      icon: Users,
      title: "Team Leads & CTOs",
      benefits: [
        "Track repo health across your stack",
        "Reduce maintenance risk",
        "Clear priority lists for your team"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investors",
      benefits: [
        "Fast open-source diligence",
        "Spot momentum and risks",
        "Export investor-ready reports"
      ]
    },
    {
      icon: Target,
      title: "Recruiters",
      benefits: [
        "Evaluate candidates' portfolios",
        "See activity and quality signals",
        "Beyond surface-level star counts"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      features: [
        "5 analyses/month",
        "Basic report",
        "Discovery features",
        "Community support"
      ],
      cta: "Start Free",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited analyses",
        "Batch + exports",
        "Compare repos",
        "Similar repos",
        "Alerts (coming soon)",
        "Priority support"
      ],
      cta: "Start Pro",
      highlighted: true
    },
    {
      name: "Team",
      price: "Custom",
      features: [
        "Everything in Pro",
        "Org dashboards",
        "SSO integration",
        "API access (soon)",
        "Dedicated support"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "Do you analyze private repos?",
      answer: "Planned via GitHub App (coming soon). Today we focus on public repos to provide the most comprehensive analysis."
    },
    {
      question: "How do you score repos?",
      answer: "A weighted mix of real signals (issues, PRs, releases, deps). We show the why, not just a number, so you understand the complete picture."
    },
    {
      question: "Do you store code?",
      answer: "No. We analyze metadata and signals; for deep code review (opt-in), we cache only what's required and purge per policy."
    },
    {
      question: "Can I export reports?",
      answer: "Yes—PDF and CSV formats. Team tier adds org dashboards for comprehensive tracking across your entire tech stack."
    }
  ];

  return (
    <div className="min-h-screen font-body">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/10 pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <img 
                  src="/lovable-uploads/Reporadar/Reporadar (Medium).png"
                  alt="RepoRadar"
                  className="w-32 h-32 mx-auto mb-6 object-contain"
                />
              </motion.div>

              <BlurInText
                text="Know a repo in 60 seconds"
                className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary mb-6"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
                  AI repo intelligence. From GitHub stats to real decisions.
                </p>
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                RepoRadar turns GitHub repos into <strong>actionable intelligence</strong>—health, velocity, risk, and security—so you can decide in minutes, not days.
                <br /><br />
                Paste a GitHub URL. Get a clear, AI-backed report with scores, trends, and concrete recommendations.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
              <MagneticButton 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://reporadar.online/', '_blank')}
                data-testid="button-start-analysis"
              >
                  Start Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                
                <Button variant="outline" size="xl" data-testid="button-watch-demo">
                  Watch Demo
                </Button>
              </motion.div>

              <motion.p
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                We don't dump stats. We explain what they mean and what to do next.
              </motion.p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="How It Works"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Three simple steps to comprehensive repository intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Paste a GitHub URL", desc: "Search by keywords or paste any public repo URL" },
                { step: "2", title: "AI Analyzes", desc: "We fetch repo signals and apply our scoring model" },
                { step: "3", title: "Get Clear Report", desc: "Scores, trends, and specific recommendations" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="h-full bg-gradient-card shadow-premium border-0 text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                        {item.step}
                      </div>
                      <CardTitle className="text-xl font-heading text-primary">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-body">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Metrics */}
        <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="What the Scores Mean"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Four key metrics that give you the complete picture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {coreMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                
                return (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0 text-center">
                      <CardHeader>
                        <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-xl font-heading text-primary">
                          {metric.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-body text-sm leading-relaxed">
                          {metric.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Powerful Features"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Everything you need to make confident decisions about repositories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Card className="h-full bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0 overflow-hidden group">
                      <div className="relative h-48 bg-accent/10 flex items-center justify-center overflow-hidden">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center mb-4">
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
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Built For Everyone"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether you're building, managing, investing, or hiring
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon;
                
                return (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-gradient-card shadow-premium border-0">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-2xl font-heading text-primary">
                            {useCase.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {useCase.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground font-body">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Simple, Transparent Pricing"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Start free, scale as you grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={tier.highlighted ? "md:-mt-4" : ""}
                >
                  <Card className={`h-full ${tier.highlighted ? 'bg-gradient-to-br from-accent to-accent/80 text-white shadow-glow scale-105' : 'bg-gradient-card shadow-premium'} border-0 relative`}>
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className={`text-2xl font-heading ${tier.highlighted ? 'text-white' : 'text-primary'} mb-4`}>
                        {tier.name}
                      </CardTitle>
                      <div className="mb-6">
                        <span className={`text-5xl font-bold ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                          {tier.price}
                        </span>
                        {tier.period && (
                          <span className={`text-lg ${tier.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                            {tier.period}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 ${tier.highlighted ? 'text-white' : 'text-accent'} flex-shrink-0 mt-0.5`} />
                            <span className={`font-body ${tier.highlighted ? 'text-white' : 'text-muted-foreground'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant={tier.highlighted ? "outline" : "default"}
                        className={`w-full ${tier.highlighted ? 'bg-white text-accent hover:bg-white/90' : ''}`}
                        size="lg"
                        data-testid={`button-pricing-${tier.name.toLowerCase()}`}
                      >
                        {tier.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Frequently Asked Questions"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about RepoRadar
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Card className="bg-gradient-card shadow-premium border-0">
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-heading text-lg text-primary hover:text-accent">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BlurInText
                text="Ready to Get Started?"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-8"
              />
              <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-body leading-relaxed">
                Transform confusing metrics into clear, actionable intelligence. Start analyzing repositories in minutes, not days.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white text-accent hover:bg-white/90 border-0 shadow-premium"
                  onClick={() => window.open('https://reporadar.online/', '_blank')}
                >
                  Start Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Contact Sales
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/80">
                Free tier: 5 analyses/month • No credit card required
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RepoRadar;