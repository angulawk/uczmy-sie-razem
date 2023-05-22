import { Icon } from "@app/components/atoms/Icon/Icon";
import { ITileProps } from "@app/components/atoms/Tile/@types/Tile";
import {
  tileDefaultThemeClasses,
  tileIconWrapperDefaultThemeClasses
} from "@app/components/atoms/Tile/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Tile: React.FC<ITileProps> = ({
  content,
  link,
  iconSrc,
  iconDescription
}) => (
  <a
    href={link}
    className={convertObjectValuesToString(tileDefaultThemeClasses)}
  >
    <div
      className={convertObjectValuesToString(
        tileIconWrapperDefaultThemeClasses
      )}
    >
      <Icon iconSrc={iconSrc} iconDescription={iconDescription} />
    </div>
    <p className="text-black">{content}</p>
  </a>
);

export { Tile };
