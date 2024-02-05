
import Banner from '../../components/banner/Banner'
import CardSlider from '../../components/slider/CardSlider'
import homeStyle from './Home.module.css'

const Home = () => {
  return (
    <div>
      <Banner background={"https://images.pexels.com/photos/5224948/pexels-photo-5224948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} mainText={'Lorem ipsum dolor sit'} subText={"abcdefgh" } />
      <CardSlider />
    </div>
  )
}

export default Home
