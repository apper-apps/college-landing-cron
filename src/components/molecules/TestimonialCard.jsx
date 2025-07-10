import React from "react";
import { Card, CardContent } from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const TestimonialCard = ({ testimonial, className }) => {
  return (
    <Card className={cn("testimonial-card card-hover", className)}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
              {testimonial.studentName.charAt(0)}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-dark">{testimonial.studentName}</h4>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <ApperIcon
                    key={i}
                    name="Star"
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <p className="text-gray mb-4 text-sm leading-relaxed">
              "{testimonial.achievement}"
            </p>
            {testimonial.screenshotUrl && (
              <div className="bg-gray-50 rounded-lg p-3 border">
                <div className="flex items-center space-x-2 mb-2">
                  <ApperIcon name="Trophy" className="w-4 h-4 text-success" />
                  <span className="text-xs font-medium text-gray-light">Achievement Screenshot</span>
                </div>
                <div className="text-xs text-gray-light">
                  {testimonial.screenshotUrl}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;