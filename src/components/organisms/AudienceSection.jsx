import React from "react";
import Container from "@/components/atoms/Container";
import { Card, CardContent } from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { motion } from "framer-motion";

const AudienceSection = () => {
  const targetPoints = [
    "Tired of waiting for placements and want to start earning.",
    "Need a clear roadmap to turn skills into money.",
    "Want to learn to land internships and freelance gigs with zero experience.",
    "Ready to build proof of work and stop relying on luck.",
    "Serious about creating a career on your terms."
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
              Is This for You?{" "}
              <span className="gradient-text">Yes, if...</span>
            </h2>
            <p className="text-xl text-gray-light">
              This course is designed for students who are ready to take action.
            </p>
          </div>

          <Card className="card-hover">
            <CardContent className="p-8">
              <div className="space-y-6">
                {targetPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="check-icon mt-1">
                      <ApperIcon name="Check" className="w-5 h-5" />
                    </div>
                    <p className="text-lg text-gray leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <div className="flex items-start space-x-3">
                  <ApperIcon name="AlertCircle" className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-dark mb-2">Not for you if:</h3>
                    <p className="text-gray">
                      You're looking for a magic solution that requires no effort, or you're not willing to put in the work to learn and apply what you learn.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default AudienceSection;