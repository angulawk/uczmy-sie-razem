import { IconName } from "@app/components/atoms/Icon/@types/Icon";

export interface IJumbotronProps {
  description?: string;
  title?: string;
  src: IconName;
  location?: JumbotronLocation;
}

export enum JumbotronLocation {
  Main,
  Category
}