import React from "react";
import { Card, CardContent } from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const BenefitCard = ({ icon, title, description, className }) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ApperIcon name={icon} className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-dark mb-2">{title}</h3>
        <p className="text-gray text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;