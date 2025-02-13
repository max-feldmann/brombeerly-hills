import React from "react";

interface HeadlineProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

const Headline: React.FC<HeadlineProps> = ({ as: Tag = "h2", className = "", children }) => {
  const baseStyles = "font-semibold";
  const sizes = {
    h1: "text-4xl md:text-5xl",
    h2: "tracking-tighter text-2xl mb-6",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
    h5: "text-lg md:text-xl",
    h6: "text-base md:text-lg",
  };

  return (
    <Tag className={`${baseStyles} ${sizes[Tag]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Headline;