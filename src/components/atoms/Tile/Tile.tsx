import { ITileProps } from '@app/components/atoms/Tile/@types/Tile';
import Link from 'next/link';

const Tile = ({
  content,
  link
}: ITileProps) => (
  <Link href={link} className="flex grow shrink basis-1/3 justify-around bg-orange100 text-white text-24 uppercase p-28 m-8 rounded-md cursor-pointer">
    {content}
  </Link>
);

export default Tile;
