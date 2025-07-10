import React from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const Empty = ({ 
  className, 
  title = "No data found", 
  description = "There's nothing here yet.",
  actionLabel = "Get Started",
  onAction,
  ...props 
}) => {
  return (
    <div className={cn("text-center py-12", className)} {...props}>
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <ApperIcon name="Package" className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
      <p className="text-gray mb-6">{description}</p>
      {onAction && (
        <Button onClick={onAction}>
          <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default Empty;