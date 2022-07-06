import { createBrowserHistory } from "history";

import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import About from "../Components/Pages/About/About";
import Home from "../Components/Pages/Home/Home";
import LoginForm from "../Components/Pages/Login/Login";
import Payment from "../Components/Payment/Payment";
import Tour from "../Components/Tour/Tour";
import Trips from "../Components/Trips/Trips";

import { getFromSession } from "../Utils/SessionStorage/sessionStorage";
import { RouteData } from "./Routes";
const history = createBrowserHistory();
const CustomRoutes = () => {
  const [logged, setLogged] = useState(null);
  const [lock, setLock] = useState(false);
  let loggedData: any = getFromSession("loggedData");

  useEffect(() => {
    if (loggedData && !logged) {
      setLogged(loggedData);
    }
    setLock(true);
  }, []);
  console.log("logged", loggedData, lock);
  const renderComponents = (Component: any) => {
    return <Component isLoggedData={setLogged} />;
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour/:id" element={<Tour />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/payment/:name" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
};
export default CustomRoutes;
