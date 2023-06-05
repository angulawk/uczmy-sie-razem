import { TChildren } from "@app/app/@types/RootLayout";

export enum TitlePlacement {
  Main,
  Details
}

export interface ITitleProps {
  children: TChildren;
  placement?: TitlePlacement;
}
