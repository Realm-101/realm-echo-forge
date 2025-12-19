import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation helpers
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

function isValidName(name: string): boolean {
  // Allow letters, spaces, hyphens, apostrophes - common in names
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  return nameRegex.test(name) && name.length >= 1 && name.length <= 100;
}

function isValidCompany(company: string | undefined): boolean {
  if (!company) return true; // Optional field
  return company.length <= 200;
}

// HTML escaping to prevent XSS in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface ConfirmationEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authorization header exists (Supabase anon key)
    const authHeader = req.headers.get("authorization");
    const apiKeyHeader = req.headers.get("apikey");
    
    if (!authHeader && !apiKeyHeader) {
      console.error("Missing authorization: no auth header or apikey provided");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const body = await req.json();
    const { firstName, lastName, email, company }: ConfirmationEmailRequest = body;

    // Input validation
    if (!firstName || typeof firstName !== "string" || !isValidName(firstName)) {
      console.error("Invalid firstName:", firstName);
      return new Response(
        JSON.stringify({ error: "Invalid first name provided" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!lastName || typeof lastName !== "string" || !isValidName(lastName)) {
      console.error("Invalid lastName:", lastName);
      return new Response(
        JSON.stringify({ error: "Invalid last name provided" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      console.error("Invalid email:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email address provided" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!isValidCompany(company)) {
      console.error("Invalid company:", company);
      return new Response(
        JSON.stringify({ error: "Invalid company name provided" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize inputs for HTML email content
    const safeFirstName = escapeHtml(firstName.trim());
    const safeLastName = escapeHtml(lastName.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = company ? escapeHtml(company.trim()) : undefined;

    console.log("Sending confirmation email to:", safeEmail);

    const emailResponse = await resend.emails.send({
      from: "Realm 101 <onboarding@resend.dev>",
      to: [email.trim()], // Use validated but not HTML-escaped email for actual sending
      subject: "Welcome to Realm 101 - Your Developer Ecosystem Awaits",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #333333 0%, #4D6A4D 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Realm 101!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">The Ultimate Developer Ecosystem</p>
          </div>
          
          <div style="background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">Hi ${safeFirstName}!</h2>
            
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
            <p style="margin: 0;">&copy; 2024 Realm 101. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;">
              If you have any questions, reply to this email or contact us at support@realm101.com
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    // Log detailed error for debugging, but return generic message to client
    console.error("Error in send-confirmation-email function:", error);
    
    return new Response(
      JSON.stringify({ error: "Failed to send confirmation email. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
