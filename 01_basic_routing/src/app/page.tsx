"use client";
import Navbar from "@/component/Navbar";

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <Navbar />
      <div className="flex justify-center items-center min-h-[85vh]">
        <h1 className="font-bold">Welcome to HomePage</h1>
      </div>
    </div>
  );
};

export default Home;
