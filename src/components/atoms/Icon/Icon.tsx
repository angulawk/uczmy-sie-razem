import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";
import { iconComponents } from "@app/components/atoms/Icon/config";
import { iconDefaultClasses } from "@app/components/atoms/Icon/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Icon: React.FC<IIconProps> = ({ iconSrc, iconTitle }) => {
  const IconComponent = iconComponents[iconSrc];

  return (
    <IconComponent
      className={convertObjectValuesToString(iconDefaultClasses)}
      title={iconTitle}
    />
  );
};

export { Icon };
