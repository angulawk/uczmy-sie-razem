import { Path } from "@app/routing/paths";

export interface ILinkProps {
  path: Path;
  title: string;
}

export enum NavDirection {
  Vertical,
  Horizontal
}

export enum NavLocation {
  Header,
  Footer
}

export interface INavProps {
  direction?: NavDirection;
  links?: ILinkProps[];
  variant?: NavLocation;
}
