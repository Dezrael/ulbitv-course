import { FC, useState } from "react";
import cls from "./sidebar.module.scss";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { classNames } from "shared/utils";
import { LangSwitcher } from "features/LangSwitcher";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        props.className,
      ])}
    >
      <Button
        buttonTheme={ButtonTheme.Clear}
        className={cls.toggler}
        onClick={onToggle}
      >
        {t("Toggle")}
      </Button>
      <div className={cls.bottom}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
