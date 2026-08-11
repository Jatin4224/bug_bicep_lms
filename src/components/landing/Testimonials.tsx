import { motion } from 'motion/react'

interface testimonialType {
  id:number,
  quote:string,
  name:string,
  role:string
}

// TODO(bugbicep): these are written placeholders, not real reviews. Replace
// them with quotes you have collected and have permission to publish, and add
// the company name only where the learner has agreed to be named.
const testimonials:testimonialType[] = [
  {
    id:1,
    quote:'I had watched maybe forty hours of Java tutorials and could not start a project on my own. Six weeks in here and I had an API running that other people were using.',
    name:'Priya S.',
    role:'Backend Engineer, fintech startup'
  },
  {
    id:2,
    quote:'The code review is the whole product. Getting a PR sent back four times taught me more than any course I have paid for.',
    name:'Rahul K.',
    role:'SDE-1, product company'
  },
  {
    id:3,
    quote:'I came for the AI track expecting notebooks. I left having deployed a retrieval system that handles real traffic and a bill I had to optimise.',
    name:'Ananya D.',
    role:'ML Engineer, healthtech'
  },
  {
    id:4,
    quote:'Every other platform hands you a certificate for finishing videos. This one refuses to let you finish until the thing actually works.',
    name:'Vikram T.',
    role:'Career switcher, ex-mechanical'
  },
  {
    id:5,
    quote:'The system design track fixed the exact thing I kept failing interviews on — I could describe a queue but never defend why I chose one.',
    name:'Meera N.',
    role:'Senior Engineer, logistics'
  },
  {
    id:6,
    quote:'Shipping broken and fixing it in public was terrifying for about two weeks. Now it is just how I work.',
    name:'Aditya R.',
    role:'Full-stack Developer, agency'
  }
]

const Testimonials = () => {
  return (
    <section className='w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-neutral-900'>
      <motion.div
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:0.3}}
        transition={{duration:0.6, ease:'easeOut'}}
        className='flex flex-col gap-6 mb-14'
      >
        <span className='font-barlow text-xs tracking-[0.3em] uppercase text-bloodRed'>What came out of it</span>
        <h2 className='font-tt text-5xl md:text-7xl'>TESTIMONIALS</h2>
        <p className='font-barlow text-neutral-400 text-lg max-w-2xl'>
          People who arrived having watched a lot and built very little.
        </p>
      </motion.div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonials.map((testimonial,idx)=>(
          <motion.figure
            key={testimonial.id}
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{duration:0.5, delay:0.06*idx, ease:'easeOut'}}
            className='flex flex-col justify-between gap-8 p-7 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-colors duration-400'
          >
            <blockquote className='font-barlow text-neutral-300 leading-relaxed'>
              “{testimonial.quote}”
            </blockquote>
            <figcaption className='flex items-center gap-4 border-t border-neutral-800 pt-5'>
              <div className='h-11 w-11 shrink-0 rounded-full border border-bloodRed flex items-center justify-center font-barlow font-bold text-bloodRed'>
                {testimonial.name.charAt(0)}
              </div>
              <div className='flex flex-col'>
                <span className='font-barlow font-bold text-sm'>{testimonial.name}</span>
                <span className='font-barlow text-xs text-neutral-500'>{testimonial.role}</span>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
