import React from "react";
import cls from "./pageLoader.module.scss";
import { Loader } from "shared/ui/Loader/Loader";
import { classNames } from "shared/utils";

export interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls["page-loader"], {}, [className])}>
      <Loader />
    </div>
  );
};
