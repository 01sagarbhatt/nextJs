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
  try{
    const payload = await request.json();
    await mongoose.connect(ConnectionString);
    let result;

  if(payload.login)
  {
    result = await RestaurantSchema.findOne({
      email:payload.email, 
      password:payload.password
    });

  }
  else
  {
    const restaurant = new RestaurantSchema(payload);
    result = await restaurant.save();
  }
  console.log("DB Save Result:", result);
  return NextResponse.json({ result, success: true, message: "Restaurant successfully saved!" });
}catch (error) {
  console.error("API Error:", error);
  return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
}
}

