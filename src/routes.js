import Main from "./pages/Main";
import {
  CREATE_ROUTE,
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REGISTER_ROUTE,
} from "./utils/consts";
import Auth from "./pages/Auth";
import Create from "./pages/Create";
import CreateCardComponent from "./components/translation/CreateCardComponent";

export const authRoutes = [
  {
    path: MAINPAGE_ROUTE,
    component: <Main />,
  },
  {
    path: CREATE_ROUTE,
    component: <CreateCardComponent />,
  },
];

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
