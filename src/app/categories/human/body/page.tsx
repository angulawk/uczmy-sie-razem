import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { CategoryDetails } from "@app/components/molecules/CategoryDetails/CategoryDetails";
import { Variant } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { bodyCategory } from "@app/config/categoryDetails/body";
import { IconTitle } from "@app/config/iconTitles";
import { Title } from "@app/routing/titles";

const BodyPage: React.FC = () => (
  <>
    <Jumbotron
      title={Title.Body}
      iconSrc={IconName.Body}
      iconTitle={IconTitle.HumanBody}
      variant={Variant.Secondary}
    />
    <CategoryDetails categoryDetails={bodyCategory} />
  </>
);

export default BodyPage;
