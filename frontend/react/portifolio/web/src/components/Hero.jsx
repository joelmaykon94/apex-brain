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
        <img src="https://media.licdn.com/dms/image/D4D03AQGn0kQIVBMWiQ/profile-displayphoto-shrink_200_200/0/1698333246449?e=1715212800&v=beta&t=1tcPacRH8kZfRNvYpRngcB9we1spynUmTwH7YJcOIaM" width={"250px"} alt="..." className="shadow rounded-full items-center border-none " />
      </div>
    </section>
  )
}

export default Hero
