import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return <Route key={path} element={element} path={path} />;
        })}
      </Routes>
    </Suspense>
  );
};
