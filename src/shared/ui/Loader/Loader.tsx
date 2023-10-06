import React from "react";
import { classNames } from "shared/utils";
import cls from "./loader.module.scss";

export interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.loader, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
