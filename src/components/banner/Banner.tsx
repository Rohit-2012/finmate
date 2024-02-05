import bannerStyle from './Banner.module.css'

type BannerProps = {
  background: string,
  mainText: string,
  subText?: string
}

const Banner = ({background, mainText, subText}: BannerProps) => {
  return (
    <section className={bannerStyle.fixed_banner_container} style={{background: background}}>
      <div className={bannerStyle.banner}>
          <h1 className={bannerStyle.main_text}>{mainText}</h1>
          <h3 className={bannerStyle.sub_text}>{subText}</h3>
      </div>
    </section>
  )
}

export default Banner
