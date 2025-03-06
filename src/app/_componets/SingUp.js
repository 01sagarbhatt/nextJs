import { useRouter } from "next/navigation";
import { useState } from "react";


const SingUp = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter();

  function clearFields(event) {
    // we have to convert event.target to array
    // we use from method to convert event.target to array
    // after that we will use forEach function to go through every input to clear it
    Array.from(event.target).forEach((e) => (e.value = ""));
  }

  const handleSingUp = async (event) => {
    
    if (password !== passwordConfirm) {
      alert("im on if statement");
      setPasswordError(true);

  
    } 

    event.preventDefault();
    // alert(fname + lname + email +password +passwordConfirm);
    try {
      let response = await fetch("/api/restaurant", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, lname, email, password, passwordConfirm }),
      });
      console.log("raw Response :", response);

      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();

      if (data.success) {
        // alert("Registration is Successfully");
      }
      console.log("Response:", JSON.stringify(data, " ", 10));
      console.log("Message", data.message);
      delete data.result.password;
      delete data.result.passwordConfirm;
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
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lname}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
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
          {
              passwordError && <span>password and confirm password not match</span>
            }
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={passwordConfirm}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
    
          </div>
          {
              passwordError && <span>password and confirm password not match</span>
            }
          <button type="submit" className="btn btn-warning w-100">
            SingUp
          </button>
        </form>
      </div>
    </>
  );
};
export default SingUp;
