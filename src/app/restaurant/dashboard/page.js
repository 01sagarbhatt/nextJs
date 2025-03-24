"use client";
import Add_footitem from "@/app/_components/Add_fooditem";
import FooditemList from "@/app/_components/FooditemList";
import { useState } from "react";

const Dashboard = () =>{
    const [addItem, SetaddItem] = useState(false);
    return(
        <div>
                    <h1 className="display-6 text-center bg-light">Dashboard </h1>
                <button onClick={()=>SetaddItem(true)} className="btn btn-primary">Add food item</button>
                <button onClick={()=>SetaddItem(false)} className="btn btn-success">Dashboard</button>
                {
                addItem ? <Add_footitem /> :  <FooditemList />

                }
        </div>
    )
}

export default Dashboard;
