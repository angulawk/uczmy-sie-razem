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
import { Link } from "@app/components/molecules/Link/Link";

const Button: React.FC<IButtonProps> = ({
  children,
  href,
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

  if (href) {
    return (
      <Link themeClasses={buttonClasses} href={href}>
        {children}
      </Link>
    );
  }

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
