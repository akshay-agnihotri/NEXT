import { Clock, Home, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const Sidebar = async() => {
  await new Promise((resolve) => setTimeout(()=>{
    resolve("content is currently loading...")
  }, 2000));
  return (
    <aside
      className="w-64 bg-[#111111] text-white flex flex-col
justify-between p-4 min-h-screen"
    >
      <section>
        <h2>MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-bold">FAVOURITE</h2>
        <ul className="mt-2 mb-[2rem]">
          {[1, 2, 3, , 5].map((i) => (
            <div key={i} className="flex mt-[2rem] gap-4">
              <Image
                src="https://images.unsplash.com/photo-1750779941037-b3cbfde22acb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                width={100}
                height={100}
                className="w-15 h-15 rounded-md"
              />
              <div>
                <p className="text-white">Random</p>
                <p className="text-sm text-gray-400">Person</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
