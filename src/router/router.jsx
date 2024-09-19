import {createBrowserRouter} from "react-router-dom";
import routeConfig from "./routeConfig"

import MainLayout from "../layouts/mainLayout";

const routes = routeConfig.map(route => ({
  path: route.path,
  element: route.element,
  children: route.children
}));

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: routes
    },
]);

export default router;