import React from "react";

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ className = "", children }) => {
  const baseStyles = "text-gray-300 text-base md:text-lg leading-relaxed mb-4";

  return <p className={`${baseStyles} ${className}`}>{children}</p>;
};

export default Paragraph;
