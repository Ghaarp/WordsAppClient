import Main from "./pages/Main";
import {
  CARDS_LIST_ROUTE,
  CREATE_ROUTE,
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REGISTER_ROUTE,
} from "./utils/consts";
import Auth from "./pages/Auth";
import Create from "./pages/Create";
import CreateCardComponent from "./components/translation/CreateCardComponent";
import Cards from "./pages/Cards";

export const authRoutes = [
  {
    path: MAINPAGE_ROUTE,
    component: <Main />,
  },
  {
    path: CREATE_ROUTE,
    component: <CreateCardComponent />,
  },
  {
    path: CARDS_LIST_ROUTE,
    component: <Cards />,
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
