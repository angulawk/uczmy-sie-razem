"use client";

import { Hamburger } from "@app/components/molecules/Hamburger/Hamburger";
import { IHeaderMobileProps } from "@app/components/molecules/Header/HeaderMobile/@types/HeaderMobile";
import { headerMobileDefaultThemeClasses } from "@app/components/molecules/Header/HeaderMobile/styles";
import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { useState } from "react";

const HeaderMobile: React.FC<IHeaderMobileProps> = ({ links }) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const onMenuButtonClick = () => {
    setIsMenuVisible((_isMenuVisible) => !_isMenuVisible);
  };

  return (
    <div
      className={`${convertObjectValuesToString(
        headerMobileDefaultThemeClasses
      )}
        ${isMenuVisible ? "bg-black" : "bg-none"}
      `}
    >
      <Hamburger isMenuVisible={isMenuVisible} onToggle={onMenuButtonClick} />

      {isMenuVisible && <Nav direction={NavDirection.Vertical} links={links} />}
    </div>
  );
};

export { HeaderMobile };
