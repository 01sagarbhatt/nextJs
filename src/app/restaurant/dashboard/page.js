"use client";
import Add_footitem from "@/app/_components/Add_fooditem";
import FooditemList from "@/app/_components/FooditemList";
import { useState } from "react";

const Dashboard = () =>{
    const [addItem, SetAddItem] = useState(false);
    return(
        <div>
   
                    <h1 className="display-6 text-center bg-light">Dashboard </h1>
                <button onClick={()=>SetAddItem(true)} className="ms-2 btn btn-primary">Add food item</button>
                <button onClick={()=>SetAddItem(false)} className="ms-2 btn btn-success">Dashboard</button>
                {
                addItem ? <Add_footitem /> :  <FooditemList />
                }
     
        </div>
    )
}

export default Dashboard;
