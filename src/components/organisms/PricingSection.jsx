import React from "react";
import Container from "@/components/atoms/Container";
import { Card, CardContent } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const PricingSection = () => {
  const handleJoinNow = () => {
    toast.success("Redirecting to secure payment gateway...", {
      position: "top-right",
      autoClose: 3000,
    });
    // In a real app, this would redirect to payment gateway
    setTimeout(() => {
      window.open("https://forms.gle/example", "_blank");
    }, 1000);
  };

  const features = [
    "Complete course with 11+ modules",
    "Lifetime access to all content",
    "1 year of community access",
    "Cold email templates that work",
    "Portfolio building strategies",
    "Direct access to instructors",
    "Weekly live Q&A sessions",
    "Success tracking & accountability",
    "Bonus mindset training",
    "30-day money-back guarantee"
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            What's Your{" "}
            <span className="gradient-text">Investment?</span>
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Less than what you'll earn in your first month. This is an investment in your future.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="pricing-card card-hover">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                    <ApperIcon name="GraduationCap" className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    TMD College Complete Course
                  </h3>
                  <p className="text-gray-light">
                    Everything you need to start earning online
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-gray-lighter line-through text-xl">₹15,999</span>
                    <span className="bg-error text-white px-3 py-1 rounded-full text-sm font-medium">
                      Limited Time
                    </span>
                  </div>
                  <div className="text-6xl font-bold text-dark mb-2">
                    ₹6,999
                  </div>
                  <p className="text-gray-light">
                    One-time payment, lifetime access
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="check-icon mt-0.5">
                        <ApperIcon name="Check" className="w-4 h-4" />
                      </div>
                      <span className="text-gray text-left">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  onClick={handleJoinNow}
                  className="w-full text-lg py-4 mb-6 btn-hover"
                >
                  <ApperIcon name="Zap" className="w-5 h-5 mr-2" />
                  JOIN NOW - Start Earning Today
                </Button>

                <div className="bg-gray-50 rounded-lg p-6 text-left">
                  <div className="flex items-start space-x-3">
                    <ApperIcon name="Shield" className="w-6 h-6 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">
                        30-Day Money-Back Guarantee
                      </h4>
                      <p className="text-gray text-sm">
                        If you don't see results within 30 days of completing the course, 
                        we'll refund every penny. No questions asked.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Still thinking about it?
            </h3>
            <p className="text-gray-light mb-6">
              While you're thinking, other students are already earning. The longer you wait, 
              the more opportunities you miss. Your future self will thank you for taking action today.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-light">
              <div className="flex items-center space-x-2">
                <ApperIcon name="Users" className="w-4 h-4" />
                <span>500+ students already enrolled</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Clock" className="w-4 h-4" />
                <span>Limited time pricing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PricingSection;