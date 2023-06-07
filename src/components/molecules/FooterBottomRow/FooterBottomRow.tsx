import {
  footerRightsDefaultStyles,
  footerSeparatorDefaultStyles
} from "@app/components/organisms/Footer/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { getFullYear } from "@app/helpers/time/getFullYear";

const FooterBottomRow: React.FC = () => {
  var fullYear = getFullYear();

  return (
    <>
      <hr
        className={convertObjectValuesToString(footerSeparatorDefaultStyles)}
      />
      <p className={convertObjectValuesToString(footerRightsDefaultStyles)}>
        Copyright &copy; {fullYear} All rights reserved
      </p>
    </>
  );
};

export { FooterBottomRow };
