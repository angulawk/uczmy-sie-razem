import { IHamburgerLineProps } from "@app/components/atoms/HamburgerLine/@types/HamburgerLine";
import {
  hamburgerLineDefaultStyles,
  mapHamburgerLinePositionToStyles,
  mapHamburgerLineVisibilityPositionToStyles,
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
    ...mapHamburgerLineVisibilityToStyles[visibility],
    ...mapHamburgerLinePositionToStyles[position],
    ...mapHamburgerLineVisibilityPositionToStyles[visibility][position]
  };

  return <span className={convertObjectValuesToString(hamburgerLineClasses)} />;
};

export { HamburgerLine };
