import mongoose from "mongoose";
import { ConnectionString } from "@/app/lib/Database";
import { RestaurantSchema } from "@/app/lib/Model";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(ConnectionString);
    const data = await RestaurantSchema.find();
  return NextResponse.json({ result: data });
}

export async function PUT(request) {
    try
    {
        await mongoose.connect(ConnectionString);
        const payload = await request.json();
        const restaurant = new RestaurantSchema(payload);
        const result = await restaurant.save();
        return NextResponse.json({ result, success: true, message: "Restaurant successfully saved!" });
    }
    catch (error) {
        return NextResponse.json({ error: error.message, success: false }, { status: 500 });
    }

}
