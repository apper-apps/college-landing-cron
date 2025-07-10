import React from "react";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "cta-gradient text-white hover:shadow-lg": variant === "primary",
          "btn-secondary text-white hover:shadow-lg": variant === "secondary",
          "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50": variant === "outline",
          "text-primary hover:text-primary/80 hover:underline": variant === "link",
        },
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "default",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;