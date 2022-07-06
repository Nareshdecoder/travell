import ComponentLibrary from "../Components/Core/Library/ComponentLibrary";
import About from "../Components/Pages/About/About";
import Home from "../Components/Pages/Home/Home";
import LoginForm from "../Components/Pages/Login/Login";

export const RouteData = [
  // { path: "/", element: Login, auth: true },
  { path: "/comp-lib", element: ComponentLibrary, auth: false },
  {
    path: "/home",
    element: Home,
    auth: false,
    isSide: true,
    name: "Homepage",
    //   InActiveicon: <img src={sidebaricon} alt="side1" />,
    //   Activeicon: <img src={sidebariconActive} alt="side1" />,
  },
  {
    path: "/login",
    element: LoginForm,
    auth: false,
    isSide: true,
    name: "LoginForm",
    //   InActiveicon: <img src={Group} alt="side1" />,
    //   Activeicon: <img src={GroupActive} alt="side1" />,
  },
  {
    path: "/about",
    element: About,
    auth: false,
    isSide: true,
    name: "About",
    //   InActiveicon: <img src={Group} alt="side1" />,
    //   Activeicon: <img src={GroupActive} alt="side1" />,
  },
];
