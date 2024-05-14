import { useState, useEffect } from "react";
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
  const cupcakeData = useLoaderData();
  const [accessoryData, setAccessoryData] = useState([]);
  const [filterResult, setFilterResult] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3310/api/accessories`)
      .then((result) => result.json())
      .then((data) => {
        setAccessoryData(data);
      });
  });

  const handleFilterChange = (event) => {
    setFilterResult(event.target.value);
  };

  const filteredCupcakes = filterResult
    ? cupcakeData.filter(
        (cupcake) => cupcake.accessory_id === filterResult
      )
    : cupcakeData;

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={filterResult}
            onChange={handleFilterChange}
          >
            <option value="">---</option>
            {accessoryData.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
