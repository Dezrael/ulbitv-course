import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { useTranslation } from "react-i18next";

export const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div>{t("Loading...")}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return <Route key={path} element={element} path={path} />;
        })}
      </Routes>
    </Suspense>
  );
};
