import { NavItem } from "@app/components/atoms/NavItem/NavItem";
import {
  INavProps,
  NavDirection
} from "@app/components/molecules/Nav/@types/Nav";
import {
  mapNavDirectionToStyles,
  navDefaultThemeClasses
} from "@app/components/molecules/Nav/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Nav: React.FC<INavProps> = ({
  direction = NavDirection.Horizontal,
  links
}) => {
  const navClasses = {
    ...navDefaultThemeClasses,
    ...mapNavDirectionToStyles[direction]
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
