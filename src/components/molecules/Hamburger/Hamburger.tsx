import {
  HamburgerLinePosition,
  HamburgerLineVisibility
} from "@app/components/atoms/HamburgerLine/@types/HamburgerLine";
import { HamburgerLine } from "@app/components/atoms/HamburgerLine/HamburgerLine";
import { IHamburgerProps } from "@app/components/molecules/Hamburger/@types/Hamburger";
import { hamburgerDefaultStyles } from "@app/components/molecules/Hamburger/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Hamburger: React.FC<IHamburgerProps> = ({ isMenuVisible, onToggle }) => {
  const hamburgerLineVisibility = isMenuVisible
    ? HamburgerLineVisibility.Visible
    : HamburgerLineVisibility.Hidden;

  return (
    <div
      className={convertObjectValuesToString(hamburgerDefaultStyles)}
      onClick={onToggle}
    >
      <HamburgerLine
        visibility={hamburgerLineVisibility}
        position={HamburgerLinePosition.Top}
      />
      <HamburgerLine
        visibility={hamburgerLineVisibility}
        position={HamburgerLinePosition.MiddleTop}
      />
      <HamburgerLine
        visibility={hamburgerLineVisibility}
        position={HamburgerLinePosition.MiddleBottom}
      />
      <HamburgerLine
        visibility={hamburgerLineVisibility}
        position={HamburgerLinePosition.Bottom}
      />
    </div>
  );
};

export { Hamburger };
