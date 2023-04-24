import { IHeaderDesktopProps } from "@app/components/molecules/HeaderDesktop/@types/HeaderDesktop";

const HeaderDesktop: React.FC<IHeaderDesktopProps> = ({
  links
}) => (
  <nav className="flex gap-4 justify-end px-48 py-12 bg-orange200 w-full  text-white">
    {links.map(({ href, label }) => (
        <a className="cursor-pointer" href={href} key={href + label}>{label}</a>
    ))}
  </nav>
);

export { HeaderDesktop };
