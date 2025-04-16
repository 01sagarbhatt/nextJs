import { ConnectionString } from "@/app/lib/Database";
import { RestaurantSchema } from "@/app/lib/Model";
import mongoose, { set } from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
          await mongoose.connect(ConnectionString); 
          let data = await RestaurantSchema.find();
          data = data.map((item) => item.city);
       const  result = [ ...new Set(data)];

          return NextResponse.json({ success: true, result });
}