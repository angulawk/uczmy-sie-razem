import { Icon } from "@app/components/atoms/Icon/Icon";
import { ITileProps } from "@app/components/molecules/Tile/@types/Tile";
import {
  tileDefaultThemeClasses,
  tileIconWrapperDefaultThemeClasses
} from "@app/components/molecules/Tile/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Tile: React.FC<ITileProps> = ({ content, link, iconSrc, iconTitle }) => (
  <a
    href={link}
    className={convertObjectValuesToString(tileDefaultThemeClasses)}
  >
    <div
      className={convertObjectValuesToString(
        tileIconWrapperDefaultThemeClasses
      )}
    >
      <Icon iconSrc={iconSrc} iconTitle={iconTitle} />
    </div>
    <p className="text-black">{content}</p>
  </a>
);

export { Tile };
