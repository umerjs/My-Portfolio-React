import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  limitRate: {
    id: "portfolio-contact",
    throttle: 10000,
  },
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    setIsSuccess(false);
    setIsSubmitting(true);

    try {
      console.log("EmailJS Config:", {
        PUBLIC_KEY,
        SERVICE_ID,
        TEMPLATE_ID,
      });

      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.currentTarget,
        PUBLIC_KEY,
      );

      console.log("Email sent:", result);

      setIsSuccess(true);

      (e.target as HTMLFormElement).reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      console.log("Status:", err?.status);
      console.log("Text:", err?.text);

      if (err?.status === 412) {
        setError(
          err?.text ||
            "EmailJS configuration error. Check Service ID, Template ID and Public Key.",
        );
      } else {
        setError(
          err?.text || "Failed to send message. Please try again later.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-primary">GET IN TOUCH</span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Send me a message.
          </p>
        </div>

        <Card>
          <CardContent className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>

                  <Input
                    id="name"
                    name="user_name"
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>

                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>

                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>

                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                />
              </div>

              {error && (
                <div className="flex items-center gap-3 p-4 rounded-lg border border-red-500/20 bg-red-500/10">
                  <AlertCircle className="h-5 w-5 text-red-500" />

                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}

              {isSuccess && (
                <div className="flex items-center gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/10">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />

                  <p className="text-sm text-green-500">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
