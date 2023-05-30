import {
  INavItemProps,
  Location
} from "@app/components/atoms/NavItem/@types/NavItem";
import {
  mapDirectionToNavItemStyles,
  mapLocationToNavItemStyles,
  navItemDefaultThemeClasses
} from "@app/components/atoms/NavItem/styles";
import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const NavItem: React.FC<INavItemProps> = ({
  direction = NavDirection.Horizontal,
  location = Location.Header,
  path,
  title
}) => {
  const navItemClasses = {
    ...navItemDefaultThemeClasses,
    ...mapDirectionToNavItemStyles[direction],
    ...mapLocationToNavItemStyles[location]
  };

  return (
    <a
      className={convertObjectValuesToString(navItemClasses)}
      href={path}
      key={path + title}
    >
      {title}
    </a>
  );
};

export { NavItem };
