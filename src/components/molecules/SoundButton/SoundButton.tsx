"use client";

import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { Icon } from "@app/components/atoms/Icon/Icon";
import { ISoundButtonProps } from "@app/components/molecules/SoundButton/@types/SoundButton";
import { soundButtonDefaultThemeClasses } from "@app/components/molecules/SoundButton/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
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
      <button
        onClick={play}
        className={convertObjectValuesToString(soundButtonDefaultThemeClasses)}
      >
        <Icon
          iconSrc={isPlaying ? IconName.VolumeOn : IconName.VolumeOff}
          iconTitle="Posłuchaj tłumaczenia po hiszpańsku"
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
