import React from "react";
import { IJumbotronProps } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { PageDescription } from "@app/components/molecules/PageDescription/PageDescription";
import { Header } from "@app/components/molecules/Header/Header";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import {
  jumbotronDefaultThemeClasses,
  jumbotronWrapperDefaultThemeClasses
} from "@app/components/molecules/Jumbotron/styles";

const Jumbotron: React.FC<IJumbotronProps> = ({
  description,
  links,
  title
}) => (
  <div className={convertObjectValuesToString(jumbotronDefaultThemeClasses)}>
    <div
      className={convertObjectValuesToString(
        jumbotronWrapperDefaultThemeClasses
      )}
    >
      <Header links={links} />

      {(title || description) && (
        <PageDescription description={description} title={title} />
      )}
    </div>
  </div>
);

export { Jumbotron };
