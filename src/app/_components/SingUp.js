import { useRouter } from "next/navigation";
import { useState } from "react";


const SingUp = () => {
  const [fname, setFullName] = useState("");
  const [restoName, setRestaurantName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [error , setError] = useState(false);
  const router = useRouter();

  function clearFields(event) {
    // we have to convert event.target to array
    // we use from method to convert event.target to array
    // after that we will use forEach function to go through every input to clear it
    // Array.from(event.target).forEach((e) => (e.value = ""));
    event.target.reset(); //
  }

  const handleSingUp = async (event) => {
    event.preventDefault();

    
    if (password !== passwordConfirm) {
      // alert("im on if statement");
      setPasswordError(true);
      return false;
    }else{
      setPasswordError(false);

    }if(!fname || !restoName || !email || !city || !password || !passwordConfirm){
      setError(true);
      return false;
    }else{
      setError(false);
    }


     

    alert(fname + restoName + email +city +password +passwordConfirm);
    try {
      let response = await fetch("/api/restaurant", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fname,
          restoName,
          email,
          city,
          password,
          passwordConfirm
        }),
      });

      console.log("Response Object:", response);
      
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      console.log("this is data", data.result);
  
      



      if (data.success) {
        alert("Registration is Successfully");
      }
      console.log("Response:", JSON.stringify(data, " ", 10));
      console.log("Message", data);

      
      // delete data.result.password;
      // delete data.result.passwordConfirm;
      localStorage.setItem('RegistrationUser', JSON.stringify(data.result));
      // router.push("restaurant/dashboard");


    } catch (error) {
      console.error("Error in Signup:", error);
    }
    clearFields(event);
  };

  return (
    <>
      <div>
        <h1 className="display-6 text-center">Restaurant SingUp</h1>
        <form onSubmit={handleSingUp}>

          <div className="mb-3">
            <input
              placeholder="Enter Your Full Name"
              type="text"
              className="form-control"
              value={fname}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            {
              error && !fname && <span style={{color:"red"}}>please enter your full name</span>
            }
          </div>

          
          <div className="mb-3">
            <input
              placeholder="Enter Restaurant Name"
              type="text"
              className="form-control"
              value={restoName}
              onChange={(e) => setRestaurantName(e.target.value)}
            ></input>
             {
              error && !restoName && <span style={{color:"red"}}>please enter your restaurant name</span>
            }
          </div>


          <div className="mb-3">
            <input
              placeholder="Enter Your Email Address"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
             {
              error && !email && <span style={{color:"red"}}>please enter your email name</span>
            }
          </div>


          <div className="mb-3">
            <input
              placeholder="Enter Your City Name"
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
             {
              error && !city && <span style={{color:"red"}}>please enter your city name</span>
            }
          </div>


          <div className="mb-3">
            <input
              placeholder="Enter Your Password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
       
          
          <div className="mb-3">
            <input
              placeholder="Enter Your Confirm Password"
              type="password"
              className="form-control"
              value={passwordConfirm}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
           {
              passwordError && <span style={{color:"red"}}>password and confirm password not match</span>
            }
          </div>
   
          <button type="submit" className="btn btn-warning w-100">
          Restaurant Registation
          </button>
        </form>
      </div>
    </>
  );
};
export default SingUp;
