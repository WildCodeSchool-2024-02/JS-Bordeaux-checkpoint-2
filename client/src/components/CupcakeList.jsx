import { useLoaderData } from "react-router-dom";

import "./CupcakeList.css";

function CupcakeList() {
  const cupcakeList = useLoaderData();

  return console.info(cupcakeList);
}

export default CupcakeList;
