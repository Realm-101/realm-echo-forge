import type { Express } from "express";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { Resend } from "resend";

export function registerRoutes(app: Express): void {
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = process.env.BASE_URL || "https://realm101.dev";
    
    const pages = [
      { url: "/", priority: "1.0", changefreq: "weekly" },
      { url: "/stackstudio", priority: "0.9", changefreq: "monthly" },
      { url: "/c4-studio", priority: "0.9", changefreq: "monthly" },
      { url: "/webknot", priority: "0.9", changefreq: "monthly" },
      { url: "/aldebate", priority: "0.9", changefreq: "monthly" },
      { url: "/unbuilt", priority: "0.9", changefreq: "monthly" },
      { url: "/ventureclone-ai", priority: "0.9", changefreq: "monthly" },
      { url: "/reporadar", priority: "0.9", changefreq: "monthly" },
      { url: "/stackfast", priority: "0.9", changefreq: "monthly" },
      { url: "/privacy", priority: "0.5", changefreq: "yearly" },
      { url: "/terms", priority: "0.5", changefreq: "yearly" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

    res.type("application/xml");
    res.send(sitemap);
  });

  app.get("/robots.txt", (req, res) => {
    const baseUrl = process.env.BASE_URL || "https://realm101.dev";
    
    const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

    res.type("text/plain");
    res.send(robots);
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const parseResult = insertLeadSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: parseResult.error.issues 
        });
      }

      const { firstName, lastName, email, company } = parseResult.data;

      const existingLead = await storage.getLeadByEmail(email);
      if (existingLead) {
        return res.status(409).json({ 
          error: "Already signed up",
          message: "This email is already on our waitlist. We'll be in touch soon!"
        });
      }

      const lead = await storage.createLead({ firstName, lastName, email, company });

      if (process.env.RESEND_API_KEY) {
        try {
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({
            from: "Realm 101 <register@beta.realm101.com>",
            to: [email],
            template: "stackstudio",
            props: {
              firstName,
              lastName,
              email,
              company,
            },
          });
        } catch (emailError) {
          console.error("Error sending confirmation email:", emailError);
        }
      }

      return res.status(201).json({ 
        success: true, 
        message: "Welcome to Realm 101!"
      });
    } catch (error) {
      console.error("Error creating lead:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
}
