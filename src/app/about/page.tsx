"use client";
import { motion } from "framer-motion";
import { Info, Users, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const AboutUsPage = () => {
  const iconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.2 } },
    rest: { scale: 1, rotate: 0, transition: { duration: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      imageUrl: "/placeholder.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imageUrl: "/placeholder.jpg",
    },
    {
      name: "Peter Jones",
      role: "Lead Journalist",
      imageUrl: "/placeholder.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      content: "HeroNews provides the most unbiased news I've found.",
    },
    {
      name: "Bob Williams",
      content: "I rely on HeroNews for my daily dose of information.",
    },
    {
      name: "Carol Davis",
      content: "The in-depth reporting is excellent.",
    },
  ];

  const milestones = [
    {
      title: "2020",
      description:
        "HeroNews was founded with a vision to redefine news reporting.",
    },
    {
      title: "2021",
      description:
        "Launched our platform, reaching our first readers and setting new standards.",
    },
    {
      title: "2022",
      description:
        "Expanded our team, coverage, and impact, becoming a leading source of news.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-6"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-light-gray mb-24 rounded-3xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-500 opacity-10"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200%" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Our Mission: Inform, Inspire, Empower
          </motion.h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-charcoal mb-12 text-center">
          Company Overview
        </h2>
        <motion.div className="text-center">
          <p className="text-muted-foreground leading-relaxed">
            HeroNews is more than just a news outlet. We're a community of
            informed citizens and dedicated journalists working to bring clarity
            to a complex world. Our core values of integrity, transparency, and
            the pursuit of truth are the foundations of everything we do.
          </p>
        </motion.div>
      </section>

      {/* Our Journey */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <Info className="w-6 h-6 text-indigo-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-charcoal">Our Journey</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {milestones.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full"
              whileHover="hover"
              initial="rest"
            >
              <Card className="rounded-3xl shadow-md p-6 h-full flex flex-col items-center justify-center text-center hover:shadow-2xl transition-shadow duration-300">
                <motion.div variants={iconVariants}>
                  <Info className="w-10 h-10 mb-4 text-sky-600" />
                </motion.div>
                <CardHeader className="p-0 mt-2">
                  <CardTitle className="text-lg font-medium text-charcoal">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Meet the Team */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <Users className="w-6 h-6 text-indigo-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-charcoal">Meet the Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="rounded-md border border-input bg-popover px-4 py-6 shadow-sm text-center flex flex-col items-center"
            >
              <motion.div variants={iconVariants}>
                <Users className="w-10 h-10 mb-3 text-sky-600" />
              </motion.div>
              <CardTitle className="text-lg font-semibold">
                {member.name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {member.role}
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <MessageSquare className="w-6 h-6 text-indigo-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-charcoal">
            What Our Readers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="rounded-md border border-input bg-popover px-4 py-6 shadow-sm text-center flex flex-col"
            >
              <motion.div variants={iconVariants}>
                <MessageSquare className="w-10 h-10 mb-3 text-sky-600 mx-auto" />
              </motion.div>
              <CardContent className="flex-1">
                <p className="italic mb-2">"{testimonial.content}"</p>
                <p className="text-sm text-muted-foreground">
                  - {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUsPage;
