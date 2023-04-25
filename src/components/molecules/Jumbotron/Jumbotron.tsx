import React from "react";
import { HeaderDesktop } from "@app/components/molecules/Header/HeaderDesktop/HeaderDesktop";
import { IJumbotronProps } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { PageDescription } from "@app/components/molecules/PageDescription/PageDescription";
import { HeaderMobile } from "@app/components/molecules/Header/HeaderMobile/HeaderMobile";

const Jumbotron: React.FC<IJumbotronProps> = ({
  description,
  links,
  title
}) => (
  <div className="bg-[url('/images/students.png')] bg-cover bg-no-repeat bg-center w-full h-344 relative">
    <HeaderMobile links={links} />

    <PageDescription
      description={description}
      title={title}
    />
  </div>
);

export { Jumbotron };
