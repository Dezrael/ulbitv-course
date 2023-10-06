import { useTranslation } from "react-i18next";
import cls from "./notFound.module.scss";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div className={cls["not-found"]}>{t("Page not found")}</div>;
};

export default NotFoundPage;
