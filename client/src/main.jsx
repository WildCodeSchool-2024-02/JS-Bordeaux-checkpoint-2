import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import CupcakeList from "./pages/CupcakeList";
import CupcakeDetails from "./pages/CupcakeDetails";

const getCupcakes = () =>
  fetch("http://localhost:3310/api/cupcakes")
    .then((res) => res.json())
    .then((data) => data);

const getCupcakesById = (id) =>
  fetch(`http://localhost:3310/api/cupcakes/${id}`)
    .then((res) => res.json())
    .then((data) => data);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        loader: () => getCupcakes(),
      },
      {
        path: "/cupcakes/:id",
        element: <CupcakeDetails />,
        loader: ({ params }) => getCupcakesById(params.id),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
