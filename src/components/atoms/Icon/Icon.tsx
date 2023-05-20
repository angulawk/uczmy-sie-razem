import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";
import { iconDefaultClasses } from "@app/components/atoms/Icon/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import Image from "next/legacy/image";

const Icon: React.FC<IIconProps> = ({
  iconSrc,
  iconDescription,
  iconStyle
}) => (
  <Image
    className={convertObjectValuesToString(iconDefaultClasses)}
    src={iconSrc}
    alt={iconDescription}
    style={iconStyle}
    placeholder="blur"
  />
);

export { Icon };
