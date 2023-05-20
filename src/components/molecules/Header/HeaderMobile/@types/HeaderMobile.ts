import { ILinkProps } from "@app/components/molecules/Nav/@types/Nav";

export enum HeaderMobileVisibility {
  Visible,
  Hidden
}

export interface IHeaderMobileProps {
  links: ILinkProps[];
}
