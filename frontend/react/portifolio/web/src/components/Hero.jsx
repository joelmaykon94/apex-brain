import { motion } from 'framer-motion'
import { styles } from 'styles'
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Joel Maykon<span className="text-[#915eff]"> | Data & AI</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Our mission is to harness the transformative power of AI. {' '}
            <br className="sm:block hidden" /> Join us on our journey to reshape the future of technology.
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQFa-cpWzrWG9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713350518513?e=1729123200&v=beta&t=A_qgWxKvivR_gNWTotArt9WDcf-3vipZKvqqQxbSqUI" width={"250px"} alt="..." className="shadow rounded-full items-center border-none " />
      </div>
    </section>
  )
}

export default Hero
