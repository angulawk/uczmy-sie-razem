import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { Path } from "@app/routing/paths";

export enum Location {
  Header,
  Footer
}

export interface INavItemProps {
  direction?: NavDirection;
  path: Path;
  title: string;
  location?: Location;
}
