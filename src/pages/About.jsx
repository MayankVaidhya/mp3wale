import React from "react";
import FrontendLayout from "../Layout/FrontendLayout";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const about = () => {
  return (
    <FrontendLayout>
      <div className="w-full max-w-7xl mx-auto mt-10 pb-5">
        <div className="px-4 md:px-6">
          <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
            About Us Page
          </h2>
        </div>
        <div className="px-4 md:px-6 mt-5">
          <div className="bg-slate-200 rounded-sm px-3 py-4">
            <p className="text-base mb-2 text-justify leading-6">
              Welcome to MP3Wale.co, your premier destination for a musical
              odyssey! As fervent lovers of music, we embarked on a mission to
              create a platform that resonates with enthusiasts like you.
              Established with a passion for the auditory arts, MP3Wale.co is
              your go-to source for an extensive and diverse collection of songs
              spanning various genres, ensuring there's something for everyone.
            </p>
            <p className="text-base mb-5 text-justify leading-6">
              Our journey began with the vision of curating a musical haven
              where users can immerse themselves in a plethora of tunes,
              discover new artists, and rediscover old favorites. MP3Wale.co
              stands as a testament to our commitment to fostering a global
              community united by a shared love for music.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Our Commitment to Quality and Diversity
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              At MP3Wale.co, we prioritize quality and diversity. Our team of
              music enthusiasts diligently curates each song, ensuring a blend
              of contemporary hits and timeless classics. We believe that music
              is a universal language that transcends boundaries, and our
              platform reflects this belief by offering a rich tapestry of
              melodies, beats, and lyrics.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Acknowledging Artistic Ownership
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              It's essential to note that the images and songs featured on
              MP3Wale.co are not owned by us. We deeply respect the intellectual
              property rights of the talented creators who bring these
              captivating tunes and visuals to life. We see ourselves as
              curators, aiming to showcase the incredible work of artists while
              adhering to ethical content practices.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Navigating the Musical Landscape
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              MP3Wale.co serves as a comprehensive guide to the vast and
              ever-evolving musical landscape. Whether you're a fan of the
              latest chart-toppers, underground gems, or timeless classics, our
              platform is designed to cater to your unique tastes. Navigate
              through our user-friendly interface, discover curated playlists,
              and embark on a sonic journey that transcends time and genres.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Community Engagement
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              Beyond being a music repository, MP3Wale.co is a thriving
              community. We encourage users to actively participate, share their
              favorite tracks, and engage in conversations about the melodies
              that move them. Your input is invaluable, shaping the fabric of
              our musical tapestry and contributing to the vibrancy of the
              MP3Wale.co experience.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Join the MP3Wale.co Journey
              </h3>
            </div>
            <p className="text-base mb-2 text-justify leading-6">
              In conclusion, MP3Wale.co is more than a music website – it's a
              celebration of the universal language that connects us all. Join
              us on this exhilarating journey through melodies and rhythms that
              resonate with the soul. Embrace the diversity of sounds, and let
              MP3Wale.co be your companion in the exploration of musical
              wonders.
            </p>
            <p className="text-base mb-2 text-justify leading-6">
              Thank you for choosing MP3Wale.co as your musical sanctuary.
              Together, let's harmonize the world one beat at a time.
            </p>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
};

export default about;
