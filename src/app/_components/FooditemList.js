import { useEffect } from "react";
import { useState } from "react";


const FooditemList = () => {
  let [fooditems, setFooditems] = useState([]); // Initialize as Blank array

  useEffect(() => {
    LoodFoodItems();
  }, []);

  const LoodFoodItems = async () => {
    try {
      let response = await fetch("http://localhost:3000/api/foods/67c7fd56b40ba55916fe074c");
      response = await response.json();
      console.log(response);

      if (response.success) {
        setFooditems(response.result); // Store result in state
      } else {
        alert("Item not loading");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(typeof fooditems); // Will show 'object' if response.result is an object

  const x = JSON.stringify(fooditems, null, 3);
  console.log(x); // Converts the object to a string with indentation
  console.log(typeof x); // Will show 'string' since x is stringified


  return (
    <div>
      <div>
      <h3>Food Items:</h3>
      {/* {fooditems ? (
        <pre>{x}</pre> // Show data as formatted JSON
      ) : (
        <p>Loading...</p>
        )} */}
        {fooditems.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
            <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {fooditems.map((item, index) => (
              <tr key={index}>
                <td scope="col">{item._id}</td>
                <td scope="col">{item.name}</td>
                <td scope="col">{item.price}</td>
                <td scope="col">
                  <img src={item.path} width={"200px"}></img>
                </td>
                <td scope="col">{item.description}</td>
                <td scope="col">
                <button className="btn btn-primary">Edit</button>                                                              
                <button className="btn btn-danger ms-2">Delete</button>       
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
       
      </div>
    </div>
  );
};

export default FooditemList;
