import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'

/**
 * The hinge between the cinematic intro and the conventional landing page.
 * Everything above this is atmosphere; everything below it sells the product.
 */
const Landing = () => {
  const lenis = useLenis()

  // Lenis owns the scroll, so a native anchor jump would fight it.
  const jumpTo = (e:React.MouseEvent<HTMLAnchorElement>, target:string) => {
    e.preventDefault()
    lenis?.scrollTo(target, { duration:1.4 })
  }

  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center px-6 py-32 text-center'>
      <motion.div
        initial={{opacity:0, y:40, filter:'blur(10px)'}}
        whileInView={{opacity:1, y:0, filter:'blur(0px)'}}
        viewport={{once:true, amount:0.3}}
        transition={{duration:0.8, ease:'easeOut'}}
        className='flex flex-col items-center gap-8'
      >
        <h1 className='font-fightclub text-bloodRed text-4xl md:text-6xl'>BUGBICEP</h1>

        <h2 className='font-tt text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-[0.95]'>
          TECH COURSES THAT MAKE YOU BUILD, NOT WATCH
        </h2>

        <p className='font-barlow text-lg md:text-xl text-neutral-400 max-w-2xl'>
          Java, backend engineering, and AI — taught as projects with real code review.
          You ship every week. Nobody gets through by watching.
        </p>

        <div className='flex flex-wrap gap-4 justify-center pt-4 font-barlow font-bold text-sm tracking-wider'>
          <a
            href='#courses'
            onClick={(e)=>jumpTo(e,'#courses')}
            className='px-8 py-3 rounded-full bg-bloodRed text-black hover:bg-white transition-colors duration-300'
          >BROWSE COURSES
          </a>
          <a
            href='#how'
            onClick={(e)=>jumpTo(e,'#how')}
            className='px-8 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:border-bloodRed hover:text-bloodRed transition-colors duration-300'
          >HOW IT WORKS
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Landing
