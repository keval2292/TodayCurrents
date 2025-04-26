"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const LandingPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
          Stay Informed. Stay Empowered.
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your source for accurate, unbiased news.
        </p>
        <Link href="/news">
          <Button size="lg" className="bg-accent text-background hover:bg-accent-foreground">
            Explore Latest News
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
