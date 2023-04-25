import { INavProps } from "@app/components/molecules/Nav/@types/Nav";

const Nav: React.FC<INavProps> = ({
  links
}) => (
  <nav className="flex gap-4 text-white">
    {links?.map(({ path, title }) => (
      <a className="cursor-pointer" href={path} key={path + title}>{title}</a>
    ))}
  </nav>
);

export { Nav };
