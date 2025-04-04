import { ConnectionString } from "@/app/lib/Database";
import { FoodSchema } from "@/app/lib/FoodModal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
          const { id } = await content.params;
          let success = false;
          await mongoose.connect(ConnectionString);
          let result = await FoodSchema.findOne({ _id: id });
          return NextResponse.json({ result, success: true });
}
 

export async function PUT(request, content) {
          const { id } = await content.params;
          const payload = await request.json();
          let success = false;
          await mongoose.connect(ConnectionString);
          const result = await FoodSchema.findOneAndUpdate(
            { _id: id },
            payload,
            { new: true } // return updated document
          );
        
          if (result) {
            success = true;
          }
        
          return NextResponse.json({ result, success });
        }