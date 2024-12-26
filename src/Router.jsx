import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/home-page/HomePage.jsx";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
