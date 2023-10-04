import { FC, useState } from "react";
import cls from "./sidebar.module.scss";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { classNames } from "shared/utils";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        props.className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <ThemeSwitcher />
    </div>
  );
};
