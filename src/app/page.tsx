"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Info, Lightbulb, Newspaper, Search, Settings, Users } from "lucide-react";

const LandingPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            text: "I've found HeroNews to be the most reliable source for news. Their commitment to unbiased reporting is evident in every article.",
            author: "John Doe",
            avatar: "https://github.com/shadcn.png"
        },
        {
            text: "The quality of news and analysis provided by HeroNews is simply outstanding. It's my go-to for staying informed.",
            author: "Jane Smith",
            avatar: "https://github.com/mradamglenn.png"
        },
        {
            text: "HeroNews has transformed how I consume news. The clarity and depth of their coverage is unmatched.",
            author: "Alice Johnson",
            avatar: "https://github.com/steventey.png"
        },
        {
            text: "Accurate, timely, and in-depth reporting — HeroNews truly sets the standard for online journalism.",
            author: "Michael Brown",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            text: "HeroNews is my trusted companion for daily news. I appreciate their straightforward, no-spin articles.",
            author: "Olivia Williams",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            text: "Their investigative pieces are top-notch. HeroNews always digs deeper when others don't.",
            author: "Ethan Davis",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            text: "A beautifully designed platform with powerful journalism. HeroNews never disappoints.",
            author: "Sophia Miller",
            avatar: "https://randomuser.me/api/portraits/women/46.jpg"
        },
        {
            text: "HeroNews restores my faith in journalism. Their transparency and integrity shine through.",
            author: "William Garcia",
            avatar: "https://randomuser.me/api/portraits/men/47.jpg"
        },
        {
            text: "Every story is crafted with precision and care. I trust HeroNews for honest reporting.",
            author: "Isabella Martinez",
            avatar: "https://randomuser.me/api/portraits/women/48.jpg"
        },
        {
            text: "If you want news without the noise, HeroNews is the platform you need.",
            author: "James Rodriguez",
            avatar: "https://randomuser.me/api/portraits/men/49.jpg"
        },
        {
            text: "HeroNews presents facts clearly and professionally. It’s a refreshing experience in today’s media landscape.",
            author: "Mia Hernandez",
            avatar: "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            text: "The mobile experience is flawless. I can stay updated on the go with HeroNews.",
            author: "Alexander Lopez",
            avatar: "https://randomuser.me/api/portraits/men/51.jpg"
        },
        {
            text: "Their global coverage ensures I stay connected with the world. HeroNews is indispensable.",
            author: "Amelia Gonzalez",
            avatar: "https://randomuser.me/api/portraits/women/52.jpg"
        },
        {
            text: "HeroNews brings a sense of trust back into news consumption. Highly recommend it!",
            author: "Benjamin Wilson",
            avatar: "https://randomuser.me/api/portraits/men/53.jpg"
        },
        {
            text: "Clear headlines, thorough articles, and no clickbait — HeroNews respects its readers.",
            author: "Charlotte Anderson",
            avatar: "https://randomuser.me/api/portraits/women/54.jpg"
        },
        {
            text: "From local updates to international affairs, HeroNews delivers comprehensive news coverage.",
            author: "Daniel Thomas",
            avatar: "https://randomuser.me/api/portraits/men/55.jpg"
        },
        {
            text: "The newsletter is a must-subscribe! Quick summaries and links to full coverage.",
            author: "Harper Taylor",
            avatar: "https://randomuser.me/api/portraits/women/56.jpg"
        },
        {
            text: "HeroNews takes the time to explain complex topics clearly and accurately.",
            author: "Matthew Moore",
            avatar: "https://randomuser.me/api/portraits/men/57.jpg"
        },
        {
            text: "I appreciate how HeroNews differentiates between opinion pieces and factual reporting.",
            author: "Abigail Jackson",
            avatar: "https://randomuser.me/api/portraits/women/58.jpg"
        },
        {
            text: "Simply the best platform for unbiased, insightful news today. HeroNews is the real deal.",
            author: "Joseph White",
            avatar: "https://randomuser.me/api/portraits/men/59.jpg"
        },
        {
            text: "Thanks to HeroNews, I stay well-informed without feeling overwhelmed.",
            author: "Elizabeth Harris",
            avatar: "https://randomuser.me/api/portraits/women/60.jpg"
        },
        {
            text: "HeroNews is a breath of fresh air in an era of misinformation. Always on point!",
            author: "Samuel Martin",
            avatar: "https://randomuser.me/api/portraits/men/61.jpg"
        }
    ];


    const iconSize = 20;
    const trendingTopics = [
        {
            title: 'Global Economy Shifts',
            summary: 'Experts predict major changes in global markets.',
            icon: <Newspaper size={iconSize} />
        },
        {
            title: 'AI Innovations',
            summary: 'New breakthroughs in artificial intelligence are reshaping industries.',
            icon: <Lightbulb size={iconSize} />
        },
        {
            title: 'Climate Change Progress',
            summary: 'Recent policies show positive impact on climate goals.',
            icon: <Info size={iconSize} />
        },
        {
            title: 'Space Exploration Update',
            summary: 'Latest missions reveal new insights into our solar system.',
            icon: <Search size={iconSize} />
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-light-gray mb-24 rounded-3xl">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-500 opacity-10"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],  // Create a sliding effect
                    }}
                    transition={{
                        duration: 5,  // Control speed of the animation
                        repeat: Infinity,  // Repeat the animation infinitely
                        ease: "linear",  // Smooth linear movement
                    }}
                    style={{ backgroundSize: "200%" }}
                ></motion.div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        Stay Informed. Stay Empowered.
                    </motion.h1>
                    <motion.p
                        className="text-lg text-muted-foreground mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    >
                        Your gateway to reliable and comprehensive news.
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <Link href="/news">
                            <Button size="lg" className="bg-accent text-background hover:bg-sky-blue px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                                Explore Latest News
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>


            {/* Trending Section */}
            <section className="mb-24">
                <h2 className="text-3xl font-semibold text-charcoal mb-12 flex items-center justify-center gap-x-2">
                    <Settings className='text-muted-foreground' /> Trending Now <Settings className='text-muted-foreground' />
                </h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {trendingTopics.map((topic, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="w-full"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="rounded-3xl shadow-md p-6 h-full">
                                <CardHeader className='flex flex-row items-center gap-x-2'>
                                    {topic.icon}
                                    <CardTitle className="text-lg font-medium text-charcoal">{topic.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">{topic.summary}</CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
            {/* Why Trust Us Section - New Content */}
            <section className="mb-24">
                <h2 className="text-3xl font-semibold text-charcoal mb-12 text-center">Why Trust Us?</h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        variants={cardVariants}
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="rounded-3xl shadow-md p-6 h-full flex flex-col items-center justify-center text-center">
                            <Newspaper size={48} className='mb-4 text-sky-blue' />
                            <CardTitle className="text-lg font-medium text-charcoal">Unbiased Reporting</CardTitle>
                            <CardContent className="text-muted-foreground">
                                We deliver news with no slant, ensuring you get the facts straight.
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="rounded-3xl shadow-md p-6 h-full flex flex-col items-center justify-center text-center">
                            <Lightbulb size={48} className='mb-4 text-sky-blue' />
                            <CardTitle className="text-lg font-medium text-charcoal">Expert Analysis</CardTitle>
                            <CardContent className="text-muted-foreground">
                                Our experts provide deep insights to help you understand the complexities of the news.
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="rounded-3xl shadow-md p-6 h-full flex flex-col items-center justify-center text-center">
                            <Users size={48} className='mb-4 text-sky-blue' />
                            <CardTitle className="text-lg font-medium text-charcoal">Community Focused</CardTitle>
                            <CardContent className="text-muted-foreground">We value our community and prioritize the news that matters to you.</CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </section>


            {/* Testimonial Slider */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-charcoal mb-12 text-center">
                    What Our Readers Say
                </h2>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <Card className="max-w-xl w-full rounded-3xl shadow-md p-6 flex flex-col items-center justify-center text-center">
                            <div className="mb-6">
                                <Avatar className="w-24 h-24">
                                    <AvatarImage
                                        src={testimonials[currentTestimonial].avatar}
                                        alt={testimonials[currentTestimonial].author}
                                    />
                                    <AvatarFallback>{testimonials[currentTestimonial].author}</AvatarFallback>
                                </Avatar>
                            </div>
                            <CardContent className="text-muted-foreground">
                                <p className="mb-4 text-lg">{testimonials[currentTestimonial].text}</p>
                                <p className="font-semibold">- {testimonials[currentTestimonial].author}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    );
};

export default LandingPage;
