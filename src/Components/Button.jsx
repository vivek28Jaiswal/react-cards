import React from "react";

const Button = ({ text, color }) => {
  return (
    <button className={`m-4 px-4 py-1 ${color} rounded-md text-xs`}>
      {text}
    </button>
  );
};

export default Button;
