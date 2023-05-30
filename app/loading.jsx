import React from "react";
import { FaSpinner } from "react-icons/fa";
const LoadingPage = () => {
  return (
    <div className="flex justify-center  h-screen  items-center">
      <FaSpinner className="text-4xl text-primary-500 animate-spin" />
    </div>
  );
};

export default LoadingPage;
