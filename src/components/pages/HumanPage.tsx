import Categories from "@app/components/molecules/Categories";

const Human = () => {
  const categories = [
    {
      key: "cialo",
      name: "Ciało",
      href: `/categories/human/body`
    },
    {
      key: "charakter",
      name: "Cechy charakteru",
      href: `/categories/human/character`
    }
  ];

  return (
    <>
      <h1>Człowiek</h1>
      <Categories categories={categories} />
    </>
  )
}

export default Human;
