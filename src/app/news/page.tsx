"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getNewsArticles, NewsArticle } from "@/services/news";
import Image from "next/image";

const NewsFeedPage = async () => {
  const newsArticles: NewsArticle[] = await getNewsArticles();

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
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={600}
                    height={300}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
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
