import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volumeOn, setVolumeOn] = useState(true);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      audioRef.current.currentTime = 0;
    };

    audioRef.current.addEventListener("timeupdate", updateCurrentTime);
    audioRef.current.addEventListener("ended", handleEnded);

    const currentAudioRef = audioRef.current;

    return () => {
      currentAudioRef.removeEventListener("timeupdate", updateCurrentTime);
      currentAudioRef.removeEventListener("ended", handleEnded);
    };
  }, [audioRef]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeToggle = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setVolumeOn(!volumeOn);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const calculateWaveWidth = () => {
    return (currentTime / duration) * 100 + "%";
  };

  return (
    <div
      className={`py-1 shadow-lg shadow-slate-300/50 ${
        isPlaying ? "" : "paused"
      }`}
    >
      <audio ref={audioRef} src={audioSrc} />
      <div className="flex items-center">
        <button
          onClick={handlePlayPause}
          className="rounded-full border-2 border-red-500 p-2 flex justify-center items-center text-red-500"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="w-72 bg-yellow-300 mx-2">
          <div className="relative h-1 bg-slate-400 grow">
            <div
              className="h-full bg-red-500"
              style={{ width: calculateWaveWidth() }}
            ></div>
          </div>
        </div>
        <div className="text-xs font-bold">
          <span className="text-red-500">{formatTime(currentTime)}</span>/
          {formatTime(duration)}
        </div>
        <button
          onClick={handleVolumeToggle}
          className="p-2 flex justify-center items-center text-red-500 mx-2"
        >
          {volumeOn ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
