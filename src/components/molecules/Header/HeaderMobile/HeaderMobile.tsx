"use client";

import { Hamburger } from "@app/components/molecules/Hamburger/Hamburger";
import { IHeaderMobileProps } from "@app/components/molecules/Header/HeaderMobile/@types/HeaderMobile";
import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { useState } from "react";

const HeaderMobile: React.FC<IHeaderMobileProps> = ({
  links
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const onMenuButtonClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <Hamburger
        isMenuVisible={isMenuVisible} onToggle={onMenuButtonClick}
      />
      {/* <button onClick={onMenuButtonClick}>Open</button> */}

      {isMenuVisible && (
        <Nav
          direction={NavDirection.Vertical}
          links={links}
        />
      )}
    </>
  );
};

export { HeaderMobile };
