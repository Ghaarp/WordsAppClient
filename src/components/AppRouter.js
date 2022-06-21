import React from "react";
import { authRoutes, publicRoutes } from "../routes";
import { observer } from "mobx-react-lite";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { MAINPAGE_ROUTE } from "../utils/consts";

const AppRouter = observer(() => {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, i) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
            exact={true}
          />
        ))}
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
