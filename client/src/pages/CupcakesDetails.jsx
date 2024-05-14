import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const finalCupcake = useLoaderData();

  return <Cupcake data={finalCupcake} />;
}

export default CupcakeDetails;
