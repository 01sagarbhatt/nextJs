import { ConnectionString } from "@/app/lib/Database";
import { FoodSchema } from "@/app/lib/FoodModal";
import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    try{
        const { id } = await content.params;
        let success = false;
        console.log("Connecting to MongoDB....");
        await mongoose.connect(ConnectionString);
        console.log("Connected MongoDB....");
        const result = await FoodSchema.find({ restaurant_ID: id });
    
        
        if(result.ok){
            success = true;
        }

        
        return NextResponse.json({result, success : true, message:"get data successfully"})

    }
    catch{

    }
}