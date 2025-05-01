import { ConnectionString } from "@/app/lib/Database";
import { RestaurantSchema } from "@/app/lib/Model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(request) {
          const { searchParams } = new URL(request.url);
          const restaurant = searchParams.get("restaurant");
          const location = searchParams.get("location");
        
          let filter = {};
        
          if (location) {
            filter = { city: { $regex: new RegExp(location, "i") } };
          } else if (restaurant) {
            filter = { restoName: { $regex: new RegExp(restaurant, "i") } };
            
          }
        
          await mongoose.connect(ConnectionString);
          let result = await RestaurantSchema.find(filter);
        
          return NextResponse.json({ success: true, result });
        }
        