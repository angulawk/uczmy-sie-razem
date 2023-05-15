"use client";

import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";
import { useEffect, useState } from "react";

const useIconStaticState = ({ iconSrc }: Pick<IIconProps, "iconSrc">) => {
  const src = `/icons/${iconSrc}.png`;

  const [iconStaticDimensions, setIconStaticDimensions] = useState({
    height: 0,
    width: 0
  });

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const { height, width } = img;

      setIconStaticDimensions({
        height,
        width
      });
    };
  }, [src]);

  return { iconStaticDimensions, src };
};

export { useIconStaticState };
