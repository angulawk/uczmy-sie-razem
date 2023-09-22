import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { CategoryDetails } from "@app/components/molecules/CategoryDetails/CategoryDetails";
import { JumbotronLocation } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { bodyCategory } from "@app/config/categoryDetails/body";
import { Title } from "@app/routing/titles";

const BodyPage: React.FC = () => (
  <>
    <Jumbotron title={Title.Body} src={IconName.Body} location={JumbotronLocation.Category} />
    <CategoryDetails categoryDetails={bodyCategory} />
  </>
);

export default BodyPage;
