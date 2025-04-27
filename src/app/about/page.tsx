"use client";

import {motion} from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
          className="max-w-3xl mx-auto"
      >
        <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.7, delay: 0.3}}
        >
          <h1 className="text-3xl font-bold text-charcoal mb-6">About HeroNews</h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At HeroNews, our mission is to deliver accurate, unbiased news to our readers. We believe that
            access to reliable information is essential for an informed and empowered society.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our team of experienced journalists is dedicated to covering a wide range of topics with integrity
            and depth. We strive to provide comprehensive coverage of local, national, and international events,
            ensuring that our readers have the context they need to understand the world around them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Thank you for choosing HeroNews as your trusted source of news.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
