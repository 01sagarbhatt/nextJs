"use client";
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {

  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  
 


  useEffect(() => {
    let data = localStorage.getItem("RegistrationUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push('/restaurant');
    } else if (data && pathName == "/restaurant") {
      router.push('/restaurant/dashboard');
    }
    else {

      setDetails(JSON.stringify(data));


    }
 
  },[]);

  const logout = () => {
    localStorage.removeItem("RegistrationUser");
    router.push('/restaurant');

  }

  console.log("this is details", details);
  console.log("this is details",typeof(details));


  return (
    <div className="HeaderWrapper">
      <div className="logo">
        <img
          style={{ width: 100 }}
          src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?t=st=1740822807~exp=1740826407~hmac=a9364da6a74d7a962e1861a1366abc6ea936da55ced40d5d00dbcded865eb143&w=740"
          alt="logo"
        />
      </div>
      
      <div className="links">
        <ul>
          <li><Link href="/">Home</Link></li>
          { 
           
            details ?
              <>
                
                <li><Link href="/">{ details.fname}</Link></li>
                <li><button className="btn btn-danger" onClick={logout}>Logout</button></li>
                
            </>
              :
              <>
              <li><Link href="/">Login & SingUp</Link></li>
              </>

          }
       
       
        </ul>
      </div>
    </div>
  );
};

export default Header;
