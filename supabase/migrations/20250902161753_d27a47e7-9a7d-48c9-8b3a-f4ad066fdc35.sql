-- Create leads table for waitlist signups
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add email index for faster lookups
CREATE INDEX idx_leads_email ON public.leads(email);

-- Add timestamp index for analytics
CREATE INDEX idx_leads_created_at ON public.leads(created_at);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Since there's no authentication, we'll make this table publicly accessible for inserts
-- but not for reads (to protect user data)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (sign up for waitlist)
CREATE POLICY "Anyone can sign up for waitlist" 
  ON public.leads 
  FOR INSERT 
  WITH CHECK (true);

-- Prevent public reads for privacy
CREATE POLICY "No public reads" 
  ON public.leads 
  FOR SELECT 
  USING (false);