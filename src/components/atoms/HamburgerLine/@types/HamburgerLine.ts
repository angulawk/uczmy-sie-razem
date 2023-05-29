export enum HamburgerLinePosition {
  Top,
  MiddleTop,
  MiddleBottom,
  Bottom
}

export enum HamburgerLineVisibility {
  Visible,
  Hidden
}

export interface IHamburgerLineProps {
  visibility: HamburgerLineVisibility;
  position: HamburgerLinePosition;
}
