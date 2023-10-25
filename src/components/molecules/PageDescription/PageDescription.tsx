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
  title,
  themeClasses
}) => {
  const pageDescriptionClasses = {
    ...pageDescriptionThemeClasses,
    ...themeClasses
  };

  return (
    <div className={convertObjectValuesToString(pageDescriptionClasses)}>
      <div
        className={convertObjectValuesToString(
          pageDescriptionWrapperThemeClasses
        )}
      >
        <h1
          className={convertObjectValuesToString(
            pageDescriptionTitleThemeClasses
          )}
        >
          {title}
        </h1>
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
};

export { PageDescription };
