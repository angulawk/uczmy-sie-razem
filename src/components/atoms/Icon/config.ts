import About from "@app/../public/icons/about.svg";
import Human from "@app/../public/icons/human.svg";
import Weather from "@app/../public/icons/weather.svg";
import Job from "@app/../public/icons/job.svg";
import Animals from "@app/../public/icons/koala.svg";
import Character from "@app/../public/icons/character.svg";
import Body from "@app/../public/icons/body.svg";
import Instagram from "@app/../public/icons/instagram.svg";
import Youtube from "@app/../public/icons/youtube.svg";
import VolumeOn from "@app/../public/icons/volume-on.svg";
import VolumeOff from "@app/../public/icons/volume-off.svg";
import Students from "@app/../public/icons/students.svg";
import Category from "@app/../public/icons/category.svg";
import Listening from "@app/../public/icons/listening.svg";
import Phrases from "@app/../public/icons/phrases.svg";
import Print from "@app/../public/icons/print.svg";

import {
  IconName,
  TIconComponents
} from "@app/components/atoms/Icon/@types/Icon";

const iconComponents: TIconComponents = {
  [IconName.About]: About,
  [IconName.Human]: Human,
  [IconName.Weather]: Weather,
  [IconName.Job]: Job,
  [IconName.Animals]: Animals,
  [IconName.Body]: Body,
  [IconName.Character]: Character,
  [IconName.Instagram]: Instagram,
  [IconName.Youtube]: Youtube,
  [IconName.VolumeOn]: VolumeOn,
  [IconName.VolumeOff]: VolumeOff,
  [IconName.Students]: Students,
  [IconName.Category]: Category,
  [IconName.Listening]: Listening,
  [IconName.Phrases]: Phrases,
  [IconName.Print]: Print
};

export { iconComponents };
