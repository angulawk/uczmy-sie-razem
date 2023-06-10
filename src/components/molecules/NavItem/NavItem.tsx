import { INavItemProps } from "@app/components/molecules/NavItem/@types/NavItem";
import { navItemDefaultThemeClasses } from "@app/components/molecules/NavItem/styles";
import { Link } from "@app/components/molecules/Link/Link";

const NavItem: React.FC<INavItemProps> = ({ path, title }) => (
  <Link href={path} themeClasses={navItemDefaultThemeClasses}>
    {title}
  </Link>
);

export { NavItem };
