import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  iconAfter?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-red-orange-500 text-white hover:bg-red-orange-500/80 transition-colors ease-in-out duration-70",
  secondary: "bg-gray-200 text-black hover:text-white hover:bg-red-orange-500",
  tertiary:
    " underline h-auto border-transparent px-0 after:content-[''] after:h-px after:w-0 after:absolute after:transition-all after-duration-500 after:top-full after:bg-red-orange-500 hover:after:w-[65%]",
};
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  iconAfter,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        " h-11 px-6 rounded-xl relative group/button inline-flex transition-colors duration-500 gap-4 items-center border border-red-orange-500 uppercase",
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
