import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Contact from "../pages/Contact/Contact/Contact";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'order/:category',
        element:<Order></Order>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      }
    ],
  },
]);

export default router;