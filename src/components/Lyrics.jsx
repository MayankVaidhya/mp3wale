import React, { useState } from "react";
import classNames from "classnames";

const Lyrics = ({ fullLyrics }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const lyricsClasses = classNames({
    "h-48 overflow-hidden": !showMore,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={lyricsClasses}>
        {fullLyrics.split("\n").map((line, index) => (
          <p key={index} className="mb-2 text-center">
            {line}
          </p>
        ))}
      </div>
      <button
        onClick={toggleShowMore}
        className="py-2 px-5 mt-2 outline-none bg-red-700 rounded-md text-white text-base font-semibold cursor-pointer card_btn_border"
      >
        {showMore ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default Lyrics;
