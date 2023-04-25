import { Path } from "@app/app/config";

export interface ILinkProps {
  path: Path;
  title: string;
}

export interface INavProps {
  links?: ILinkProps[];
}