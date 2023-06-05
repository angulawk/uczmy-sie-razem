import { TChildren } from "@app/app/@types/RootLayout";
import { ICategoryDetailProps } from "@app/components/molecules/CategoryDetail/@types/CategoryDetail";

export interface ICategoryDetailsProps {
  title: TChildren;
  categoryDetails: ICategoryDetailProps[];
}
