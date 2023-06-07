import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { Path } from "@app/routing/paths";

export interface INavItemProps {
  direction?: NavDirection;
  path: Path;
  title: string;
}
