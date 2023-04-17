import Categories from "@app/components/molecules/Categories";

const MainCategories = () => {
  const categories = [
    {
      key: "czlowiek",
      name: "Człowiek",
      href: `/categories/human`
    },
    {
      key: "pogoda",
      name: "Pogoda",
      href: `/categories/weather`
    }
  ];

  return (
    <Categories categories={categories} />
  )
}

export default MainCategories;
