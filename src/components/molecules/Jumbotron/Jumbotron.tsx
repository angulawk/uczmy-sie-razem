import React from "react";
import { IJumbotronProps, JumbotronLocation } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { PageDescription } from "@app/components/molecules/PageDescription/PageDescription";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import {
  jumbotronDefaultThemeClasses,
  jumbotronIconThemeClasses,
  jumbotronIconWrapperStyles,
  jumbotronPageDescriptionThemeClasses,
  jumbotronWrapperDefaultThemeClasses,
  mapLocationToJumbotronDescriptionStyles,
  mapLocationToJumbotronIconStyles,
} from "@app/components/molecules/Jumbotron/styles";
import { Icon } from "@app/components/atoms/Icon/Icon";

const Jumbotron: React.FC<IJumbotronProps> = ({ description, title, src, location = JumbotronLocation.Main }) => {
  const jumbotronPageDescriptionStyles = {
    ...jumbotronPageDescriptionThemeClasses,
    ...mapLocationToJumbotronDescriptionStyles[location]
  }

  const jumbotronIconStyles = {
    ...jumbotronIconThemeClasses,
    ...mapLocationToJumbotronIconStyles[location]
  }

  return (
    <div
      className={convertObjectValuesToString(jumbotronWrapperDefaultThemeClasses)}
    >
      {(title || description) && (
        <div
          className={convertObjectValuesToString(jumbotronDefaultThemeClasses)}
        >
          <PageDescription
            description={description}
            title={title}
            themeClasses={jumbotronPageDescriptionStyles}
          />
          {location === JumbotronLocation.Category ? (
            <span className={convertObjectValuesToString(jumbotronIconWrapperStyles)}>
              <Icon
                iconSrc={src}
                iconTitle="Grupa studentów przeglądająca stronę do nauki hiszpańskiego"
                themeClasses={jumbotronIconStyles}
              />
            </span>
          ) : (
            <Icon
              iconSrc={src}
              iconTitle="Grupa studentów przeglądająca stronę do nauki hiszpańskiego"
              themeClasses={jumbotronIconStyles}
            />
          )}
        </div>
      )}
    </div>
  )
}

export { Jumbotron };
