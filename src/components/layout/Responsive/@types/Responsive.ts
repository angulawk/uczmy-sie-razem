import { TChildren } from "@app/app/@types/RootLayout";

export enum Device {
  Desktop = "desktop",
  Mobile = "mobile",
  Tablet = "tablet",
  Tv = "tv"
}

export interface IResponsiveProps {
  children: TChildren;
  devices: Device[];
}
