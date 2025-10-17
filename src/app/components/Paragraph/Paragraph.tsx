import React from "react";

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg"; // Optional size prop
}

const Paragraph: React.FC<ParagraphProps> = ({ className = "", children, size = "md" }) => {
  const baseStyles = "leading-relaxed mb-4";

  // Map size prop to corresponding text size classes
  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base md:text-lg", // Default size
    lg: "text-base md:text-lg md:text-xl",
  };

  return <p className={`${baseStyles} ${sizeStyles[size]} ${className}`}>{children}</p>;
};

export default Paragraph;