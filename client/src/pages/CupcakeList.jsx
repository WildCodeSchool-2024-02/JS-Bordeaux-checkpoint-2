import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const allCupcakes = useLoaderData();

  const [cupcakesAccessories, setCupcakesAccessories] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  const handleSelectChange = (value) => {
    setSelectedAccessory(value);
  };

  const filteredCupcakes = allCupcakes.filter(
    (cupcake) =>
      selectedAccessory === "" || cupcake.accessory_id === selectedAccessory
  );

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setCupcakesAccessories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => handleSelectChange(e.target.value)}
            value={selectedAccessory}
          >
            <option value="">---</option>
            {cupcakesAccessories.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((item) => (
          <li key={item.id} className="cupcake-item">
            <Link to={`/cupcakes/${item.id}`}>
              <Cupcake data={item} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
