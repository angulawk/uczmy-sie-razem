import React from "react";
import { IJumbotronProps } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { PageDescription } from "@app/components/molecules/PageDescription/PageDescription";
import { Header } from "@app/components/molecules/Header/Header";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import {
  jumbotronDefaultThemeClasses,
  jumbotronIconThemeClasses,
  jumbotronPageDescriptionThemeClasses,
  jumbotronWrapperDefaultThemeClasses
} from "@app/components/molecules/Jumbotron/styles";
import { Icon } from "@app/components/atoms/Icon/Icon";
import { IconName } from "@app/components/atoms/Icon/@types/Icon";

const Jumbotron: React.FC<IJumbotronProps> = ({
  description,
  links,
  title
}) => (
  <div
    className={convertObjectValuesToString(jumbotronWrapperDefaultThemeClasses)}
  >
    <Header links={links} />

    {(title || description) && (
      <div
        className={convertObjectValuesToString(jumbotronDefaultThemeClasses)}
      >
        <PageDescription
          description={description}
          title={title}
          themeClasses={jumbotronPageDescriptionThemeClasses}
        />
        <Icon
          iconSrc={IconName.Students}
          iconTitle="Grupa studentów przeglądająca stronę do nauki hiszpańskiego"
          themeClasses={jumbotronIconThemeClasses}
        />
      </div>
    )}
  </div>
);

export { Jumbotron };
