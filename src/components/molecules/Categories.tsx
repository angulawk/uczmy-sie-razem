import Tile from "@app/components/atoms/Tile";

const Categories = ({
  categories
}) => {
  return (
    <div className="flex items-center justify-center m-16">
      {categories.map(({
        key,
        name,
        href
      }) => (
        <Tile content={name} key={key} link={href} />
      ))}
    </div>
  )
}

export default Categories;
