import React, { useContext, Suspense } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NavBar } from "./components/NavBar";
import { Router, Redirect } from "@reach/router";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

const Favs = React.lazy(() => import("./pages/Favs"));
/* const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Detail"));
const User = React.lazy(() => import("./pages/User"));
const NoRegisteredUser = React.lazy(() => import("./pages/NotRegisteredUser")); */
/* const NotFound = React.lazy(() => import("./pages/NotFound")); */

export const App = () => {
  const { isAuth } = useContext(Context);
  /* 
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail"); */

  return (
    <Suspense fallback={<div />}>
      {" "}
      {/* Pendiente agregar el Loading */}
      <GlobalStyles />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:especieId/:especie" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};
