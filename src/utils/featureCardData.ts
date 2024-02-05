import { IconType } from "react-icons";
import { GiMoneyStack } from "react-icons/gi";
import { GrPowerCycle } from "react-icons/gr"
import { LuFilePlus2 } from "react-icons/lu";
import { GrScorecard } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";

export type FeatureCardType = {
    id: number;
    icon: IconType
  text: string;
  subText?: string;
  background: string;
};

const featureCardList: FeatureCardType[] = [
  {
        id: 1,
      icon: GiMoneyStack,
    text: "Processing Charges",
    subText: "(5L to 10L) 50%",
    background: "blue",
  },
  {
      id: 2,
      icon: GrPowerCycle ,
    text: "Easy Process",
    background: "purple",
  },
  {
      id: 3,
      icon: LuFilePlus2,
    text: "Insurance",
    background: "red",
  },
  {
      id: 4,
      icon: BsGraphUpArrow,
    text: "Extended Limit",
    background: "green",
  },
  {
      id: 5,
      icon: GrScorecard,
    text: "Less Cibil Score",
    background: "gold",
  },
];

export { featureCardList };
