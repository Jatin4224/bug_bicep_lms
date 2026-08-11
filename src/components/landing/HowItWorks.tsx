import { motion } from 'motion/react'

interface stepType {
  id:string,
  title:string,
  body:string
}

const steps:stepType[] = [
  {
    id:'01',
    title:'LEARN',
    body:'Short, dense sessions on one concept at a time. No filler modules, no forty-minute intros.'
  },
  {
    id:'02',
    title:'BUILD',
    body:'Every concept lands in a project with a deadline and constraints you did not choose.'
  },
  {
    id:'03',
    title:'REVIEW',
    body:'A senior engineer reads your code line by line and sends it back until it is right.'
  },
  {
    id:'04',
    title:'SHIP',
    body:'It goes to production behind a real domain. Broken builds are part of the curriculum.'
  }
]

const HowItWorks = () => {
  return (
    <section id='how' className='w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-neutral-900'>
      <motion.div
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:0.3}}
        transition={{duration:0.6, ease:'easeOut'}}
        className='flex flex-col gap-6 mb-16'
      >
        <span className='font-barlow text-xs tracking-[0.3em] uppercase text-bloodRed'>The method</span>
        <h2 className='font-tt text-5xl md:text-7xl'>HOW A COURSE RUNS</h2>
        <p className='font-barlow text-neutral-400 text-lg max-w-2xl'>
          The same loop every week, in every track, until it stops feeling difficult.
        </p>
      </motion.div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6'>
        {steps.map((step,idx)=>(
          <motion.div
            key={step.id}
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.3}}
            transition={{duration:0.5, delay:0.1*idx, ease:'easeOut'}}
            className='flex flex-col gap-4 lg:pr-6 lg:border-r border-neutral-900 last:border-r-0'
          >
            <span className='font-tt text-6xl text-neutral-800'>{step.id}</span>
            <h3 className='font-barlow font-bold text-2xl text-bloodRed tracking-wide'>{step.title}</h3>
            <p className='font-barlow text-neutral-500 leading-relaxed'>{step.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
