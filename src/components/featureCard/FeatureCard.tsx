import FCardStyle from './FeatureCard.module.css'
import { FeatureCardType } from "../../utils/featureCardData";

const FeatureCard = ({ featureCard }: { featureCard: FeatureCardType }) => {
    const Icon = featureCard.icon
  return (
    <div className={`${FCardStyle.card_container} ${FCardStyle[featureCard.background]}`}>
          <div className={FCardStyle.icon}><Icon /></div>
          <h2 className={FCardStyle.card_text}>{featureCard.text}</h2>
          <span className={FCardStyle.subText}>{featureCard.subText}</span>
    </div>
  )
}

export default FeatureCard
