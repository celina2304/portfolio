import React from "react";

import { ButtonProps } from "../../types/components/button";

const Button: React.FC<ButtonProps> = ({
  label = "",
  onClick = () => {},
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
}) => {
  const baseStyles = "px-4 py-2 font-semibold rounded 2xl:text-2xl";
  const variantStyles = {
    primary:
      "text-primary-text bg-primary-accent",
    light_primary: "text-black bg-primary-accent border-[1.5px] border-black",
    dark_primary: "bg-blue-500 hover:bg-blue-700",
    dark_secondary: "text-white bg-gray-500 hover:bg-gray-700",
  };
  const disabledStyles = "bg-gray-400 cursor-not-allowed";
  return (
    <div
      className={`rounded ${variant === "primary" ? "bg-background " : ""} `}
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${
          disabled ? disabledStyles : ""
        } ${className} `}
      >
        {label}
        {/* <div className="h-full w-full -z-10"></div> */}
      </button>
    </div>
  );
};

export default Button;
