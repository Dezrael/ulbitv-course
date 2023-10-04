import React from "react";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { classNames } from "shared/utils";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cls["lang-switcher"], {}, [className])}
      buttonTheme="clear"
      onClick={toggle}
    >
      {t("Language")}
    </Button>
  );
};
