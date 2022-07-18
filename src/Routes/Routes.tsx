import ComponentLibrary from "../Components/Core/Library/ComponentLibrary";
import About from "../Components/Pages/About/About";
import Home from "../Components/Pages/Home/Home";
import LoginForm from "../Components/Pages/Login/Login";

export const RouteData = [
  { path: "/comp-lib", element: ComponentLibrary, auth: false },
  {
    path: "/home",
    element: Home,
    auth: false,
    isSide: true,
    name: "Homepage",
  },
  {
    path: "/login",
    element: LoginForm,
    auth: false,
    isSide: true,
    name: "LoginForm",
  },
  {
    path: "/about",
    element: About,
    auth: false,
    isSide: true,
    name: "About",
  },
];
