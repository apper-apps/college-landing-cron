import React from "react";
import Container from "@/components/atoms/Container";
import ModuleCard from "@/components/molecules/ModuleCard";
import { motion } from "framer-motion";

const CourseSection = () => {
  const courseModules = [
    {
      title: "Build Your Foundation",
      description: "Start with the basics - understanding the online earning landscape and setting up your digital presence.",
      duration: "2 weeks",
      lessons: [
        "Understanding the freelance economy",
        "Setting up your online profiles",
        "Identifying your skills and strengths",
        "Creating your first portfolio piece"
      ]
    },
    {
      title: "Create Proof of Work",
      description: "Learn to create compelling portfolio pieces that demonstrate your abilities to potential clients.",
      duration: "3 weeks",
      lessons: [
        "Building portfolio projects from scratch",
        "Case study creation and presentation",
        "Documenting your work process",
        "Creating before/after showcases"
      ]
    },
    {
      title: "Grow Your Presence",
      description: "Build a professional online presence that attracts opportunities and builds credibility.",
      duration: "2 weeks",
      lessons: [
        "LinkedIn optimization strategies",
        "Content creation for professionals",
        "Building your personal brand",
        "Networking with industry professionals"
      ]
    },
    {
      title: "Land Paid Work",
      description: "Master the art of cold outreach, client communication, and turning leads into paying gigs.",
      duration: "4 weeks",
      lessons: [
        "Cold email strategies that work",
        "Proposal writing and pricing",
        "Client communication best practices",
        "Negotiation and closing techniques"
      ]
    }
  ];

  const mindsetModules = [
    {
      title: "Discipline & Mindset (Bonus)",
      description: "Develop the mental framework and habits needed for long-term success in freelancing.",
      duration: "Ongoing",
      lessons: [
        "How to become a disciplined beast",
        "Master focus in a distracted world",
        "Perseverance through rejection",
        "Build unshakable confidence",
        "Embrace failure & keep moving"
      ]
    }
  ];

  return (
    <section id="course" className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            What You'll Learn{" "}
            <span className="gradient-text">(Modules Overview)</span>
          </h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            A comprehensive curriculum designed to take you from zero to earning your first ₹10K+ online.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Main Course Modules */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">
              Core Course Modules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ModuleCard module={module} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mindset Modules */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">
              Bonus: Mindset & Success Principles
            </h3>
            <div className="max-w-2xl mx-auto">
              {mindsetModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ModuleCard module={module} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseSection;