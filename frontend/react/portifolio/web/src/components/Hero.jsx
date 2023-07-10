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
            Olá, Eu sou o <span className="text-[#915eff]">Joel Maykon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Eu desenvolvo aplicações para a web.{' '}
            <br className="sm:block hidden" /> Posso atuar no Front-end,
            Back-end ou DevOps.
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <img src="https://media.licdn.com/dms/image/D4D03AQGzebhXD1HT5w/profile-displayphoto-shrink_800_800/0/1687971502759?e=2147483647&v=beta&t=W8by9n06w31RpQ2_G0RNzwDOUxmSaL25btgJB8L_HQE" width={"250px"} alt="..." className="shadow rounded-full items-center border-none " />
      </div>
    </section>
  )
}

export default Hero
