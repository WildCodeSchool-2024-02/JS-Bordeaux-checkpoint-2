import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import CupcakeList from "./pages/CupcakeList";
import CupcakeDetails from "./pages/CupcakeDetails";

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
        // Step 1: load data here
        loader: () => fetch("http://localhost:3310/api/cupcakes")
          .then(result => result.json())
          .then(data => data)
          .catch(err => console.error(err))
        ,
      },
      {
        path: "/cupcakes/:id",
        element: <CupcakeDetails />,
        loader: ({ params }) => fetch(`http://localhost:3310/api/cupcakes/${params.id}`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err))
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
