import React from "react";
import { IPageDescriptionProps } from "@app/components/molecules/PageDescription/@types/PageDescription";

const PageDescription: React.FC<IPageDescriptionProps> = ({
  description,
  title
}) => (
  <div className="bg-black bg-opacity-60 h-88 flex flex-col py-48 px-24 justify-center absolute bottom-0 left-0 w-full min-w-full">
    <div className="mx-auto w-full max-w-[1400px]">
      {title && (
        <h2 className="font-normal text-white text-36 tracking-wider">
          {title}
        </h2>
      )}
      {description && (
        <p className="font-thin text-white text-20 mt-2 tracking-wider">
          {description}
        </p>
      )}
    </div>
  </div>
);

export { PageDescription };
