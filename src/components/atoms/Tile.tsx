import Link from 'next/link';

const Tile = ({
  content,
  link
}) => (
  <Link href={link} className="flex justify-around bg-orange100 text-white text-24 uppercase p-28 m-8 rounded-md cursor-pointer">
    {content}
  </Link>
);

export default Tile;
