import React, { useState } from "react";
import { Card, CardContent } from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const ModuleCard = ({ module, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={cn("module-card card-hover", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <ApperIcon name="BookOpen" className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-dark">{module.title}</h3>
              <p className="text-sm text-gray-light">{module.duration}</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <ApperIcon
              name={isExpanded ? "ChevronUp" : "ChevronDown"}
              className="w-5 h-5 text-gray-light"
            />
          </button>
        </div>
        
        <p className="text-gray mb-4 text-sm leading-relaxed">
          {module.description}
        </p>
        
        {isExpanded && (
          <div className="space-y-3 animate-fade-in">
            <div className="border-t pt-4">
              <h4 className="font-medium text-dark mb-2">What you'll learn:</h4>
              <ul className="space-y-2">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="check-icon mt-0.5">
                      <ApperIcon name="Check" className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-gray">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ModuleCard;