import { IHamburgerProps } from "@app/components/molecules/Hamburger/@types/Hamburger";
import {
  hamburgerDefaultStyles,
  hamburgerLineDefaultStyles
} from "@app/components/molecules/Hamburger/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Hamburger: React.FC<IHamburgerProps> = ({ isMenuVisible, onToggle }) => (
  <div
    className={convertObjectValuesToString(hamburgerDefaultStyles)}
    onClick={onToggle}
  >
    <span
      className={`top-0 left-0 ${convertObjectValuesToString(
        hamburgerLineDefaultStyles
      )} ${isMenuVisible ? "top-18 left-1/2 w-0" : "rotate-0 w-full"}`}
    />
    <span
      className={`top-12 left-0 w-full ${convertObjectValuesToString(
        hamburgerLineDefaultStyles
      )} ${isMenuVisible ? "rotate-45" : "rotate-0"}`}
    />
    <span
      className={`top-12 left-0 w-full ${convertObjectValuesToString(
        hamburgerLineDefaultStyles
      )} ${isMenuVisible ? "-rotate-45" : "rotate-0"}`}
    />
    <span
      className={`top-24 left-0 ${convertObjectValuesToString(
        hamburgerLineDefaultStyles
      )} ${isMenuVisible ? "top-8 left-1/2 w-0" : "rotate-0 w-full"}`}
    />
  </div>
);

export { Hamburger };
