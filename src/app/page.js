"use client";
import CustomerHeader from "./_components/CustomerHeader";

export default function Home() {
  return (
    <div>
      <CustomerHeader />
        <h1>Hello, Next.js!</h1>
        <button onClick={() =>alert("Hello Next JS")}>Click Me</button>
    </div>
  );
}
