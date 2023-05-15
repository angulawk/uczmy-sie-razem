import { Icon } from "@app/components/atoms/Icon/Icon";
import { ITileProps } from "@app/components/atoms/Tile/@types/Tile";

const Tile: React.FC<ITileProps> = ({
  content,
  link,
  iconSrc,
  iconDescription
}) => (
  <a
    href={link}
    className="flex flex-col shrink screenLg:basis-1/4 screenMdLg:basis-1/4 screenSmMd:basis-1/2 screenMaxSm:basis-full items-center text-black text-24 mb-20 uppercase rounded-md cursor-pointer"
  >
    <Icon
      iconSrc={iconSrc}
      iconDescription={iconDescription}
      iconStyle={{
        width: 100,
        height: 100
      }}
    />
    <p className="py-12">{content}</p>
  </a>
);

export { Tile };
