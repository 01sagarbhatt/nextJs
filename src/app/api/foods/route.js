import mongoose from "mongoose";
import { ConnectionString } from "@/app/lib/Database";
import { FoodSchema } from "@/app/lib/FoodModal";
import { NextResponse } from "next/server";

export async function PUT(request) {
          try {
                    await mongoose.connect(ConnectionString);
                    const ItemData = await request.json();
                    await("Data Get" , ItemData)
                  
                    const food = new FoodSchema(ItemData);
                    const result = await food.save();
                    return NextResponse.json({ result, success: true, message: "Food Item Added Successfully" });
          } catch {
                    return NextResponse.json({ error: error.message, success: false }, { status: 500 });
                    
          }
}