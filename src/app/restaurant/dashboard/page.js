"use client";
import Add_footitem from "@/app/_components/Add_fooditem";
import FooditemList from "@/app/_components/FooditemList";
import getLocalUser from "../utils/getUser";
import { useEffect, useState } from "react";

const Dashboard = () =>{
    const [addItem, SetAddItem] = useState(false);
    const [user, setUser] = useState("");

    useEffect(() => {
        const user = getLocalUser();
        setUser(user);
    }, []);
    return(
        <div>
   
            <h1 className="display-6 text-center bg-light">Dashboard     {user.restoName
                }</h1>
                <button onClick={()=>SetAddItem(true)} className="ms-2 btn btn-primary">Add food item</button>
                <button onClick={()=>SetAddItem(false)} className="ms-2 btn btn-success">Dashboard</button>
                {
                addItem ? <Add_footitem /> :  <FooditemList />
                }
     
        </div>
    )
}

export default Dashboard;
