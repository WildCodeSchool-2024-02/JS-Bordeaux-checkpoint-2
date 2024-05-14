import { useLoaderData, useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();

  const cupcakes = useLoaderData("cupcake");

  return (
    <>
      {cupcakes
        .filter((cupcake) => cupcake.id.toString() === id)
        .map((cupcake) => (
          <Cupcake data={cupcake} key={cupcake.id} />
        ))}
    </>
  );
}

export default CupcakeDetails;
