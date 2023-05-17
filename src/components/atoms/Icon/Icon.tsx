import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";
import Image from "next/image";

const Icon: React.FC<IIconProps> = ({
  iconSrc,
  iconDescription,
  iconStyle
}) => (
  <Image
    src={iconSrc}
    alt={iconDescription}
    style={{
      transition: "all 150ms ease-in-out",
      ...iconStyle
    }}
    placeholder="blur"
  />
);

export { Icon };
