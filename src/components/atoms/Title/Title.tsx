import {
  ITitleProps,
  Placement
} from "@app/components/atoms/Title/@types/Title";
import {
  mapTitlePlacementToStyles,
  titleDefaultThemeClasses
} from "@app/components/atoms/Title/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Title: React.FC<ITitleProps> = ({
  children,
  placement = Placement.Main
}) => {
  const titleClasses = {
    ...mapTitlePlacementToStyles[placement],
    ...titleDefaultThemeClasses
  };

  return (
    <h1 className={convertObjectValuesToString(titleClasses)}>{children}</h1>
  );
};

export { Title };
