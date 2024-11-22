import { useRef, useState } from "react";
import { Volume2, VolumeOff } from 'lucide-react';

import video from "../../../assets/celfii-video.mp4";

const HeroBanner = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section>
      <div className="relative w-full bg-red-50">
        <video
          ref={videoRef}
          className="object-cover w-full"
          style={{ height: "calc(100vh - 85px)" }}
          autoPlay
          loop
          muted={isMuted}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={toggleMute}
          className="absolute p-3 text-white bg-gray-800 bg-opacity-50 rounded-sm top-4 right-4"
        >
          {isMuted ? <VolumeOff /> : <Volume2 />}
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
