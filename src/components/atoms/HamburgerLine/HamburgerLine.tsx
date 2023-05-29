import { IHamburgerLineProps } from "@app/components/atoms/HamburgerLine/@types/HamburgerLine";
import {
  hamburgerLineDefaultStyles,
  mapHamburgerLinePositionToStyles,
  mapHamburgerLineVisibilityToStyles
} from "@app/components/atoms/HamburgerLine/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";

const HamburgerLine: React.FC<IHamburgerLineProps> = ({
  visibility,
  position
}) => {
  const hamburgerLineClasses: IThemeClasses = {
    ...hamburgerLineDefaultStyles,
    ...mapHamburgerLinePositionToStyles[position],
    ...mapHamburgerLineVisibilityToStyles[visibility][position]
  };

  return <span className={convertObjectValuesToString(hamburgerLineClasses)} />;
};

export { HamburgerLine };
