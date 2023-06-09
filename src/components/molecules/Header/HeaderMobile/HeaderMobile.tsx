"use client";

import { Hamburger } from "@app/components/molecules/Hamburger/Hamburger";
import {
  HeaderMobileVisibility,
  IHeaderMobileProps
} from "@app/components/molecules/Header/HeaderMobile/@types/HeaderMobile";
import {
  headerMobileDefaultThemeClasses,
  mapHeaderMobileVisibilityToStyles
} from "@app/components/molecules/Header/HeaderMobile/styles";
import {
  NavDirection,
  NavLocation
} from "@app/components/molecules/Nav/@types/Nav";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";
import { useState } from "react";

const HeaderMobile: React.FC<IHeaderMobileProps> = ({ links }) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const onMenuButtonClick = () => {
    setIsMenuVisible((_isMenuVisible) => !_isMenuVisible);
  };

  const headerMobileVisibility = isMenuVisible
    ? HeaderMobileVisibility.Visible
    : HeaderMobileVisibility.Hidden;

  const headerMobileClasses: IThemeClasses = {
    ...headerMobileDefaultThemeClasses,
    ...mapHeaderMobileVisibilityToStyles[headerMobileVisibility]
  };

  return (
    <div className={convertObjectValuesToString(headerMobileClasses)}>
      <Hamburger isMenuVisible={isMenuVisible} onToggle={onMenuButtonClick} />

      {isMenuVisible && (
        <Nav
          direction={NavDirection.Vertical}
          location={NavLocation.HeaderMobile}
          links={links}
        />
      )}
    </div>
  );
};

export { HeaderMobile };
