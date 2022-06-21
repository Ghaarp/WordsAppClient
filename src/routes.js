import Main from "./pages/Main";
import {
  AUTH_ROUTE,
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REGISTER_ROUTE,
} from "./utils/consts";
import Auth from "./pages/Auth";

export const authRoutes = [];

export const publicRoutes = [
  {
    path: MAINPAGE_ROUTE,
    component: <Main />,
  },
  {
    path: LOGIN_ROUTE,
    component: <Auth />,
  },
  {
    path: REGISTER_ROUTE,
    component: <Auth />,
  },
];
