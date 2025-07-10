import React, { useState } from "react";
import Container from "@/components/atoms/Container";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      studentName: "Priya Sharma",
      achievement: "I was completely lost about how to start earning online. After joining TMD College, I landed my first freelance writing gig within 3 weeks. The cold email templates actually work! I've now earned over ₹15,000 in my first month.",
      screenshotUrl: "LinkedIn message from startup founder"
    },
    {
      id: 2,
      studentName: "Arjun Patel",
      achievement: "Used to think I needed connections to get internships. The course taught me how to create my own opportunities. Got replies from 5 different startups and landed 2 paid internships. The mindset modules were game-changing.",
      screenshotUrl: "Email replies from startup founders"
    },
    {
      id: 3,
      studentName: "Sneha Gupta",
      achievement: "From zero coding experience to landing my first web development project worth ₹25,000. The proof-of-work strategy helped me build credibility even without formal experience. Best investment I've made.",
      screenshotUrl: "Project contract and payment confirmation"
    },
    {
      id: 4,
      studentName: "Rohit Kumar",
      achievement: "The community support is incredible. Everyone shares their wins and helps each other. I've learned as much from other students as from the course itself. Currently working on 3 different projects.",
      screenshotUrl: "Community dashboard showing active projects"
    },
    {
      id: 5,
      studentName: "Ananya Singh",
      achievement: "I was a backbencher who never thought I'd amount to anything. This course gave me the confidence to put myself out there. Now I'm earning more than some of my friends who are working full-time jobs.",
      screenshotUrl: "Bank statement showing freelance earnings"
    },
    {
      id: 6,
      studentName: "Vikram Reddy",
      achievement: "The disciplined approach to cold outreach changed everything. I went from 0 responses to getting replies from 40% of my cold emails. Now I have more opportunities than I can handle.",
      screenshotUrl: "Email thread with potential clients"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            Don't believe us?{" "}
            <span className="gradient-text">Here's what our students say:</span>
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Real students, real results, real screenshots of their success.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ApperIcon name="ChevronLeft" className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === Math.ceil(testimonials.length / 2) - 1}
            >
              <ApperIcon name="ChevronRight" className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-light mb-6">
            Join hundreds of students who are already earning online
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-light">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">₹50L+</div>
              <div className="text-sm text-gray-light">Total Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">85%</div>
              <div className="text-sm text-gray-light">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;