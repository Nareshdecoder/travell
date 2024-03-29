import ComponentLibrary from "../Components/Core/Library/ComponentLibrary";
import About from "../Components/Pages/About/About";
import Home from "../Components/Pages/Home/Home";
import LoginForm from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Regisrter/Register";

export const RouteData = [
  { path: "/comp-lib", element: ComponentLibrary, auth: false },
  {
    path: "/home",
    element: Home,

    name: "Homepage",
  },
  {
    path: "/login",
    element: LoginForm,

    name: "LoginForm",
  },
  {
    path: "/about",
    element: About,

    name: "About",
  },

  {
    path: "/register",
    element: Register,

    name: "Register",
  },
];
