import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cardSliderStyle from './CardSlider.module.css'
import Slider from "react-slick";
import { featureCardList } from "../../utils/featureCardData";
import FeatureCard from "../featureCard/FeatureCard";

const CardSlider = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={cardSliderStyle.slider_container}>
      <Slider {...settings}>
        {
          featureCardList.map(featureCard => {
            return <FeatureCard key={featureCard.id} featureCard={featureCard}/>
          })
        }
      </Slider>
    </div>
  )
}

export default CardSlider
