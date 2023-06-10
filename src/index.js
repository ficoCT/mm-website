import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './scss/main.scss';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Staff from "./routes/Staff";
import Courses from "./routes/Courses";
import Service from "./routes/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  </React.StrictMode>
);

