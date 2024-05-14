import { useLoaderData, useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();
  const cupcakesData = useLoaderData();
  const cupcakeDetails = cupcakesData.filter(
    (cupcake) => cupcake.id.toString() === id
  );

  return <Cupcake data={cupcakeDetails[0]} />;
}

export default CupcakeDetails;
