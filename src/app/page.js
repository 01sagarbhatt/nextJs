"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import Slider from "./_components/Slider";

export default function Home() {
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showLocation, setSlowLocation] = useState(false);
  const [restaurant, setRestaurant] = useState ([]);

  useEffect(() => {
    LoadLocation();
    LoadRestaurant();
  }, []);

  const LoadLocation = async () => {
    let response = await fetch("http://localhost:3000/api/customer/location");
    response = await response.json();
    if (response.success) {
      setLocation(response.result); 
    }
  };

  const LoadRestaurant = async () => {
    let response = await fetch("http://localhost:3000/api/customer");
    response = await response.json();

    if (response.success) {
      setRestaurant(response.result);
    }
  }

  const HandelListItem = (item) => {
    setSelectedLocation(item);
    setSlowLocation(false)
  }


  console.log(restaurant);
  return (
    <div>
      <CustomerHeader />
      <Slider />

      <div className="inputBox w-75">
        <div className="input-group mb-3" id="inputBox">
          
          <input type="text" className="form-control w-25" placeholder="Selcet Place" value={selectedLocation}  onChange={(e) => setSelectedLocation(e.target.value)} onClick={()=>setSlowLocation(true)} />
          <ul className="location-list" >
            {
             showLocation && location.map((item, index) => (
                <li onClick={ () => HandelListItem(item)} key={index}>{ item}</li>
              ))
            }
          </ul>
          <input type="text" className="form-control w-50" placeholder="Enter Your Location" />
          </div>
      </div>
      <div className="mt-5 bg-light container">
        <div className="row">
      {
        restaurant.map((item, index) => (
          
          <div key={index} className="col-md-4 text-center">
            <h1 className="display-6">{item.restoName}</h1>
            <p>{ item.city}</p>
            <p>{ item.email}</p>
          </div>
      
        ))
      }
      </div>
    </div>
    </div>
  );
}
