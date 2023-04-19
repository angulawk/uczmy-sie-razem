import { Inter } from 'next/font/google'
import MainCategories from '@app/components/molecules/MainCategories/MainCategories';

const inter = Inter({ subsets: ['latin'] })

const Home = () => (
  <MainCategories />
)

export default Home;