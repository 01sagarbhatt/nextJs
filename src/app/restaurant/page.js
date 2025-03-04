"use client";
import { useState } from "react";
import Login from "../_componets/Login";
import SingUp from "../_componets/SingUp";





const Restaurant = () => {
          const [isLogin, setIsLogin] = useState(true);
          return (
                    <>
                              <div className="container">
                        
                              <h1 className="display-6 text-center mb-3">Restaurant Login / SingUP Page</h1>
                              <div  className="w-50" id="CenterBlockElement">
                         
                              { isLogin ?   <Login /> : <SingUp /> }
                           
                              
                              <button onClick={()=> setIsLogin(! isLogin)} className="btn btn-success w-100 mt-5">
                                        {isLogin ? "Do not have Account? SingUp" : "Already have a Account? Login"}
                              </button>
                              </div>
                              </div>
                              
                           
                       
                    </>
          )
}
export default Restaurant;