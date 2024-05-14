import { useState, useEffect } from "react";
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
  const [cupcakeList, setCupcakeList] = useState([]);
  const [accessoriesList, setAccessoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetch("http://localhost:3310/api/cupcakes")
      .then((result) => result.json())
      .then((data) => {
        setCupcakeList(data);
        setIsLoading(false);
        console.info(data);
});

  fetch("http://localhost:3310/api/accessories")
    .then((result) => result.json())
    .then((data) => {
      setAccessoriesList(data);
      console.info(data);
    })
}, []);

  // Step 5: create filter state
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
          <select id="cupcake-select">
            <option value="">---</option>
            {accessoriesList.map((accessories) => (
            <option key={accessories.id}
              value={accessories.name}
            >{accessories.name}</option>
          ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakeList.map((cupcake) => (
          <Cupcake
          key={cupcake.id}
          data={cupcake}
          />
          ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
