import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("Page not found")}</h1>
    </div>
  );
};

export default NotFoundPage;
