import React, { useContext } from "react";
import { authRoutes, publicRoutes } from "../routes";
import { observer } from "mobx-react-lite";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { MAINPAGE_ROUTE } from "../utils/consts";
import { Context } from "../index";
import classes from "./styles/app.module.css";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  const { isAuth } = user;
  return (
    <div className={classes.AppRouter}>
      <Routes>
        {publicRoutes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={route.component}
            exact={true}
          />
        ))}
        {isAuth
          ? authRoutes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={route.component}
                exact={true}
              />
            ))
          : ""}
        <Route
          key={"any"}
          path={"*"}
          element={<Navigate to={MAINPAGE_ROUTE} />}
          exact={false}
        />
      </Routes>
    </div>
  );
});

export default AppRouter;
