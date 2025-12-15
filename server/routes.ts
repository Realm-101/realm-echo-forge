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
            subject: "Welcome to Realm 101 – Your Developer Ecosystem Awaits",
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d4d2d 100%); padding: 40px 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold; letter-spacing: -0.5px;">Welcome to Realm 101</h1>
                  <p style="color: rgba(255,255,255,0.85); margin: 12px 0 0 0; font-size: 16px; font-weight: 500;">Your Developer Ecosystem Awaits</p>
                </div>
                
                <div style="background: #ffffff; padding: 40px 30px;">
                  <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                    Hi ${firstName},
                  </p>
                  
                  <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                    Welcome to Realm 101! We're thrilled to have you joining our growing community of innovative developers. You've just unlocked early access to our comprehensive development ecosystem.
                  </p>
                  
                  <div style="background: #f5f5f5; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
                    <p style="color: #1a1a1a; font-size: 14px; font-weight: 600; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.5px;">Your Early Access Includes:</p>
                    
                    <div style="margin-bottom: 12px;">
                      <p style="color: #1a1a1a; font-size: 15px; font-weight: 600; margin: 0 0 4px 0;">StackStudio</p>
                      <p style="color: #666666; font-size: 14px; margin: 0;">Visual development platform for rapid prototyping</p>
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                      <p style="color: #1a1a1a; font-size: 15px; font-weight: 600; margin: 0 0 4px 0;">C4-Studio</p>
                      <p style="color: #666666; font-size: 14px; margin: 0;">AI-powered creative studio for multimedia generation</p>
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                      <p style="color: #1a1a1a; font-size: 15px; font-weight: 600; margin: 0 0 4px 0;">The WebKnot</p>
                      <p style="color: #666666; font-size: 14px; margin: 0;">Component curation and frontend optimization</p>
                    </div>
                    
                    <div>
                      <p style="color: #1a1a1a; font-size: 15px; font-weight: 600; margin: 0 0 4px 0;">And more coming soon</p>
                      <p style="color: #666666; font-size: 14px; margin: 0;">Advanced tools for every stage of your development journey</p>
                    </div>
                  </div>
                  
                  <div style="border-left: 4px solid #4D6A4D; padding: 20px; background: #f9fbf9; margin-bottom: 24px;">
                    <h3 style="color: #1a1a1a; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">What's Next?</h3>
                    <p style="color: #666666; font-size: 14px; margin: 0; line-height: 1.6;">
                      We'll be in touch within 48 hours with your early access credentials and a detailed onboarding guide. In the meantime, explore our ecosystem at <strong>realm101.dev</strong> and stay tuned for updates.
                    </p>
                  </div>
                  
                  <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin: 0;">
                    Build boldly,<br>
                    <strong style="color: #1a1a1a;">The Realm 101 Team</strong>
                  </p>
                </div>
                
                <div style="background: #f5f5f5; padding: 24px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                  <p style="color: #999999; font-size: 12px; margin: 0 0 8px 0;">© 2024 Realm 101. All rights reserved.</p>
                  <p style="color: #999999; font-size: 12px; margin: 0;">
                    Questions? Reply to this email or contact us at support@realm101.com
                  </p>
                </div>
              </div>
            `,
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
