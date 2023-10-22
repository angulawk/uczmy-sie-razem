import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { Categories } from "@app/components/molecules/Categories/Categories";
import { InfoCardList } from "@app/components/molecules/InfoCardList/InfoCardList";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { mainCategories } from "@app/config/categories/main";
import { infoCards } from "@app/config/infoCards/infoCards";
import { IconTitle } from "@app/config/iconTitles";
import { Title } from "@app/routing/titles";
import { PageTemplate } from "@app/components/templates/PageTemplate/PageTemplate";

const Home: React.FC = () => (
  <>
    <PageTemplate>
      <Jumbotron
        title={Title.Root}
        iconSrc={IconName.Students}
        iconTitle={IconTitle.Main}
      />
    </PageTemplate>

    <InfoCardList
      infoCards={infoCards}
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />

    <PageTemplate>
      <Categories categories={mainCategories} title="Główne kategorie" />
    </PageTemplate>
  </>
);

export default Home;
