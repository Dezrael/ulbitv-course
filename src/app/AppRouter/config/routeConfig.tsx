import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRoutes, RoutePaths } from "shared/routePaths";
import { NotFoundPage } from "pages/NotFound";
import { ErrorBoundary } from "shared/utils/ErrorBoundary";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: (
      <ErrorBoundary key={RoutePaths.main}>
        <MainPage />
      </ErrorBoundary>
    ),
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: (
      <ErrorBoundary key={RoutePaths.about}>
        <AboutPage />
      </ErrorBoundary>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.notFound,
    element: <NotFoundPage />,
  },
};
