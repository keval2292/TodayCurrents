"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Dummy data (you can replace this with your fetched data later)
const newsArticles = [
  {
    title: "Breaking News 1",
    summary: "This is a short summary of the first news article.",
  },
  {
    title: "Breaking News 2",
    summary: "This is a short summary of the second news article.",
  },
  {
    title: "Breaking News 3",
    summary: "This is a short summary of the third news article.",
  },
];

const NewsFeedPage = () => {
  return (
    <motion.div
      className="container mx-auto py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold text-charcoal mb-6 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Latest News
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="mt-4">{article.summary}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="bg-primary text-background hover:bg-primary-foreground">Read More</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsFeedPage;
