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
  const allCupcakes = useLoaderData();
  const [accessories, setAccessories] = useState([]); 
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => {
        console.info(data); 
        setAccessories(data); 
      })
      .catch((error) => {
        console.error("Error fetching accessories:", error);
      });
  }, []); 

  const handleAccessoryChange = (event) => {
    setSelectedAccessory(event.target.value);
  };

  const filteredCupcakes =
    selectedAccessory === ""
      ? allCupcakes 
      : allCupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessory);
      
        return (
          <>
            <h1>My cupcakes</h1>
            <form className="center">
              <label htmlFor="cupcake-select">
                Filter by{" "}
                <select id="cupcake-select" onChange={handleAccessoryChange} value={selectedAccessory}>
                  <option value="">---</option>
                  {accessories.map((accessory) => (
                    <option key={accessory.id} value={accessory.id}>
                      {accessory.name}
                    </option>
                  ))}
                </select>
              </label>
            </form>
            <ul className="cupcake-list" id="cupcake-list">
              {/* Repeat this block for each cupcake */}
              {filteredCupcakes.map((cupcake) => (
                <li className="cupcake-item" key={cupcake.id}>
                  <Cupcake cupcake={cupcake} />
                </li>
              ))}
            </ul>
          </>
        );
      }
    
      export default CupcakeList;
      
