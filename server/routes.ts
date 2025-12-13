import type { Express } from "express";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { Resend } from "resend";

export function registerRoutes(app: Express): void {
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
            from: "Realm 101 <onboarding@resend.dev>",
            to: [email],
            subject: "Welcome to Realm 101 - Your Developer Ecosystem Awaits",
            html: `
              <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background: linear-gradient(135deg, #333333 0%, #4D6A4D 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Realm 101!</h1>
                  <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">The Ultimate Developer Ecosystem</p>
                </div>
                
                <div style="background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">Hi ${firstName}!</h2>
                  
                  <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                    Thank you for joining our waitlist! We're excited to have you as part of the Realm 101 community.
                  </p>
                  
                  <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                    You're now on our exclusive early access list for our comprehensive development ecosystem that includes:
                  </p>
                  
                  <ul style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 30px; padding-left: 20px;">
                    <li style="margin-bottom: 8px;"><strong>StackStudio:</strong> Visual development platform</li>
                    <li style="margin-bottom: 8px;"><strong>Unbuilt:</strong> Project management for developers</li>
                    <li style="margin-bottom: 8px;"><strong>VentureClone AI:</strong> Business intelligence tools</li>
                    <li style="margin-bottom: 8px;"><strong>RepoRadar:</strong> Advanced code analytics</li>
                    <li style="margin-bottom: 8px;"><strong>StackFast:</strong> Rapid prototyping framework</li>
                  </ul>
                  
                  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                    <h3 style="color: #333333; margin: 0 0 10px 0; font-size: 18px;">What happens next?</h3>
                    <p style="color: #666666; font-size: 14px; margin: 0; line-height: 1.5;">
                      We'll be in touch soon with your early access credentials and onboarding guide. 
                      In the meantime, follow us on social media for the latest updates and developer tips.
                    </p>
                  </div>
                  
                  <p style="color: #666666; font-size: 14px; line-height: 1.6; margin-bottom: 0;">
                    Best regards,<br>
                    <strong>The Realm 101 Team</strong>
                  </p>
                </div>
                
                <div style="text-align: center; padding: 20px; color: #999999; font-size: 12px;">
                  <p style="margin: 0;">© 2024 Realm 101. All rights reserved.</p>
                  <p style="margin: 5px 0 0 0;">
                    If you have any questions, reply to this email or contact us at support@realm101.com
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
