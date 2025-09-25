import React from "react";

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({ content }) => {
  const words = content.split(" ");
  const content1 = words[0] || "";
  const content2 = words[1] || "";
  const content3 = words[2] || "";

  return (
    <div className="text-center mb-16 pt-32">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 px-5">
        {content1} <span className="text-primary">{content2}</span> {content3}
      </h2>
      {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Discover how we've transformed homes and businesses across India with our zero-investment solar installations.
      </p> */}
    </div>
  );
};

export default Title;
