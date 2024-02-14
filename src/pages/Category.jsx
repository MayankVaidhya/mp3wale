import React, { useEffect, useState } from "react";
import FrontendLayout from "../Layout/FrontendLayout";
import Card from "../components/Card";
import Aside from "../components/Aside";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const Category = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // generating current year
  useEffect(() => {
    const getCurrentYear = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(getCurrentYear);
  }, []);

  return (
    <FrontendLayout>
      <div className="w-full max-w-7xl mx-auto flex mt-10 flex-col md:flex-row">
        {/* left box */}
        <div className="md:w-[70%] w-full px-6 py-2">
          <div>
            <div className="mb-4">
              <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
                Hindi Songs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center md:justify-normal gap-5 mb-4">
              {/* All Card Components */}
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* next & previous button */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="py-2 px-5 outline-none bg-white rounded-md text-red-700 text-base font-semibold cursor-pointer card_btn_border">
                Previous
              </button>
              <button className="py-2 px-5 outline-none bg-red-700 rounded-md text-white text-base font-semibold cursor-pointer card_btn_border">
                Next
              </button>
            </div>
          </div>
        </div>
        {/* aside box */}
        <Aside />
      </div>
      <div className="bg-white w-full max-w-7xl mx-auto mt-10 px-6 py-5 rounded-md">
        <div className="flex gap-4">
          <div className="text-red-700 py-1">
            <TbArrowBigRightLinesFilled size={25} />
          </div>
          <h3 className="text-red-700 font-semibold text-2xl mb-4">
            Bollywood Songs Download (Latest) Trending {currentYear}
          </h3>
        </div>
        <p className="text-base mb-5 text-justify leading-6">
          Download & Listen to the Latest Exclusive Collections of{" "}
          <span>Bollywood</span> Songs free for Android and IOS Devices With
          High-Quality Mp3 Downloading Files. There’s a lot of great music out
          there to be discovered, and it can be tough to keep up with all the
          new songs released daily. But it’s here on our website, and we release
          all newly released Bollywood Songs as soon as we get them.
        </p>
        <p className="text-base mb-5 text-justify leading-6">
          The internet has become the one place where you can get any songs, but
          to get quality Bollywood Songs, you need to visit us.
        </p>
        <p className="text-base mb-5 text-justify leading-6">
          You can search by your favorite artists, genres, or bands. For
          example, If you want to listen to a Hollywood Songs, Just go to the
          search box and type Bollywood Songs” You’ll get all newly released
          Bollywood Songs of your choice in the search result.
        </p>
        <p className="text-base mb-5 text-justify leading-6">
          Music has the ability to change our mood by changing the way we
          perceive the world and invoking specific memories. When we listen to
          music, it can cause different parts of our brain to light up,
          depending on the type of music that is being played. This is because
          different types of music affect different areas of our brains.
        </p>
      </div>
    </FrontendLayout>
  );
};

export default Category;
