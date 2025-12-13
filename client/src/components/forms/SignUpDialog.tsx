"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, Mail } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
});

interface SignUpDialogProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const SignUpDialog = ({ 
  children, 
  title = "Start Building with Realm 101",
  description = "Join thousands of developers who are building the future with our comprehensive development ecosystem."
}: SignUpDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/leads", values);

      setIsSuccess(true);
      toast({
        title: "Welcome to Realm 101!",
        description: "We'll be in touch soon with your access details.",
      });
      
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
        form.reset();
      }, 2000);
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      
      if (error.message.includes("409")) {
        toast({
          title: "Already signed up",
          description: "This email is already on our waitlist. We'll be in touch soon!",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] font-body">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-primary">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">
              Welcome aboard!
            </h3>
            <p className="text-muted-foreground">
              Check your email for next steps.
            </p>
          </motion.div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          {...field}
                          className="font-body"
                          disabled={isSubmitting}
                          data-testid="input-firstName"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          {...field}
                          className="font-body"
                          disabled={isSubmitting}
                          data-testid="input-lastName"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                        className="font-body"
                        disabled={isSubmitting}
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">Company (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Acme Inc."
                        {...field}
                        className="font-body"
                        disabled={isSubmitting}
                        data-testid="input-company"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full font-body"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating your account...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Get Early Access
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By signing up, you agree to our{" "}
                <a href="/terms" className="underline hover:text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="underline hover:text-primary">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};
