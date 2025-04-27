"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUsPage = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO", imageUrl: "/placeholder.jpg" },
    { name: "Jane Smith", role: "CTO", imageUrl: "/placeholder.jpg" },
    { name: "Peter Jones", role: "Lead Journalist", imageUrl: "/placeholder.jpg" },
  ];

  const milestones = [
    { year: "2020", event: "Founded HeroNews" },
    { year: "2021", event: "Launched Website" },
    { year: "2022", event: "Reached 1M Monthly Readers" },
  ];

  const testimonials = [
    { name: "Alice Johnson", content: "HeroNews provides the most unbiased news I've found." },
    { name: "Bob Williams", content: "I rely on HeroNews for my daily dose of information." },
    { name: "Carol Davis", content: "The in-depth reporting is excellent." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-6"
    >

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
            Our Mission: Inform, Inspire, Empower
          </motion.h1>
        </div>
      </section>

      {/* Company Overview */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-charcoal mb-4">About Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          HeroNews is a dedicated news platform committed to delivering
          accurate, unbiased, and insightful news coverage. Our core values are
          integrity, transparency, and a relentless pursuit of the truth.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We strive to provide our readers with the context they need to
          understand the world around them, empowering them to form their own
          informed opinions.
        </p>
      </motion.div>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-charcoal mb-4">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="border border-muted-foreground p-4 rounded-lg"
            >
              <h3 className="text-xl font-semibold">{milestone.year}</h3>
              <p className="text-sm">{milestone.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-charcoal mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border border-muted-foreground p-4 rounded-lg flex flex-col items-center"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-charcoal mb-4">
          What Our Readers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-muted-foreground p-4 rounded-lg"
            >
              <p className="mb-2 italic">"{testimonial.content}"</p>
              <p className="text-sm text-muted-foreground">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUsPage;



