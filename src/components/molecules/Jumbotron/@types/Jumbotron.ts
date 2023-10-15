import { IconName } from "@app/components/atoms/Icon/@types/Icon";

export interface IJumbotronProps {
  description?: string;
  title: string;
  iconSrc: IconName;
  iconTitle: string;
  variant?: Variant;
}

export enum Variant {
  Primary,
  Secondary
}
