import { NavItem } from "@app/components/molecules/NavItem/NavItem";
import {
  INavProps,
  NavDirection,
  NavLocation
} from "@app/components/molecules/Nav/@types/Nav";
import {
  mapLocationToNavStyles,
  mapDirectionToNavStyles,
  navDefaultThemeClasses
} from "@app/components/molecules/Nav/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Nav: React.FC<INavProps> = ({
  direction = NavDirection.Horizontal,
  links,
  location = NavLocation.HeaderDesktop
}) => {
  const navClasses = {
    ...navDefaultThemeClasses,
    ...mapDirectionToNavStyles[direction],
    ...mapLocationToNavStyles[location]
  };

  return (
    <nav className={convertObjectValuesToString(navClasses)}>
      {links?.map(({ path, title }) => (
        <NavItem key={path + title} path={path} title={title} />
      ))}
    </nav>
  );
};

export { Nav };
