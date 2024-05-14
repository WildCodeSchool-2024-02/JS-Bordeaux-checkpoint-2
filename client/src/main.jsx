import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import CupcakeList from "./pages/CupcakeList";
import CupcakeDetails from "./pages/CupcakeDetails";

// Alex method

// const fetchId = (id) =>
//   fetch(`http://localhost:3310/api/cupcakes/${id}`)
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => {
//       console.error("Erreur lors de la récupération", error);
//     });


// Refacto correction method
const fetchApi = (url) => 
  fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch((error) => {
    console.error("Erreur lors de la récupération", error);
  })

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

        // Refacto correction method
        loader: () => fetchApi("http://localhost:3310/api/cupcakes")

        // Alex method
        // loader: () =>
        //   fetch("http://localhost:3310/api/cupcakes")
        //     .then((response) => response.json())
        //     .then((data) => data)
        //     .catch((error) => {
        //       console.error("Erreur lors de la récupération", error);
        //     }),
      },
      {
        path: "/cupcakes/:id",
        element: <CupcakeDetails />,

        // Refacto correction method
        loader: ({params}) => fetchApi(`http://localhost:3310/api/cupcakes/${params.id}`) 

        // Alex method

        // loader: (
        //   { params } //fetchId(params.id),
        // ) =>
        //   fetch(`http://localhost:3310/api/cupcakes/${params.id}`)
        //     .then((response) => response.json())
        //     .then((data) => data)
        //     .catch((error) => {
        //       console.error("Erreur lors de la récupération", error);
        //     }),
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
