import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { AppRoutes, RoutePaths } from "shared/routePaths";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
};
