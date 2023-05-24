"use client";

import { ISoundButtonProps } from "@app/components/molecules/SoundButton/@types/SoundButton";
import { useState } from "react";

const SoundButton: React.FC<ISoundButtonProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = () => {
    setIsPlaying(true);
  };

  const onComplete = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <button onClick={play} className="w-12 h-12 ml-8 print:hidden">
        <img
          src="/icons/volume-on.png"
          alt="Posłuchaj tłumaczenia po hiszpańsku"
        />
      </button>
      {isPlaying && (
        <audio autoPlay onEnded={onComplete}>
          <source src={audioSrc} type="audio/mpeg" />
        </audio>
      )}
    </>
  );
};

export { SoundButton };
