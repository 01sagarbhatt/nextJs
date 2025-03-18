import { useState } from "react";

const Add_footitem = () => {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [path, setPath] = useState("");
const [description, setDescription] = useState("");

function clearFields(event) {
  // we have to convert event.target to array
  // we use from method to convert event.target to array
  // after that we will use forEach function to go through every input to clear it
   Array.from(event.target).forEach((e) => (e.value = ""));

}

const handleAddfoodItem = (event)=>{
  event.preventDefault();

  
   
    alert(name+price+path+description);
    clearFields(event);

}
  return (
    <>
      <div>
        <h1 className="display-6 text-center">Add New Food Item</h1>
      
          <div className="container w-25">
            <div className="row mb-3 justify-content-center">
            <form onSubmit={handleAddfoodItem}>
              <div>
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Food Name" className="mt-3 form-control"></input>
              </div>
              <div>
              <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Enter Price" className="mt-3 form-control"></input>
              </div>
              <div>
              <input type="text" value={path} onChange={(e)=> setPath(e.target.value)} placeholder="Enter Path" className="mt-3 form-control"></input>
              </div>
              <div>
              <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Enter Description" className="mt-3 form-control"></input>
              </div>
              
                <div>
            <button type="submit" value={name} className="mt-2 btn btn-primary w-100">Add New Item</button>
              </div>
              </form>
            </div>
          </div>
      
      </div>
    </>
  );
};
export default Add_footitem;
