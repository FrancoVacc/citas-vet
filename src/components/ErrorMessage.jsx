import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <p className="w-full text-white bg-red-400 text-xs rounded-sm my-1 border border-solid border-red-600">
      {error}
    </p>
  );
};

export default ErrorMessage;
