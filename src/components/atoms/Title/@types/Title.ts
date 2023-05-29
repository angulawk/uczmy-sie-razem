import { TChildren } from "@app/app/@types/RootLayout";

export enum Placement {
  Main,
  Details
}

export interface ITitleProps {
  children: TChildren;
  placement?: Placement;
}
