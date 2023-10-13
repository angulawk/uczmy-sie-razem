import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { Variant } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { IconTitle } from "@app/config/iconTitles";
import { Title } from "@app/routing/titles";

const CharacterPage: React.FC = () => (
  <Jumbotron
    title={Title.Character}
    iconSrc={IconName.Character}
    iconTitle={IconTitle.HumanCharacter}
    variant={Variant.Secondary}
  />
);

export default CharacterPage;
