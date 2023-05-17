import React from "react";
import { IPageDescriptionProps } from "@app/components/molecules/PageDescription/@types/PageDescription";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import {
  pageDescriptionDescriptionThemeClasses,
  pageDescriptionThemeClasses,
  pageDescriptionTitleThemeClasses,
  pageDescriptionWrapperThemeClasses
} from "@app/components/molecules/PageDescription/styles";

const PageDescription: React.FC<IPageDescriptionProps> = ({
  description,
  title
}) => (
  <div className={convertObjectValuesToString(pageDescriptionThemeClasses)}>
    <div
      className={convertObjectValuesToString(
        pageDescriptionWrapperThemeClasses
      )}
    >
      {title && (
        <h2
          className={convertObjectValuesToString(
            pageDescriptionTitleThemeClasses
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={convertObjectValuesToString(
            pageDescriptionDescriptionThemeClasses
          )}
        >
          {description}
        </p>
      )}
    </div>
  </div>
);

export { PageDescription };
