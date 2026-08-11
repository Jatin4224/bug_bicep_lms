import { motion } from 'motion/react'

interface statType {
  value:string,
  label:string
}

// TODO(bugbicep): replace every number below with real figures before launch.
const stats:statType[] = [
  { value:'12,000+', label:'Learners trained' },
  { value:'24',      label:'Courses live' },
  { value:'4.8/5',   label:'Average rating' },
  { value:'60+',     label:'Hiring partners' }
]

const Stats = () => {
  return (
    <section className='w-full px-6 md:px-12 lg:px-20'>
      <div className='border-y border-neutral-800 grid grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat,idx)=>(
          <motion.div
            key={stat.label}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5, delay:0.1*idx, ease:'easeOut'}}
            className='flex flex-col items-center justify-center gap-2 py-12 border-neutral-800 odd:border-r [&:nth-child(-n+2)]:border-b lg:border-b-0 lg:border-r lg:last:border-r-0'
          >
            <span className='font-tt text-5xl md:text-6xl text-bloodRed'>{stat.value}</span>
            <span className='font-barlow text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-500'>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
