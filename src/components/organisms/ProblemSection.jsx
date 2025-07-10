import React from "react";
import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-8 leading-tight">
            Feel like you're{" "}
            <span className="gradient-text">falling behind</span>,{" "}
            while everyone else is moving ahead?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray leading-relaxed mb-6">
              Let's be real. College isn't teaching you how to earn. College teaches you to memorize.
            </p>
            
            <p className="text-xl text-gray leading-relaxed mb-6">
              Most students feel stuck. Not because they're lazy but because no one ever showed them how to get started.
            </p>
            
            <p className="text-xl text-gray-light leading-relaxed">
              If this is you, you're not alone. And we've built something just for you.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProblemSection;