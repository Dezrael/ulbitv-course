import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation("main");

  return <div>{t("Main page")}</div>;
};

export default Main;
