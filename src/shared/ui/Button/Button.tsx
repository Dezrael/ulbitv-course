import { classNames } from "shared/utils";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export type ButtonType = "stretch";

export type ButtonTheme = "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonTheme?: ButtonTheme;
  buttonType?: ButtonType;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, buttonTheme, buttonType, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [
        cls[buttonTheme],
        cls[buttonType],
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
