import React from "react";
import FrontendLayout from "../Layout/FrontendLayout";
import Aside from "../components/Aside";
import Card from "../components/Card";
import image from "../assets/Maan Meri Jaan.jpeg";
import AudioPlayer from "../components/AudioPlayer";
import audioSrc from "../assets/test-audio.mp3";
import Lyrics from "../components/Lyrics";

const SinglePost = () => {
  const fullLyrics = `Tan Ka Kya Pata
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata…
  
  Man Toh Hai Chanchal
  Tan Toh Hai Pinjra
  Pinjre Mein Hai Tera Vaas
  
  Man Toh Hai Chanchal
  Tan Toh Hai Pinjra
  Pinjre Mein Hai Tera Vaas
  
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata
  
  Radha Hai Agar Mishri
  Toh Mithas Hai Bihari
  Radha Hai Agar Mohini
  Toh Mohan Hai Bihari
  
  Radha Hai Agar Ganga
  Toh Dhaar Hai Bihari
  Radha Hai Agar Bholi
  Toh Chanchal Hai Bihari
  
  Ik Dooje Ke Rang Mein Range Hai
  Ik Hai Chanda Ek Chakori
  Ik Dooje Ke Rang Mein Range Hai
  Ik Hai Chanda Ek Chakori
  
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata
  
  Barsane Ki Laadli Radha
  Har Leti Hai Sab Dukh Vaadha
  Radha Ke Sang Jhoomein Kanha
  Kanha Ke Sang Jhoomi Sakhiyan
  
  Yeh Ambar Bole Radha
  Braj Mandal Bole Radha
  Kanha Ki Murli Bole Radha
  Radha Radha Bas Radha
  
  Ishq Trishna O Mere Krishna
  Meera Rove Din Raat
  Vish Kya Hota Shambu Se Puchho
  Meera Se Puchho Na Yeh Baat
  
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata
  
  Gopal Govind Bol Mana
  Hari Hari Bol Mana
  Krishna Radha Krishna Bol Mana
  Radhe Shayam Bol Mana
  
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata
  Radhe Radhe Radhe Bol Mana
  Tan Ka Kya Pata`;

  return (
    <FrontendLayout>
      <div className="w-full max-w-7xl mx-auto flex mt-10 flex-col md:flex-row">
        <div className="md:w-[70%] w-full px-6 py-2">
          <div>
            <div className="mb-0">
              <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
                Maan Meri Jaan Mp3 Song Download
              </h2>
            </div>
            {/* here come player section */}
            <div className="bg-white py-5">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full px-4 md:px-0 lg:w-[25%] h-52 flex justify-center items-center">
                  <div className="w-h-52 h-52">
                    <img src={image} alt="" className="w-full h-full" />
                  </div>
                </div>
                <div className="w-full lg:w-[75%] h-auto px-5">
                  <div className="bg-white pl-0 md:pl-4 mt-2 lg:mt-0">
                    <h2 className="text-zinc-900 text-lg font-bold">
                      Maan Meri Jaan Mp3 Song
                    </h2>
                    <table className="mt-3">
                      <tbody>
                        <tr className="border-b border-slate-300">
                          <td className="py-2">Album</td>
                          <td className="py-2 pl-20 text-red-700 cursor-pointer">
                            <b>Hindi Songs</b>
                          </td>
                        </tr>
                        <tr class="border-b border-slate-300">
                          <td className="py-2">Singer</td>
                          <td className="py-2 pl-20">King</td>
                        </tr>
                        <tr class="border-b border-slate-300">
                          <td className="py-2">Lyric Writter</td>
                          <td className="py-2 pl-20">King</td>
                        </tr>
                        <tr class="border-b border-slate-300">
                          <td className="py-2">Music Composer</td>
                          <td className="py-2 pl-20">King</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-10 w-full lg:w-[80%]">
                      <AudioPlayer audioSrc={audioSrc} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-5 flex items-center justify-center">
              Adds here ...
            </div>
            <div className="bg-white flex flex-col lg:flex-row items-center justify-center gap-4 p-5">
              <button className="bg-red-700 px-4 py-2 rounded-md text-white cursor-pointer">
                128Kbps Mp3 Songs
              </button>
              <button className="bg-red-700 px-4 py-2 rounded-md text-white cursor-pointer">
                192Kbps Mp3 Songs
              </button>
              <button className="bg-red-700 px-4 py-2 rounded-md text-white cursor-pointer">
                320Kbps Mp3 Songs
              </button>
            </div>
            <div className="bg-white px-5 flex items-center justify-center">
              Adds here ...
            </div>
            {/* now here is lyrics section */}
            <div className="mt-5">
              <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
                Maan Meri Jaan Lyrics
              </h2>
              <div className="bg-white py-5">
                <Lyrics fullLyrics={fullLyrics} />
              </div>
            </div>
            {/* here come related song section */}
            <div className="mt-5">
              <div className="mb-4">
                <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
                  Related Songs
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
              </div>
              {/* view all button */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button className="py-2 px-5 outline-none bg-red-700 rounded-md text-white text-base font-semibold cursor-pointer card_btn_border">
                  [ View All Bollywood Songs ]
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* aside box */}
        <Aside />
      </div>
    </FrontendLayout>
  );
};

export default SinglePost;
