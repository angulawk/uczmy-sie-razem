"use client";

import { IHeaderMobileProps } from "@app/components/molecules/Header/HeaderMobile/@types/HeaderMobile";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { useState } from "react";

const HeaderMobile: React.FC<IHeaderMobileProps> = ({
  links
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const onMenuButtonClick = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <>
      <button onClick={onMenuButtonClick}>Open</button>

      {isMenuVisible && (
        <Nav links={links} />
      )}
    </>
  )
}

export { HeaderMobile };
