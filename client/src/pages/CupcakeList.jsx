import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  // Step 1: get all cupcakes

  const cupcakeData = useLoaderData();
  console.info(cupcakeData);

  // Step 3: get all accessories

  const [accessoriesData, setAccessoriesData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessoriesData(data))
      .catch((error) => {
        console.error("erreur lors du fetch accessoires", error);
      });
  },[]);
  console.info(accessoriesData)

  // Step 5: create filter state



  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}

            {accessoriesData.map((data) => (
          <option key={accessoriesData.id}>{data.name}</option>))}
          
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakeData.map((cupcake) => (
          <li key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
