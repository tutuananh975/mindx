import Home from "../pages/index";
import About from "../pages/about";
import Layouts from "../layouts";
import Auth from "../layouts/auth";
import Login from "../pages/login";

export const listRouter = [
  {
    path: "",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "",
        element: <Login />,
      }
    ]
  }

]