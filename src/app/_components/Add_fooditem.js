"use client";
import { useState } from "react";

const Add_fooditem = () => {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [path, setPath] = useState("");
const [description, setDescription] = useState("");
const [inputError, setInputError] = useState(false);

function clearFields(event) {
  // we have to convert event.target to array
  // we use from method to convert event.target to array
  // after that we will use forEach function to go through every input to clear it
  //  Array.from(event.target).forEach((e) => (e.value = ""));
  setName('');
  setPrice('');
  setPath('');
  setDescription('');


}

const handleAddfoodItem = async (event) => {
  event.preventDefault();
  if(!name || !price || !path || !description){
    setInputError(true);
    return false;
  }else
  {
    setInputError(false);
  }
   let restoData = JSON.parse(localStorage.getItem("RegistrationUser"));
  let restaurant_ID = restoData._id;  
  
    alert(name,
      price,
      path,
      description,
      restaurant_ID
      );

    try{
      let response = await fetch("/api/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price : Number(price),
          path,
          description,
          restaurant_ID,
    
        }),

      });
if(response.ok){
  // console.log("Raw Response", response);
  alert("Food Item Added Successfully");
} else {
  const errorData = await response.json();
  alert(`Error: ${errorData.message}`);
}
    }catch{
      console.error("Error adding food item:");
      alert("Failed to add food item. Please try again.");
    }
    clearFields(event);

};
  return (
    <>
      <div>
        <h1 className="display-6 text-center">Add New Food Item</h1>
      
          <div className="container col-8 col-md-6 col-lg-4">
            <div className="row mb-3 justify-content-center">
            <form onSubmit={handleAddfoodItem}>
              <div>
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Food Name" className="mt-3 form-control"></input>
              {
                inputError && !name && <span style={{color:"red"}}>please enter item name</span>
              }
              </div>
              <div>
              <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Enter Price" className="mt-3 form-control"></input>
              {
                inputError && !price && <span style={{color:"red"}}>please enter item price</span>
              }
              </div>
              <div>
              <input type="text" value={path} onChange={(e)=> setPath(e.target.value)} placeholder="Enter Path" className="mt-3 form-control"></input>
              {
                inputError && !path && <span style={{color:"red"}}>please enter item path</span>
              }
              </div>
              <div>
              <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Enter Description" className="mt-3 form-control"></input>
              {
                inputError && !description && <span style={{color:"red"}}>please enter item description</span>
              }
              </div>
              
                <div>
            <button type="submit"  className="mt-2 btn btn-primary w-100">Add New Item</button>
              </div>
              </form>
            </div>
          </div>
      
      </div>
    </>
  );
};
export default Add_fooditem;
