import Main from "./pages/Main";
import React from "react";
import {
  CARD_ROUTE,
  CARDS_LIST_ROUTE,
  CREATE_ROUTE,
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REGISTER_ROUTE,
} from "./utils/consts";
import Authorization from "./pages/Authorization";
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
    component: <Authorization />,
  },
  {
    path: REGISTER_ROUTE,
    component: <Authorization />,
  },
];
