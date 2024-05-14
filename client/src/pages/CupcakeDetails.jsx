import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails () {
   const data = useLoaderData();
   return (
      <Cupcake data={data}/>
   )
}

export default CupcakeDetails;