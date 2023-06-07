import { INavItemProps } from "@app/components/atoms/NavItem/@types/NavItem";
import { navItemDefaultThemeClasses } from "@app/components/atoms/NavItem/styles";
import { Link } from "@app/components/molecules/Link/Link";

const NavItem: React.FC<INavItemProps> = ({ path, title }) => (
  <Link href={path} themeClasses={navItemDefaultThemeClasses}>
    {title}
  </Link>
);

export { NavItem };
