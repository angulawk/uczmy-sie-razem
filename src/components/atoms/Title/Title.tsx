import {
  ITitleProps,
  TitlePlacement
} from "@app/components/atoms/Title/@types/Title";
import {
  mapTitlePlacementToStyles,
  titleDefaultThemeClasses
} from "@app/components/atoms/Title/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Title: React.FC<ITitleProps> = ({
  children,
  placement = TitlePlacement.Main
}) => {
  const titleClasses = {
    ...mapTitlePlacementToStyles[placement],
    ...titleDefaultThemeClasses
  };

  return (
    <h2 className={convertObjectValuesToString(titleClasses)}>{children}</h2>
  );
};

export { Title };
