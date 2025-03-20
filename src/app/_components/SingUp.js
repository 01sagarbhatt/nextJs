import { useRouter } from "next/navigation";
import { useState } from "react";


const SingUp = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
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

    }if(!fname || !lname || !email || !password || !passwordConfirm){
      setError(true);
      return false;
    }else{
      setError(false);
    }


     

    // alert(fname + lname + email +password +passwordConfirm);
    try {
      let response = await fetch("/api/restaurant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, lname, email, password, passwordConfirm }),
      });

      console.log("Response Object:", response);
      
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      console.log("this is data", data.ResponseResult);




      if (data.success) {
        alert("Registration is Successfully");
      }
      console.log("Response:", JSON.stringify(data, " ", 10));
      console.log("Message", data.message);

      
      // delete data.result.password;
      // delete data.result.passwordConfirm;
      localStorage.setItem('RegistrationUser', JSON.stringify(data.result));
      router.push("restaurant/dashboard");


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
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={fname}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            {
              error && !fname && <span style={{color:"red"}}>please enter your first name</span>
            }
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lname}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
             {
              error && !lname && <span style={{color:"red"}}>please enter your last name</span>
            }
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
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
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          
          </div>
       
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
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
            SingUp
          </button>
        </form>
      </div>
    </>
  );
};
export default SingUp;
