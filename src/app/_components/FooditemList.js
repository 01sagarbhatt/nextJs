import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";



const FooditemList = () => {
  let [fooditems, setFooditems] = useState([]); // Initialize as Blank array
  const Router = useRouter();

  useEffect(() => {
    LoodFoodItems();
  }, []);





  const LoodFoodItems = async () => {
    try {
      let restoData = JSON.parse(localStorage.getItem("RegistrationUser"));
      if (!restoData || !restoData._id) {
        alert("User not found in local storage");
        return;
      }

      let restaurant_ID = restoData._id;  
        // console.log("Fetching foods for restaurant:", restaurant_ID);

      let response = await fetch(`http://localhost:3000/api/foods/${restaurant_ID}`);
      response = await response.json();
      // console.log(response);

      if (response.success) {
        setFooditems(response.result); // Store result in state
      } else {
        alert("Item not loading");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log(typeof fooditems); // Will show 'object' if response.result is an object

  const x = JSON.stringify(fooditems, null, 3);
  // console.log(x); // Converts the object to a string with indentation
  // console.log(typeof x); // Will show 'string' since x is stringified


        const DeleteFoodItems = async (id) => {
          try {
            let response = await fetch("http://localhost:3000/api/foods/"+id , {
              method: 'delete'
            });
            response = await response.json();
            console.log("this is Delete Res", response);
            if (response.success) {
              LoodFoodItems();
            } else {
              alert("food item not deleted...");
            }
          }
          catch (error){
            console.error("Error deleting data:", error);
          }
      }

  return (
    <div>
      <div>
      <h3 className="display-6 text-center">Food Items</h3>
      {/* {fooditems ? (
        <pre>{x}</pre> // Show data as formatted JSON
      ) : (
        <p>Loading...</p>
        )} */}
        {fooditems.length > 0 ? (
          <div className="container">
        <table className="table table-responsive">
          <thead>
            <tr>
            {/* <th scope="col">ID</th> */}
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
                {/* <td scope="col">{item._id}</td> */}
                <td scope="col">{item.name}</td>
                <td scope="col">{item.price}</td>
                <td scope="col">
                  <img className="img-fluid" src={item.path} width={"200px"}></img>
                </td>
                <td scope="col">{item.description}</td>
                <td scope="col">
                  <button className="btn btn-primary" onClick={ () => Router.push("dashboard/"+item._id)}>Edit</button>
    
                </td>
                <td>
                <button onClick={ () => DeleteFoodItems(item._id)} className="btn btn-danger ms-2">Delete</button>       

                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>

      ) : (
        <p>No Food Items</p>
      )}
       
      </div>
    </div>
  );
};

export default FooditemList;
