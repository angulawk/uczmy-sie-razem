import { Icon } from "@app/components/atoms/Icon/Icon";
import { Link } from "@app/components/molecules/Link/Link";
import { ILinkWithIconProps } from "@app/components/molecules/LinkWithIcon/@types/LinkWithIcon";
import {
  linkWithIconDefaultThemeClasses,
  linkWithIconDynamicIconDefaultThemeClasses,
  linkWithIconTextDefaultThemeClasses
} from "@app/components/molecules/LinkWithIcon/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";

const LinkWithIcon: React.FC<ILinkWithIconProps> = ({
  href,
  iconSrc,
  iconTitle,
  isExternal = false,
  themeClasses,
  text
}) => {
  const linkWithIconThemeClasses: IThemeClasses = {
    ...linkWithIconDefaultThemeClasses,
    ...themeClasses
  };

  const linkWithIconWrapperIconThemeClasses: IThemeClasses = {
    ...linkWithIconDynamicIconDefaultThemeClasses,
    ...themeClasses
  };

  return (
    <Link
      href={href}
      isExternal={isExternal}
      themeClasses={linkWithIconThemeClasses}
    >
      <Icon
        themeClasses={linkWithIconWrapperIconThemeClasses}
        iconSrc={iconSrc}
        iconTitle={iconTitle}
      />
      {text && (
        <p
          className={convertObjectValuesToString(
            linkWithIconTextDefaultThemeClasses
          )}
        >
          {text}
        </p>
      )}
    </Link>
  );
};

export { LinkWithIcon };
