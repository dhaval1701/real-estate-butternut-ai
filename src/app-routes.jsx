import React, { lazy, Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Home from "./modules/pages/home";
import Services from "./modules/pages/services";
import Testimonials from "./modules/pages/Testimonials";
import About from "./modules/pages/about";
import Contact from "./modules/pages/contact-us";

export const router = createBrowserRouter([
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
    ],
  },
]);
