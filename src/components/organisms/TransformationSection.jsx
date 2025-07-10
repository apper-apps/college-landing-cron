import React from "react";
import Container from "@/components/atoms/Container";
import BenefitCard from "@/components/molecules/BenefitCard";
import { motion } from "framer-motion";

const TransformationSection = () => {
  const benefits = [
    {
      icon: "Target",
      title: "Clarity on what skills to learn",
      description: "No more confusion about which skills actually matter in the real world. Get a clear roadmap."
    },
    {
      icon: "Zap",
      title: "Confidence to put yourself out there",
      description: "Build the confidence to reach out to companies, pitch your services, and showcase your work."
    },
    {
      icon: "Briefcase",
      title: "A system to land internships and gigs",
      description: "Learn proven strategies that work, not theoretical advice that doesn't translate to real opportunities."
    },
    {
      icon: "Users",
      title: "A community that keeps you accountable",
      description: "Join a group of like-minded students who are all working towards the same goal: financial independence."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            From{" "}
            <span className="text-error">"I'm lost"</span>{" "}
            to{" "}
            <span className="gradient-text">"I just landed a gig."</span>
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Here's what changes when you join TMD College:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TransformationSection;