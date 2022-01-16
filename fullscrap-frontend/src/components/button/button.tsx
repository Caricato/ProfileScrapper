import { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.scss";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: "primary" | "secondary";
  size?: "small" | "large";
}

const Button = ({
  children,
  buttonType = "primary",
  size = "large",
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      className={`button button--${buttonType} button--${size}`}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
