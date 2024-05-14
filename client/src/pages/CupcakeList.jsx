import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
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
  const cupcakesData = useLoaderData();
  const [cupcakesAccessories, setCupcakesAccessories] = useState();
  const [accessorieFilter, setAccessorieFilter] = useState("hello");
  const [isLoading, setIsLoading] = useState(true);

  // Step 3: get all accessories

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        setCupcakesAccessories(data);
        setIsLoading(false);
      });
  }, []);

  // Step 5: create filter state
  // console.log(cupcakesData.filter())
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={accessorieFilter}
            onChange={(e) => setAccessorieFilter(e.target.value)}
          >
            {cupcakesAccessories.map((cupcakeAccessorie) => (
              <option value={cupcakeAccessorie.name} key={cupcakeAccessorie.id}>
                {cupcakeAccessorie.name}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          {cupcakesData.map((cupcake) => (
            <Link to={`/cupcakes/${cupcake.id}`} key={cupcake.id}>
              <Cupcake data={cupcake} key={cupcake.id} />
            </Link>
          ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
