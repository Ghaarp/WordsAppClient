import Main from "./pages/Main";
import {
  CARD_ROUTE,
  CARDS_LIST_ROUTE,
  CREATE_ROUTE,
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REGISTER_ROUTE,
} from "./utils/consts";
import Auth from "./pages/Auth";
import CardDataComponent from "./components/translation/CardDataComponent";
import Cards from "./pages/Cards";
import CardPage from "./pages/CardPage";
import Create from "./pages/Create";

export const authRoutes = [
  {
    path: MAINPAGE_ROUTE,
    component: <Main />,
  },
  {
    path: CREATE_ROUTE,
    component: <Create />,
  },
  {
    path: CARDS_LIST_ROUTE,
    component: <Cards />,
  },
  {
    path: CARD_ROUTE,
    component: <CardPage />,
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
