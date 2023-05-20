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
}) => {
  const navClasses = {
    ...navDefaultThemeClasses,
    ...mapNavDirectionToStyles[direction]
  };

  const linkClasses = {
    ...navLinkDefaultThemeClasses,
    ...mapNavDirectionToLinkStyles[direction]
  };

  return (
    <nav className={convertObjectValuesToString(navClasses)}>
      {links?.map(({ path, title }) => (
        <a
          className={`${convertObjectValuesToString(linkClasses)}`}
          href={path}
          key={path + title}
        >
          {title}
        </a>
      ))}
    </nav>
  );
};

export { Nav };
