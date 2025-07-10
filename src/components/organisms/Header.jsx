import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "header-backdrop" : "bg-white"
    )}>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <ApperIcon name="GraduationCap" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-dark">TMD College</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("course")}
              className="text-gray hover:text-primary transition-colors font-medium"
            >
              Course
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray hover:text-primary transition-colors font-medium"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray hover:text-primary transition-colors font-medium"
            >
              Pricing
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("pricing")}
              className="btn-hover"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <ApperIcon
              name={isMobileMenuOpen ? "X" : "Menu"}
              className="w-6 h-6 text-gray"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mobile-menu border-t">
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-gray hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("course")}
                className="block w-full text-left px-4 py-2 text-gray hover:text-primary transition-colors font-medium"
              >
                Course
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-4 py-2 text-gray hover:text-primary transition-colors font-medium"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-2 text-gray hover:text-primary transition-colors font-medium"
              >
                Pricing
              </button>
              <div className="px-4 pt-4 border-t">
                <Button
                  onClick={() => scrollToSection("pricing")}
                  className="w-full"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;