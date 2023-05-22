"use client";

import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";
import { iconDynamicComponents } from "@app/components/atoms/Icon/config";
import { iconDefaultClasses } from "@app/components/atoms/Icon/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { forwardRef } from "react";

const _Icon: React.ForwardRefRenderFunction<HTMLDivElement, IIconProps> = (
  { iconSrc, iconDescription },
  ref
) => {
  const IconComponent = iconDynamicComponents[iconSrc];

  return (
    <div ref={ref}>
      <IconComponent
        className={convertObjectValuesToString(iconDefaultClasses)}
        alt={iconDescription}
      />
    </div>
  );
};

const Icon = forwardRef(_Icon);

export { Icon };
