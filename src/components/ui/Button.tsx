import React from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "../../types/components/button";

const Button: React.FC<ButtonProps> = ({
  label = "",
  onClick = () => { },
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
}) => {
  const baseStyles =
    "font-semibold py-2 px-4 text-sm 2xl:text-xl rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  const variantStyles = {
    primary: "bg-primary-accent text-primary-text hover:bg-secondary-accent",
    secondary: "bg-background/50 backdrop-blur-sm border-[1.5px] border-primary-accent text-primary-text hover:bg-secondary-accent/50 hover:border-opacity-0",
    light_primary:
      "bg-primary-accent text-black border-[1.5px] border-black hover:bg-secondary-accent",
    dark_primary: "bg-blue-500 hover:bg-blue-700 text-white",
    dark_secondary: "bg-gray-500 hover:bg-gray-700 text-white",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed transform-none";

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ""
        } ${className}`}
    >
      {label}
    </motion.button>
  );
};

export default Button;
