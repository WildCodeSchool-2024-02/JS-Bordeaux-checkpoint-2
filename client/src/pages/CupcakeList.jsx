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
  const cupcakes = useLoaderData("cupcake");
  console.info(cupcakes);

  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.error(err));
  }, []);

  const [selectedAccessory, setSelectedAccessory] = useState("");
  const handleChange = (e) => {
    setSelectedAccessory(e.target.value);
  };

  console.info(selectedAccessory);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="---">---</option>
            {accessories.map((accessory) => (
              <option value={accessory.slug} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes
              .filter((cupcake) => selectedAccessory === "---" || cupcake.accessory === selectedAccessory)
              .map((cupcake) => (
                <li className="cupcake-item" key={cupcake.id}>
                  <Cupcake data={cupcake} />
                </li>
              ))}
      </ul>
    </>
  );
}

export default CupcakeList;
