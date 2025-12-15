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
    title: "AI-Powered Market Research",
    description: "Unbuilt uses cutting-edge AI to scan thousands of data points – from emerging technology trends to consumer pain points – and identifies gaps where no one has built a solution yet. It's like an innovation radar, constantly highlighting unmet needs and nascent demand.",
  },
  {
    icon: CheckCircle,
    title: "Idea Validation & Scoring",
    description: "For every opportunity Unbuilt finds, it provides context and data. You'll see why this gap matters – whether it's a rapidly growing user group with a problem, a region lacking a service, or a trend indicating future demand.",
  },
  {
    icon: Rocket,
    title: "Time Saver for Visionaries",
    description: "Instead of spending months on market research, get insights in minutes. Unbuilt condenses market analysis into an easy dashboard, so you can quickly decide if an idea is worth pursuing.",
  },
  {
    icon: Palette,
    title: "Customized for Your Interests",
    description: "Tell Unbuilt the domains or industries you care about – be it fintech, green energy, education, or any niche – and it will tailor its analysis to those areas. You'll receive personalized opportunity digests focusing on what matters to you.",
  },
  {
    icon: Layout,
    title: "Data-Backed Storytelling",
    description: "When you do find an idea you love, Unbuilt helps you tell the story behind the opportunity. Get auto-generated briefs with key stats, trends, and supporting evidence that you can use in pitch decks or discussions.",
  },
  {
    icon: Zap,
    title: "Seamless StackStudio Integration",
    description: "Coming soon: Unbuilt is one of the first apps in the StackStudio ecosystem by Realm101. Imagine discovering a great idea on Unbuilt and then sending it to StackFast to generate a project blueprint instantly.",
  },
];

