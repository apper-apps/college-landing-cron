import React from "react";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-gradient pt-24 pb-16 lg:pt-32 lg:pb-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Learn What Matters.{" "}
              <span className="gradient-text">
                Not What The System Forces You To.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-light max-w-3xl mx-auto leading-relaxed">
              Internships. Freelance work. Real skills. Real money. The no-fluff course + community built to help you earn in college through proof-of-work, cold emails, and confidence.
            </p>
            
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Whether you're a topper, backbencher, or totally lost, if you're ready to take control, you're in the right place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="btn-hover text-lg px-8 py-4 min-w-[200px]"
              >
                <ApperIcon name="Zap" className="w-5 h-5 mr-2" />
                Join Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("course")}
                className="min-w-[200px]"
              >
                <ApperIcon name="Play" className="w-5 h-5 mr-2" />
                See Course Details
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-xl p-6 shadow-subtle border border-gray-200">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ApperIcon name="IndianRupee" className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-dark mb-2">₹10K+ Earned</h3>
              <p className="text-gray text-sm">Students landing their first paid gigs</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-subtle border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ApperIcon name="Briefcase" className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-dark mb-2">First Gig</h3>
              <p className="text-gray text-sm">From zero to paid professional</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-subtle border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ApperIcon name="Mail" className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-dark mb-2">Cold Email Success</h3>
              <p className="text-gray text-sm">Getting replies from startup founders</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;