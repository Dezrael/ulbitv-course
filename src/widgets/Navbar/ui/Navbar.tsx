import { FC } from "react";
import cls from "./navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.navbar}>
      <AppLink to="/">{t("Main page")}</AppLink>
      <AppLink to="/about">{t("About us")}</AppLink>
    </div>
  );
};
