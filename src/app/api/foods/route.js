import mongoose from "mongoose";
import { ConnectionString } from "@/app/lib/Database";
import { FoodSchema } from "@/app/lib/FoodModal";
import { NextResponse } from "next/server";

export async function POST(request) {
          try {
                    await mongoose.connect(ConnectionString);
                    const payload = await request.json();
                    const Food = new FoodSchema(payload);
                    const result = await Food.save();
                    return NextResponse.json({ result, success: true, message: "Food Item Added Successfully" });
          } catch {
                    return NextResponse.json({ error: error.message, success: false }, { status: 500 });
                    
          }
}