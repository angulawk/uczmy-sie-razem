import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { IInfoCardProps } from "@app/components/molecules/InfoCard/@types/InfoCard";
import { IconTitle } from "@app/config/iconTitles";

enum InfoCardDescription {
  Category = "Na naszej stronie słownictwo pogrupowane jest w kategorie, dzięki czemu łatwo odnajdziesz interesujące Cię słownictwo z danego działu.",
  Sound = "Obok każdego zdania oraz słowa znajduje się ikona dźwięku. Po jej kliknięciu usłyszysz w jaki sposób należy poprawnie wypowiadać wybrane słowo i zdanie.",
  Sentence = "Pod każdym słowem dodane jest zdanie, które pomoże zrozumieć Ci kontekst użycia wybranego słowa.",
  Print = "Korzystając z przycisku drukuj, masz możliwość wydrukowania słownictwa z wybranego działu"
}

enum InfoCardTitle {
  Category = "Kategorie",
  Sound = "Słuchanie",
  Sentence = "Zdania",
  Print = "Print"
}

export const infoCards: IInfoCardProps[] = [
  {
    description: InfoCardDescription.Category,
    title: InfoCardTitle.Category,
    iconSrc: IconName.Category,
    iconTitle: IconTitle.Category
  },
  {
    description: InfoCardDescription.Sound,
    title: InfoCardTitle.Sound,
    iconSrc: IconName.Listening,
    iconTitle: IconTitle.Listening
  },
  {
    description: InfoCardDescription.Sentence,
    title: InfoCardTitle.Sentence,
    iconSrc: IconName.Phrases,
    iconTitle: IconTitle.Phrases
  },
  {
    description: InfoCardDescription.Print,
    title: InfoCardTitle.Print,
    iconSrc: IconName.Print,
    iconTitle: IconTitle.Print
  }
];
