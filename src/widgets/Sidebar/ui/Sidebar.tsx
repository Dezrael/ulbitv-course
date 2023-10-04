import { FC, useState } from "react";
import cls from "./sidebar.module.scss";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { classNames } from "shared/utils";
import { LangSwitcher } from "features/LangSwitcher";
import { Button } from "shared/ui/Button/Button";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        props.className,
      ])}
    >
      <Button buttonTheme="clear" onClick={onToggle}>
        Toggle
      </Button>
      <div className={cls.bottom}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
