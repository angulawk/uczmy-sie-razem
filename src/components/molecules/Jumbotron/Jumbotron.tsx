import React from "react";
import { IJumbotronProps } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { PageDescription } from "@app/components/molecules/PageDescription/PageDescription";
import { Header } from "@app/components/molecules/Header/Header";

const Jumbotron: React.FC<IJumbotronProps> = ({
  description,
  links,
  title
}) => (
  <div className="flex justify-end bg-[url('/images/students.png')] bg-cover bg-no-repeat bg-center w-full h-344 relative">
    <Header links={links} />

    <PageDescription
      description={description}
      title={title}
    />
  </div>
);

export { Jumbotron };
