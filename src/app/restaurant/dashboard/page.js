"use client";
import Add_footitem from "@/app/_componets/Add_fooditem";
import { useState } from "react";

const Dashboard = () =>{
    const [addItem, SetaddItem] = useState(false);
    return(
        <div>

                <button onClick={()=>SetaddItem(true)} className="btn btn-primary">Add food item</button>
                <button onClick={()=>SetaddItem(false)} className="btn btn-success">Dashboard</button>
                {
                addItem ? <Add_footitem /> : <h1 className="display-6 text-center">Welcome to you Dashboard </h1>

                }
        </div>
    )
}

export default Dashboard;
