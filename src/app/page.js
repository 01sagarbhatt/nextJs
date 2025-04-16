"use client";
import CustomerHeader from "./_components/CustomerHeader";
import Slider from "./_components/Slider";

export default function Home() {
  return (
    <div>
      <CustomerHeader />
      <Slider />

      <div className="inputBox w-75">
        <div className="input-group mb-3" id="inputBox">
          <input type="text" className="form-control w-25" placeholder="Selcet Place" />
          <input type="text" className="form-control w-50" placeholder="Enter Your Location" />
          </div>
      </div>
    </div>
  );
}
