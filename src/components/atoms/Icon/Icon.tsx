"use client";

import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";
import { useIconStaticState } from "@app/components/atoms/Icon/hooks/useIconStaticState";
import Image from "next/image";

const Icon: React.FC<IIconProps> = ({
  iconSrc,
  iconDescription,
  iconStyle
}) => {
  const { iconStaticDimensions, src } = useIconStaticState({ iconSrc });

  return (
    <Image
      src={src}
      alt={iconDescription}
      style={iconStyle}
      {...iconStaticDimensions}
    />
  );
};

export { Icon };
