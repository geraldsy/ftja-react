import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">This is About Layout</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