const audienceSegments = [
  {
    title: "Entrepreneurs & Startup Founders",
    description: "If you're an entrepreneur (seasoned or aspiring), Unbuilt is your idea generation wingman. It helps you find viable problems worth solving before you invest time and money. Identify underserved markets, get inspiration for pivots, or validate that the world truly needs your product vision.",
  },
  {
    title: "Investors & VCs",
    description: "For investors, Unbuilt acts as an opportunity radar. It can uncover emerging trends and whitespace in various industries, helping you spot the next disruptive startup opportunities before they boom.",
  },
  {
    title: "Developers & Makers",
    description: "You love building things – Unbuilt shows you what to build next. For developers, hackers, and indie makers, it's a wellspring of project ideas that are grounded in real demand.",
  },
  {
    title: "Students & Future Founders",
    description: "Curious about startups or want to practice solving real-world problems? Students can use Unbuilt to learn what makes a strong business idea. Today's students are tomorrow's founders and innovators.",
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
                  text="AI-Powered Opportunity Finder"
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
                Find untapped market opportunities and innovation gaps using AI-powered analysis.
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
                  onClick={() => window.open('https://Unbuilt.one', '_blank', 'noopener,noreferrer')}
                  data-testid="button-join-beta"
                >
                  Join Beta Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                
                <Button variant="outline" size="xl" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} data-testid="button-learn-more">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5" id="features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Unbuilt is a new AI-driven platform that helps you discover "the next big thing" before everyone else. In a world where countless ideas are still unbuilt, our mission is to shine a light on the gaps in the market so entrepreneurs and innovators can fill them. We leverage advanced artificial intelligence to analyze trends, consumer needs, and industry data – giving you insight into opportunities that have high potential but remain overlooked.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  <strong>Why is this important?</strong> According to research, <a href="https://medium.com/@tsttechnology/the-hard-truth-behind-why-42-of-startups-fail-ae4d9abe738c" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">42% of startups fail because they build products with no market need</a>. Unbuilt aims to change that by ensuring your next venture is grounded in real demand and evidence.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  We built Unbuilt with a founder's mentality – casual, user-friendly, but supercharged with startup energy. It's like having a tireless research team and strategic advisor in your corner. Whether you're brainstorming your first startup or scouting for the next investment, Unbuilt will help you validate ideas faster, uncover hidden niches, and stay ahead of the curve. Best of all, you don't need a PhD in market research to use it – simply ask questions or explore themes, and let our AI do the heavy lifting in the background.
                </p>
              </motion.div>
            </div>

            {/* Key Features */}
            <div className="text-center mb-16">
              <BlurInText
                text="Key Features & Benefits"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
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
                    <Card className="h-full bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0" data-testid={`card-feature-${feature.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
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
          </div>
        </section>

        {/* Who Should Use Unbuilt */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Who Should Use Unbuilt?"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {audienceSegments.map((segment, index) => (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-card shadow-premium border-0" data-testid={`card-audience-${segment.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <CardHeader>
                      <CardTitle className="text-xl font-heading text-primary">
                        {segment.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        {segment.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Does Unbuilt Work */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <BlurInText
                  text="How Does Unbuilt Work?"
                  className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-foreground leading-relaxed">
                  Unbuilt combines AI-powered analysis with vast amounts of data to find what others have missed. Under the hood, it crawls a variety of sources – think industry reports, forums, startup databases, tech news, patent filings, web trends – and then our algorithms identify patterns and gaps.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Using Unbuilt is simple: you might start by entering a broad topic or question (e.g., "education technology" or "problems remote workers face"). Unbuilt will then present you with a dashboard of findings – charts, opportunity cards, trend curves, and AI-written summaries explaining potential ideas.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  You can drill down into each suggestion to see why the AI thinks this is an opportunity – maybe it will show growth in Google searches for a workaround solution, or lack of competition in that niche, or demographic data indicating rising demand. Our goal is to give you actionable understanding.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Importantly, <strong>privacy and security are built in</strong>. Your queries and exploration on Unbuilt are kept confidential. We know early ideas are fragile and proprietary, so we ensure that anything you search for or save is visible only to you.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Beta Access & Early Community */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <BlurInText
                text="Beta Access & Early Community"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-8"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 mb-12"
              >
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Unbuilt is currently in closed beta, and we're incredibly excited to onboard our first wave of users. Beta users will get exclusive early access to all of Unbuilt's features for free, in exchange for feedback and ideas. We want to learn from you – what hits, what misses, and what new features you'd love to see.
                </p>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Interested in joining the beta? Sign up for the waitlist on our website and tell us a bit about yourself. Early adopters like you will help us stress-test the system with real-world questions and ensure that the insights Unbuilt provides are truly valuable. Plus, as a beta tester, you'll have direct channels to the team where you can share feedback, ask questions, and interact with the founder in a casual, startup-energized atmosphere.
                </p>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  <strong>Why join now?</strong> Being an early user means you get to influence the roadmap. If there's a feature you need or an industry you think we should cover, we're all ears.
                </p>
              </motion.div>

              <MagneticButton
                variant="outline"
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://Unbuilt.one', '_blank', 'noopener,noreferrer')}
                data-testid="button-join-beta-cta"
              >
                Join the Beta Waitlist
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <BlurInText
                  text="Frequently Asked Questions"
                  className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">What exactly is Unbuilt?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Unbuilt is an AI-powered platform that finds business ideas and market gaps that are currently "unbuilt" – in other words, valuable opportunities that no one has taken advantage of yet. It's like having an automated research analyst and strategist in your browser.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">How is Unbuilt different from simply Googling or using ChatGPT?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Unlike a generic search or chat AI, Unbuilt does deep specialized analysis. It combines AI with real data sources to surface opportunities that aren't obvious. It doesn't just invent ideas; it finds evidence of real problems and gaps, then presents those as suggestions grounded in facts and trends.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">Who is behind Unbuilt?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Unbuilt is being developed by Realm101, a startup dedicated to building an ecosystem of tools for innovators. We're a small, agile team with a passion for empowering other builders. Unbuilt is one of the first apps in our StackStudio platform, alongside StackFast, RepoRadar, and VentureClone AI.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">Is Unbuilt free? Will it stay free?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">During the beta period, Unbuilt is completely free to use. In the future, there will likely be a pricing model with a free tier for basic features and paid plans for power users. Beta contributors will be recognized and rewarded with extended free access or special discounts.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">Will Unbuilt's AI give the same ideas to everyone?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">While there may be some "big obvious gaps" that many users see, Unbuilt personalizes and diversifies results based on your interests and parameters. The world of opportunities is immense, and our AI dynamically analyzes data to keep discovering new angles. Plus, execution is what counts – every founder has a unique take.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">I'm concerned about sharing my business idea. Is it safe?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We take privacy and security seriously. Your exploration and saved ideas are private to you. We don't share your specific project interests with other users. Your interaction with opportunities is not exposed to others, and you control your ideas.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <BlurInText
                  text="Roadmap"
                  className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
                />
                <p className="text-lg text-muted-foreground">Our journey from beta to becoming an indispensable innovation platform</p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl font-heading text-primary">Late 2025 – Beta Launch (Current Phase)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Core features live including AI opportunity discovery, basic dashboards, and personalized recommendations. Focus on onboarding beta users, gathering feedback, and polishing the user experience.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl font-heading text-primary">Early 2026 – Public Beta Expansion</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Opening to more users with improved AI accuracy, friendlier onboarding, social login, collaboration features, and in-app feedback mechanisms. Testing scalability and adding "trend of the week" highlights.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-300 to-teal-400 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl font-heading text-primary">Mid 2026 – Full Launch (v1.0)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Official launch with refined UI, saved searches & alerts, exportable reports, and deep StackStudio integration. Seamlessly push ideas to StackFast for tech stack planning. Initial pricing model introduced.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-premium border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-teal-300 rounded-full flex items-center justify-center">
                        <Layout className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl font-heading text-primary">Late 2026 and Beyond – Growth & Ecosystem</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Enhanced AI learning, real-time integrations with Product Hunt and Google Trends, community features, expert analyses, and comprehensive StackStudio hub where ideas flow from discovery through launch with AI assistance at every step.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurInText
              text="Ready to Discover the Next Big Thing?"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-8"
            />
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-body">
              Join us on this journey and be part of the Unbuilt story. The future is full of unbuilt ideas… let's build them together!
            </p>
            <MagneticButton
              variant="outline"
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://Unbuilt.one', '_blank', 'noopener,noreferrer')}
            >
              Join the Beta Waitlist
            </MagneticButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Unbuilt;