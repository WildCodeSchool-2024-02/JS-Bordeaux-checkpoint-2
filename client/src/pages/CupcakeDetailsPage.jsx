import { useLoaderData } from "react-router-dom";

import Cupcake from "../components/Cupcake";

function CupcakeDetailsPage() {
    // const {id} = useParams();
    const cupcake = useLoaderData;
return (
    <Cupcake cupcake={cupcake}/>
)}

export default CupcakeDetailsPage;
