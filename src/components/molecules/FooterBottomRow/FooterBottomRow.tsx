import {
  footerBottomRowDefaultStyles,
  footerBottomRowSeparatorDefaultStyles
} from "@app/components/molecules/FooterBottomRow/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { getFullYear } from "@app/helpers/time/getFullYear";

const FooterBottomRow: React.FC = () => {
  const fullYear = getFullYear();

  return (
    <>
      <hr
        className={convertObjectValuesToString(
          footerBottomRowSeparatorDefaultStyles
        )}
      />
      <p className={convertObjectValuesToString(footerBottomRowDefaultStyles)}>
        Copyright &copy; {fullYear} All rights reserved
      </p>
    </>
  );
};

export { FooterBottomRow };
