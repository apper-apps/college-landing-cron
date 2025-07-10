import React from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ProblemSection from "@/components/organisms/ProblemSection";
import TransformationSection from "@/components/organisms/TransformationSection";
import AudienceSection from "@/components/organisms/AudienceSection";
import CourseSection from "@/components/organisms/CourseSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import PricingSection from "@/components/organisms/PricingSection";
import Footer from "@/components/organisms/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <TransformationSection />
        <AudienceSection />
        <CourseSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;