import {
  INavProps,
  NavDirection
} from "@app/components/molecules/Nav/@types/Nav";
import {
  mapNavDirectionToLinkStyles,
  mapNavDirectionToStyles
} from "@app/components/molecules/Nav/styles";

const Nav: React.FC<INavProps> = ({
  direction = NavDirection.Horizontal,
  links
}) => (
  <nav
    className={`flex gap-4 text-white ${mapNavDirectionToStyles[direction]}`}
  >
    {links?.map(({ path, title }) => (
      <a
        className={`cursor-pointer text-18 text-shadow-sm mr-12 tracking-widest ${mapNavDirectionToLinkStyles[direction]}`}
        href={path}
        key={path + title}
      >
        {title}
      </a>
    ))}
  </nav>
);

export { Nav };
