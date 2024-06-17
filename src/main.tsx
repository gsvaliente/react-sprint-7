import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { Homepage } from "./components/Homepage.tsx";
import { NotFound } from "./components/NotFound.tsx";
import { ShipDetails } from "./components/ShipDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />,
  },
  {
    path: "/starships",
    element: <App />,
  },
  {
    path: "/starships/:url",
    element: <ShipDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
