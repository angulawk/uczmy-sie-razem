import { Path } from "@app/app/config";

export interface ILinkProps {
  path: Path;
  title: string;
}

export enum NavDirection {
  Vertical,
  Horizontal
}

export interface INavProps {
  direction?: NavDirection;
  links?: ILinkProps[];
}