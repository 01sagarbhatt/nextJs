import { useState } from "react";
import { useRouter } from "next/navigation";


const Login = () => {

const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [error,setError]= useState(false);
const router = useRouter();


function clearFields(event){
  event.target.reset();
}

const handleLogin = async (event)=>{
  event.preventDefault();
  
  if(!email || !password){
    setError(true);
    return false;
  }
  else{
    setError(false);
  }

let response  = await fetch("/api/restaurant",{
  method : "PUT",
  body: JSON.stringify({email,password, login:true})
})
response= await response.json();

const {result} = response;
localStorage.setItem("RegistrationUser",JSON.stringify(result));
router.push("restaurant/dashboard");



if(response.success){
  alert("login Successfull...");
}else{
  alert("login failed...");

}


  alert(email+ password);
  clearFields(event);
  setEmail("");
  setPassword("");
}
  return (
    <>
      <div>
        <h1 className="display-6 text-center">Restaurant Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" value={email || ""} onChange={(e) => setEmail(e.target.value)}></input>
            {
              error && !email && <span style={{color:"red"}}>please enter your Email</span>
              
            }
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"  value={password || ""} onChange={(e) => setPassword(e.target.value)}></input>
            {
              error && !password && <span style={{color:"red"}}>please enter your Password</span>
              
            }
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
