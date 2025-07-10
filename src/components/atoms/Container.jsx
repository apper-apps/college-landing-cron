import React from "react";
import { cn } from "@/utils/cn";

const Container = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
      className
    )}
    {...props}
  />
));

Container.displayName = "Container";

export default Container;