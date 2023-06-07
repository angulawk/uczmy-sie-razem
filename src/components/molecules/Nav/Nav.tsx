import { NavItem } from "@app/components/atoms/NavItem/NavItem";
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
  variant = NavLocation.Header
}) => {
  const navClasses = {
    ...navDefaultThemeClasses,
    ...mapDirectionToNavStyles[direction],
    ...mapLocationToNavStyles[variant]
  };

  return (
    <nav className={convertObjectValuesToString(navClasses)}>
      {links?.map(({ path, title }) => (
        <NavItem
          key={path + title}
          direction={direction}
          path={path}
          title={title}
        />
      ))}
    </nav>
  );
};

export { Nav };
