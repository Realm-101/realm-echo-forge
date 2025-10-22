import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurInText } from "@/components/interactive/BlurInText";
import { MagneticButton } from "@/components/interactive/MagneticButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Lightbulb, Workflow, Users2, Sparkles, Zap, Code, GitBranch, CheckCircle, ArrowRight, Target, Link2, LayoutDashboard } from "lucide-react";

const whyStackStudio = [
  {
    icon: Workflow,
    title: "Frictionless Workflow",
    description: "StackStudio brings together everything you need under one roof. Instead of losing time moving data between separate services, you'll have a continuous workflow from idea to deployment. Brainstorm an idea, design a tech stack, evaluate your codebase – all without leaving the platform.",
  },
  {
    icon: Link2,
    title: "Unified Ecosystem",
    description: "This platform is a comprehensive development ecosystem featuring tools like Unbuilt, VentureClone AI, RepoRadar, and StackFast. Each tool tackles a different stage of building a product, and StackStudio ties them together. The result is an all-in-one experience where tools share data and context.",
  },
  {
    icon: Users2,
    title: "Built for Everyone",
    description: "Whether you're a solo developer, a startup founder, or a whole team, StackStudio speaks your language. It's approachable for beginners and powerful for seasoned pros. We designed the vibe to be builder-casual and startup-energized – inclusive, motivating, and empowering for anyone with a vision.",
  },
];

const featuredTools = [
  {
    title: "Unbuilt",
    subtitle: "AI-Powered Opportunity Finder",
    description: "Find untapped market opportunities and innovation gaps using AI analysis. Unbuilt is like a tireless research team in your corner: it scans trends, consumer needs, and industry data to highlight 'the next big thing' that hasn't been built yet. Why guess what to build? Unbuilt shines a light on ideas grounded in real demand.",
    logoSrc: "/lovable-uploads/Logos/UNBUILT.png",
    features: ["Beta Phase", "Market Research", "AI Analysis"],
    link: "/unbuilt",
  },
  {
    title: "StackFast",
    subtitle: "AI Tech Stack Builder",
    description: "Design your tech stack in minutes instead of weeks. StackFast helps you discover the best AI development tools, analyze their compatibility, and instantly generate project blueprints. It takes the pain out of researching which frameworks, APIs, or databases work well together by providing data-driven recommendations and harmony scores.",
    logoSrc: "/lovable-uploads/Logos/Stackfast.png",
    features: ["Alpha Phase", "AI Compatibility", "Project Blueprints"],
    link: "/stackfast",
  },
  {
    title: "RepoRadar",
    subtitle: "Repository Intelligence, Simplified",
    description: "Evaluate open-source projects at a glance. Paste a GitHub link and get an AI-generated report on that repository's health and quality. RepoRadar pulls key metrics and uses AI to interpret what's behind the numbers. In seconds, you'll get a plain-English summary – no more digging through READMEs and commit histories.",
    logoSrc: "/lovable-uploads/Logos/Reporadar.png",
    features: ["Beta Phase", "GitHub Analysis", "AI Reports"],
    link: "/reporadar",
  },
  {
    title: "VentureClone AI",
    subtitle: "Business Cloning Simulator",
    description: "Ever wondered if you could recreate the success of another startup? VentureClone is an AI-driven platform that analyzes existing online businesses and shows you what it would take to 'clone' them. It breaks down tech stack, complexity, market, competition, and more, giving you a clonability score and roadmap for building a similar product.",
    logoSrc: "/lovable-uploads/Logos/VC2.png",
    features: ["Beta Phase", "Business Analysis", "Clone Potential"],
    link: "/ventureclone-ai",
  },
];

const roadmapItems = [
  {
    icon: Users2,
    title: "Unified Accounts (StackStudio ID)",
    description: "One account to rule them all. Soon you won't need separate logins for each tool – a single StackStudio ID will let you access Unbuilt, StackFast, RepoRadar, VentureClone, and any new apps to come. This shared account system means less hassle and a more cohesive experience across the board.",
  },
  {
    icon: GitBranch,
    title: "Seamless Project Handoff",
    description: "We're building bridges between tools so that your work can flow effortlessly. Imagine taking an idea you validated in Unbuilt and sending it directly into StackFast to generate a project blueprint, then pushing that into VentureClone for market simulation. No copy-pasting, no re-uploading – just a smooth hand-off.",
  },
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard & Insights",
    description: "Get the big picture of your projects and ideas in one place. We plan to introduce a StackStudio dashboard where you can see all your active ventures, stacks, and analyses at a glance. Track progress from idea to prototype to launch, with every insight right where you need it.",
  },
];

