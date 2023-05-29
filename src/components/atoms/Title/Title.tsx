import { ITitleProps } from "@app/components/atoms/Title/@types/Title";
import { titleDefaultThemeClasses } from "@app/components/atoms/Title/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Title: React.FC<ITitleProps> = ({ children }) => (
  <h1 className={convertObjectValuesToString(titleDefaultThemeClasses)}>
    {children}
  </h1>
);

export { Title };