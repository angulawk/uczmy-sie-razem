import Human from "@app/../public/icons/human.svg";
import Weather from "@app/../public/icons/weather.svg";
import Job from "@app/../public/icons/job.svg";
import Animals from "@app/../public/icons/paws.svg";
import Character from "@app/../public/icons/character.svg";
import Body from "@app/../public/icons/body.svg";
import {
  IconDynamicName,
  TIconDynamicComponents
} from "@app/components/atoms/Icon/@types/Icon";

const iconDynamicComponents: TIconDynamicComponents = {
  [IconDynamicName.Human]: Human,
  [IconDynamicName.Weather]: Weather,
  [IconDynamicName.Job]: Job,
  [IconDynamicName.Animals]: Animals,
  [IconDynamicName.Body]: Body,
  [IconDynamicName.Character]: Character
};

export { iconDynamicComponents };
