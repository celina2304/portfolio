import React from "react";

import { ButtonProps } from "../../types/components";

const Button: React.FC<ButtonProps> = ({
  label = "",
  onClick = () => {},
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
}) => {
  const baseStyles = "px-4 py-2 font-semibold rounded shadow 2xl:text-2xl";
  const variantStyles = {
    primary:
      "text-green_yellow bg-jett-black border-[1.5px] border-green_yellow",
    light_primary: "text-black bg-green_yellow border-[1.5px] border-black",
    dark_primary: "bg-blue-500 hover:bg-blue-700",
    dark_secondary: "text-white bg-gray-500 hover:bg-gray-700",
  };
  const disabledStyles = "bg-gray-400 cursor-not-allowed";
  return (
    <div
      className={`rounded ${variant === "primary" ? "bg-green_yellow" : ""} ${
        variant === "light_primary" ? "bg-black" : ""
      } `}
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${
          disabled ? disabledStyles : ""
        } ${className}  -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 transition-transform`}
      >
        {label}
        {/* <div className="h-full w-full -z-10"></div> */}
      </button>
    </div>
  );
};

export default Button;
