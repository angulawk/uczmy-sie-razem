import { INavProps, NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { mapNavDirectionToStyles } from "@app/components/molecules/Nav/config";

const Nav: React.FC<INavProps> = ({
  direction = NavDirection.Horizontal,
  links
}) => (
  <nav className={`flex gap-4 text-white ${mapNavDirectionToStyles[direction]}`}>
    {links?.map(({ path, title }) => (
      <a className="cursor-pointer" href={path} key={path + title}>{title}</a>
    ))}
  </nav>
);

export { Nav };
