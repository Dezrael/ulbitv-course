import React from "react";
import { useTranslation } from "react-i18next";

export const ErrorPage: React.FC = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("Unexpected error")}</h1>
      <h2>{children}</h2>
    </div>
  );
};

export default ErrorPage;
