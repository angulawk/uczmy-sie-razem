import {
  printButtonContainerDefaultThemeClasses,
  printButtonDefaultThemeClasses
} from "@app/components/molecules/PrintButton/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div
      className={convertObjectValuesToString(
        printButtonContainerDefaultThemeClasses
      )}
    >
      <button
        className={convertObjectValuesToString(printButtonDefaultThemeClasses)}
        onClick={handlePrint}
      >
        Drukuj
      </button>
    </div>
  );
};

export { PrintButton };
