import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const someCupcakes = [];
someCupcakes.push(
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  }
);

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const getCupcake = useLoaderData();
  console.info(getCupcake);
  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3310/api/accessories`)
      .then((response) => response.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.error(err));
  }, []);
  console.info(accessories);
  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            {accessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.name}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {getCupcake &&
          getCupcake.map((cupcake) => (
            <Cupcake key={cupcake.id} data={cupcake} />
          ))}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake data={getCupcake} />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
