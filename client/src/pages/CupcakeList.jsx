import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

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

function CupcakeList() {
  const cupcakesData = useLoaderData();

  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.error(err));
  }, []);

  const [filter, setFilter] = useState(cupcakesData);

  const handleFilter = ({ target: { value } }) => {
    setFilter(value === "" ? cupcakesData : cupcakesData.filter((cupcake) => cupcake.accessory === value));
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleFilter}>
            <option value="">---</option>
            {accessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.slug}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filter.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
