"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  return (
    <motion.div
      className="container mx-auto py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-charcoal mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal">
              Name
            </label>
            <Input type="text" id="name" placeholder="Your Name" className="mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal">
              Email
            </label>
            <Input type="email" id="email" placeholder="Your Email" className="mt-1" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-charcoal">
              Subject
            </label>
            <Input type="text" id="subject" placeholder="Subject" className="mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-charcoal">
              Message
            </label>
            <Textarea id="message" rows={4} placeholder="Your Message" className="mt-1" />
          </div>
          <Button type="submit" className="bg-accent text-background hover:bg-accent-foreground">
            Submit
          </Button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-charcoal mb-2">Contact Details</h2>
          <p className="text-muted-foreground">Email: info@heronews.com</p>
          <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
          <p className="text-muted-foreground">Address: 123 Main Street, Anytown, USA</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUsPage;
