import { useParams } from "react-router-dom";

function CupcakeDetails() {
  const { id } = useParams();
  return <p>{id}</p>;
}

export default CupcakeDetails;
