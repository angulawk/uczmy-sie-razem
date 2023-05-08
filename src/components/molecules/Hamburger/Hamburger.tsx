import { IHamburgerProps } from "@app/components/molecules/Hamburger/@types/Hamburger";
import {
  hamburgerMenuContainerStyles,
  hambutgermenuLineStyles
} from "@app/components/molecules/Hamburger/styles";

const Hamburger: React.FC<IHamburgerProps> = ({ isMenuVisible, onToggle }) => (
  <div className={hamburgerMenuContainerStyles} onClick={onToggle}>
    <span
      className={`top-0 left-0 ${hambutgermenuLineStyles} ${
        isMenuVisible ? "top-18 left-1/2 w-0" : "rotate-0 w-full"
      }`}
    />
    <span
      className={`top-8 left-0 w-full ${hambutgermenuLineStyles} ${
        isMenuVisible ? "rotate-45" : "rotate-0"
      }`}
    />
    <span
      className={`top-8 left-0 w-full ${hambutgermenuLineStyles} ${
        isMenuVisible ? "-rotate-45" : "rotate-0"
      }`}
    />
    <span
      className={`top-16 left-0 ${hambutgermenuLineStyles} ${
        isMenuVisible ? "top-8 left-1/2 w-0" : "rotate-0 w-full"
      }`}
    />
  </div>
);

export { Hamburger };
