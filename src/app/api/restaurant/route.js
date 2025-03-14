import mongoose from "mongoose";
import { ConnectionString } from "@/app/lib/Database";
import { RestaurantSchema } from "@/app/lib/Model";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(ConnectionString);
    const data = await RestaurantSchema.find();
  return NextResponse.json({ result: data });
}

// export async function PUT(request) {                  
//     try
//     {
//         await mongoose.connect(ConnectionString);
//         const payload = await request.json();
//         const restaurant = new RestaurantSchema(payload);
//         const result = await restaurant.save();
//         return NextResponse.json({ result, success: true, message: "Restaurant successfully saved!" });
//     }
//     catch (error) {
//         return NextResponse.json({ error: error.message, success: false }, { status: 500 });
//     }

// }

export async function PUT(request){
  const payload = await request.json();
  await mongoose.connect(ConnectionString);
  let result;
  let success = false;

  if(payload?.login)
  {
    result = await RestaurantSchema.findOne({
      email:payload.email, 
      password:payload.password
    });

    if(result){
      success = true;
    }
  }
  else
  {
    const restaurant = new RestaurantSchema(payload);
    const result = await restaurant.save();
    if(result){
      success = true;
    }

  }
  return NextResponse.json({ result, success});

}

