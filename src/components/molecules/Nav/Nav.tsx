import { INavProps } from "@app/components/molecules/Nav/@types/Nav";

const Nav: React.FC<INavProps> = ({
  links
}) => (
  <nav className="flex gap-4 text-white">
    {links?.map(({ href, label }) => (
        <a className="cursor-pointer" href={href} key={href + label}>{label}</a>
    ))}
  </nav>
);

export { Nav };
