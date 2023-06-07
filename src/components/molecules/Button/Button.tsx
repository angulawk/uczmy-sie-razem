import {
  ButtonSize,
  ButtonType,
  IButtonProps
} from "@app/components/molecules/Button/@types/Button";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import {
  buttonDefaultThemeClasses,
  mapSizeToButtonContainerProps,
  mapTypeToButtonContainerProps
} from "@app/components/molecules/Button/styles";

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  size = ButtonSize.Medium,
  tabIndex,
  themeClasses,
  type = ButtonType.Primary
}) => {
  const buttonClasses = {
    ...buttonDefaultThemeClasses,
    ...mapSizeToButtonContainerProps[size],
    ...mapTypeToButtonContainerProps[type],
    ...themeClasses
  };

  return (
    <button
      className={convertObjectValuesToString(buttonClasses)}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
};

export { Button };
