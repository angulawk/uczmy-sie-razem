import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { JumbotronLocation } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { Title } from "@app/routing/titles";

const CharacterPage: React.FC = () => (
  <>
    <Jumbotron title={Title.Character} src={IconName.Character} location={JumbotronLocation.Category} />
    <h1>Charakter</h1>
  </>
);

export default CharacterPage;
