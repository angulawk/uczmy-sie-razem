import { mainCategories, pagesMetadata, Path } from '@app/app/config';
import { Categories } from '@app/components/molecules/Categories/Categories';

const Home: React.FC = () => (
  <>
    <Categories categories={mainCategories} />
  </>
)

// export const metadata = pagesMetadata.find(({ path }) => path === Path.Root)

export default Home;