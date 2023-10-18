import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { IFeatureProps } from "@app/components/molecules/Feature/@types/Feature";
import { IconTitle } from "@app/config/iconTitles";

enum FeaturesDescriptions {
  Category = "Na naszej stronie słownictwo pogrupowane jest w kategorie, dzięki czemu łatwo odnajdziesz interesujące Cię słownictwo z danego działu.",
  Sound = "Obok kazdego zdania oraz słowa znajduje się ikona dźwięku. Po jej kliknięciu usłyszysz w jaki sposób nalezy poprawnie wypowiadać wybrane słowo i zdanie.",
  Sentence = "Pod kazdym słowem dodane jest zdanie które pomoze zrozumieć Ci kontekst uzycia wybranego słowa.",
  Print = "Korzystając z przycisku drukuj, masz mozliwosć wydrukowania słownictwa z wybranego działu"
}

enum FeaturesTitles {
  Category = "Kategorie",
  Sound = "Słuchanie",
  Sentence = "Zdania",
  Print = "Print"
}

export const features: IFeatureProps[] = [
  {
    description: FeaturesDescriptions.Category,
    title: FeaturesTitles.Category,
    iconSrc: IconName.Category,
    iconTitle: IconTitle.Category
  },
  {
    description: FeaturesDescriptions.Sound,
    title: FeaturesTitles.Sound,
    iconSrc: IconName.Listening,
    iconTitle: IconTitle.Listening
  },
  {
    description: FeaturesDescriptions.Sentence,
    title: FeaturesTitles.Sentence,
    iconSrc: IconName.Phrases,
    iconTitle: IconTitle.Phrases
  },
  {
    description: FeaturesDescriptions.Print,
    title: FeaturesTitles.Print,
    iconSrc: IconName.Print,
    iconTitle: IconTitle.Print
  }
];
