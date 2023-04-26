import { ITileProps } from "@app/components/atoms/Tile/@types/Tile";

const Tile: React.FC<ITileProps> = ({
  content,
  link
}) => (
  <a href={link} className="flex grow shrink basis-1/3 justify-around bg-orange100 text-white text-24 uppercase p-28 m-8 rounded-md cursor-pointer">
    {content}
  </a>
);

export { Tile };