const faqs = [
  {
    question: "What exactly is StackStudio?",
    answer: "StackStudio is the unified platform for Realm101's developer tools suite. Think of it as an ecosystem or 'studio' that hosts multiple apps (like Unbuilt, StackFast, etc.) under one roof. Instead of each tool being isolated, StackStudio ties them together with a common vision: to make software development an accessible, empowering journey for everyone.",
  },
  {
    question: "Which tools are part of StackStudio?",
    answer: "Currently, StackStudio includes four key apps: Unbuilt (for opportunity discovery), StackFast (for tech stack design and project blueprints), RepoRadar (for repository intelligence and open-source evaluation), and VentureClone AI (for simulating and planning business ventures). Each tool can be used individually, but together they cover a wide spectrum of the startup/development lifecycle.",
  },
  {
    question: "Do I need to use all the tools, or can I pick just one?",
    answer: "You're free to use any StackStudio app on its own. Each product is valuable as a standalone service. However, the real magic shines when you use them together. StackStudio is designed so that the whole is greater than the sum of its parts – data and outputs from one tool can enhance the next. But it's totally up to you.",
  },
  {
    question: "Who is StackStudio for? Do I have to be a developer to use it?",
    answer: "StackStudio is built for builders of all stripes. We welcome startup founders, solo developers, indie hackers, product managers, students – anyone eager to innovate. You don't need to be an expert coder to get value here. Unbuilt can help non-technical founders validate ideas, and StackFast's recommendations can guide you even if you're new to designing architectures. That said, experienced developers will also feel at home – the tools are powerful and not dumbed down.",
  },
  {
    question: "Is StackStudio available now? How do I access it?",
    answer: "All StackStudio apps are currently in alpha/beta stages. Some (like StackFast and RepoRadar) are open to try right away, while others might have waitlists or invite-only betas. The best way to start is to try out the individual tools via their websites or sign-up pages. Sign up for our newsletter to get updates on new releases and integration milestones.",
  },
  {
    question: "What does StackStudio cost?",
    answer: "Right now, during these early beta phases, most of our tools are free to use – we're focused on getting feedback and improving them. In the long run, we anticipate a mix of free and paid plans. Our philosophy is to keep things accessible: individuals and small startups should be able to use the core features without barriers, and larger organizations can opt for premium support or advanced capabilities as needed.",
  },
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
                  text="Where Ideas Become Products"
                  className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 font-body leading-relaxed"
                  delay={0.3}
                />
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                StackStudio unifies your favorite developer tools into one seamless platform, taking you from first spark to final product without the usual friction. 
                It's like a playground of building blocks for creators – brainstorm, plan, build, and scale in one place, at startup speed. 
                No more juggling logins or jumping between siloed apps.
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
                  <Sparkles className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why StackStudio Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Why StackStudio?"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                Turning an idea into a successful product is hard enough – your tools shouldn't get in the way. 
                StackStudio's mission is to reduce the friction between ideation, planning, execution, and growth by connecting every step of your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyStackStudio.map((item, index) => {
                const IconComponent = item.icon;
                
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl font-heading text-primary">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Featured Tools in the StackStudio Suite"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                StackStudio isn't just one app – it's a growing suite of purpose-built tools that already supercharge different parts of the creator journey. 
                Each is powerful on its own, and together they're even better.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredTools.map((tool, index) => {
                return (
                  <motion.div
                    key={tool.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 border-0">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-blue-400/20 via-purple-500/30 to-indigo-600/25 backdrop-blur-sm border border-white/20 shadow-lg relative overflow-hidden flex items-center justify-center p-2 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-emerald-400/10 before:via-transparent before:to-rose-400/10 after:absolute after:inset-0 after:bg-gradient-to-bl after:from-yellow-300/15 after:via-transparent after:to-cyan-400/15">
                            <img 
                              src={tool.logoSrc} 
                              alt={`${tool.title} logo`}
                              className="w-full h-full object-contain relative z-10"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-heading text-primary">
                              {tool.title}
                            </CardTitle>
                            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-body">
                              {tool.title === "StackFast" ? "Alpha Phase" : "Beta Phase"}
                            </span>
                          </div>
                        </div>
                        <CardDescription className="text-sm font-semibold text-accent mb-2">
                          {tool.subtitle}
                        </CardDescription>
                        <CardDescription className="text-muted-foreground font-body leading-relaxed">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {tool.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-body"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {/* CTA Button */}
                        <Button
                          variant="default"
                          className="w-full group"
                          asChild
                        >
                          <a href={tool.link}>
                            Explore
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground font-body italic">
                …and this is just the beginning. All our tools are currently in active development (Alpha phase), 
                and while each can be used on its own, StackStudio is where they come together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Roadmap – What's Next for StackStudio"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                We don't believe in rigid timelines for innovation, but we do have clear themes we're working towards 
                to make StackStudio truly feel like one product. Here's a peek at what's on the horizon:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {roadmapItems.map((item, index) => {
                const IconComponent = item.icon;
                
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-gradient-card shadow-premium border-0">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-lg font-heading text-primary">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-body leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurInText
                text="Frequently Asked Questions"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-heading text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Ready to Build?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-body">
                Join us in the StackStudio journey. If you're excited by the vision of a unified builder platform, 
                now's the perfect time to jump in.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white font-heading text-lg">Try the Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm font-body">
                      Generate a tech stack on StackFast, analyze a project with RepoRadar, 
                      or see what Unbuilt uncovers. It's free to explore.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white font-heading text-lg">Get Early Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm font-body">
                      Sign up for updates or beta programs. You'll get notified about new features 
                      and when the full StackStudio experience launches.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white font-heading text-lg">Explore the Ecosystem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm font-body">
                      Check out our mission and each tool. Join the growing community of builders 
                      gathering around StackStudio.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <MagneticButton
                variant="outline"
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
                onClick={handleGetStarted}
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StackStudio;