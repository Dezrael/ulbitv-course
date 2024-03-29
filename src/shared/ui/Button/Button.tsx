import { classNames } from "shared/utils";
import cls from "./button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonType {
  Stretch = "stretch",
}

export enum ButtonTheme {
  Clear = "clear",
  Secondary = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonTheme?: ButtonTheme;
  buttonType?: ButtonType;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, buttonTheme, buttonType, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, {}, [
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
