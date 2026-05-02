import { useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Send, Loader2, CheckCircle2 } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID"
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY"

    try {
      if (SERVICE_ID !== "YOUR_SERVICE_ID") {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      } else {
        // Simulate API call for demonstration purposes if placeholders are kept
        await new Promise(resolve => setTimeout(resolve, 1500))
      }
      setIsSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error("Failed to send email:", error)
      alert("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSuccess(false), 5000)
    }
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="bg-background/50 backdrop-blur-md border-border/50">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold tracking-tight mb-2">Get In Touch</CardTitle>
            <CardDescription className="text-lg">
              Have a project in mind or looking for a senior developer? Let's talk.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="user_name" required placeholder="John Doe" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="user_email" required type="email" placeholder="john@example.com" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  required
                  placeholder="How can I help you?" 
                  rows={5}
                  className="bg-background/50 resize-none"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base transition-all">
                {isSubmitting ? (
                  <>Sending <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
                ) : isSuccess ? (
                  <>Sent Successfully <CheckCircle2 className="ml-2 h-4 w-4 text-green-500" /></>
                ) : (
                  <>Send Message <Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
