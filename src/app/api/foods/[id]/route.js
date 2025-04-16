import { ConnectionString } from "@/app/lib/Database";
import { FoodSchema } from "@/app/lib/FoodModal";
import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    try{
        const { id } =  content.params;
        let success = false;
        console.log("Connecting to MongoDB....");
        await mongoose.connect(ConnectionString);
        console.log("Connected MongoDB....");
        const result = await FoodSchema.find({ restaurant_ID: id });
    
        if (result.length > 0)
        {
            success = true;
        }
        return NextResponse.json({ result , success , message: "get data successfully"})
    }
    catch{
        return NextResponse.json({ success : false, message: "Failed to get data.."})
    }
}


export async function DELETE(request, content) {
    try {
        const { id } =  content.params;
        let success = false;
        console.log("Connecting to MongoDB....");
        await mongoose.connect(ConnectionString);
        console.log("Connected MongoDB....");
        const result = await FoodSchema.deleteOne({_id : id });

        if(result.ok){
            success = true;
        }
        return NextResponse.json({result, success : true, message:"data Delete successfully"})
    }
    catch{
        return NextResponse.json({ success : false, message:"Failed to get delete data.."})
    }
}
