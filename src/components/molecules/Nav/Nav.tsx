import {
  INavProps,
  NavDirection
} from "@app/components/molecules/Nav/@types/Nav";
import {
  mapNavDirectionToLinkStyles,
  mapNavDirectionToStyles,
  navDefaultThemeClasses,
  navLinkDefaultThemeClasses
} from "@app/components/molecules/Nav/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Nav: React.FC<INavProps> = ({
  direction = NavDirection.Horizontal,
  links
}) => (
  <nav
    className={`${convertObjectValuesToString(navDefaultThemeClasses)} ${
      mapNavDirectionToStyles[direction]
    }`}
  >
    {links?.map(({ path, title }) => (
      <a
        className={`${convertObjectValuesToString(
          navLinkDefaultThemeClasses
        )} ${mapNavDirectionToLinkStyles[direction]}`}
        href={path}
        key={path + title}
      >
        {title}
      </a>
    ))}
  </nav>
);

export { Nav };
