import React from "react";
import { IPageDescriptionProps } from "@app/components/molecules/PageDescription/@types/PageDescription";

const PageDescription: React.FC<IPageDescriptionProps> = ({
  description,
  title
}) => (
  <div className="bg-orange100 bg-opacity-40 h-88 flex flex-col py-48 px-24 justify-center absolute bottom-0 w-full">
    <div className="max-w-screen-xl mx-auto w-full">
      {title && <h2 className="text-white text-36">{title}</h2>}
      {description && <p className="text-white text-16">{description}</p>}
    </div>
  </div>
);

export { PageDescription };


