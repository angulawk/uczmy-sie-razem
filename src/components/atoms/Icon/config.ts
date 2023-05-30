import Human from "@app/../public/icons/human.svg";
import Weather from "@app/../public/icons/weather.svg";
import Job from "@app/../public/icons/job.svg";
import Animals from "@app/../public/icons/koala.svg";
import Character from "@app/../public/icons/character.svg";
import Body from "@app/../public/icons/body.svg";
import Logo from "@app/../public/icons/logo.svg";
import Instagram from "@app/../public/icons/instagram.svg";
import Youtube from "@app/../public/icons/youtube.svg";

import {
  IconName,
  TIconComponents
} from "@app/components/atoms/Icon/@types/Icon";

const iconComponents: TIconComponents = {
  [IconName.Human]: Human,
  [IconName.Weather]: Weather,
  [IconName.Job]: Job,
  [IconName.Animals]: Animals,
  [IconName.Body]: Body,
  [IconName.Character]: Character,
  [IconName.Logo]: Logo,
  [IconName.Instagram]: Instagram,
  [IconName.Youtube]: Youtube
};

export { iconComponents };
