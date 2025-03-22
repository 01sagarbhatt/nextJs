import mongoose from "mongoose";
import { ConnectionString } from "@/app/lib/Database";
import { FoodSchema } from "@/app/lib/FoodModal";
import { NextResponse } from "next/server";

export async function POST(request) {
          try {
                    console.log("Connecting to MongoDB...");
                    await mongoose.connect(ConnectionString);
                    console.log("Connected to MongoDB!");
                    const payload = await request.json();
                    console.log("Payload received:", payload);

                    const Food = new FoodSchema(payload);
                    const result = await Food.save();
                    console.log("Data saved successfully:", result);
                    return NextResponse.json({
                              result,
                              success: true,
                              message: "Food Item Added Successfully",
                    });
          } catch {
                    console.error("Error occurred:");
                    return NextResponse.json({
                              success: false
                    }, { status: 500 });
                    
          }
}