"use client";

import Card from "@/component/Card";
import Footer from "@/component/Footer";
import Header from "@/component/Header";

const HomePage = () => {
  return (
    <div className="m-[3rem]">
      <Header />
      <main className="flex justify-between p-[2rem]">
        {/* Rendering Cards for the different categories */}
        <Card
          heading={"Technologies"}
          text={"Go to Technologies page"}
          navigation="/technologies"
        />
        <Card
          heading={"Design"}
          text={"Go to design page"}
          navigation="/design"
        />
        <Card
          heading={"Buisness"}
          text={"Go to Buisness page"}
          navigation="/buisness"
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
