import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { courses } from '../../data/courses'

const tracks:string[] = ['ALL','JAVA','BACKEND','AI','FUNDAMENTALS']

const Courses = () => {
  const [active, setActive] = useState('ALL')

  const visible = active === 'ALL'
    ? courses
    : courses.filter(course => course.track === active)

  return (
    <section id='courses' className='w-full px-6 md:px-12 lg:px-20 py-24 md:py-32'>
      <motion.div
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:0.3}}
        transition={{duration:0.6, ease:'easeOut'}}
        className='flex flex-col gap-6 mb-14'
      >
        <span className='font-barlow text-xs tracking-[0.3em] uppercase text-bloodRed'>The catalogue</span>
        <h2 className='font-tt text-5xl md:text-7xl'>COURSES</h2>
        <p className='font-barlow text-neutral-400 text-lg max-w-2xl'>
          Every track is a queue of real projects with a deadline, a reviewer, and a definition of done.
        </p>

        <div className='flex flex-wrap gap-3 pt-2 font-barlow text-xs tracking-widest'>
          {tracks.map(track=>(
            <button
              key={track}
              onClick={()=>setActive(track)}
              className={`px-5 py-2 rounded-full border transition-colors duration-300 hover:cursor-pointer ${
                active === track
                  ? 'border-bloodRed text-bloodRed'
                  : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'
              }`}
            >{track}
            </button>
          ))}
        </div>
      </motion.div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {visible.map((course,idx)=>(
          <motion.div
            key={course.id}
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{duration:0.5, delay:0.06*idx, ease:'easeOut'}}
          >
            <Link
              to={`/courses/${course.slug}`}
              className='group h-full flex flex-col justify-between gap-8 p-7 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-bloodRed hover:-translate-y-1 transition-all duration-400'
            >
              <div className='flex flex-col gap-4'>
                <span className='font-barlow text-[0.65rem] tracking-[0.25em] text-bloodRed'>{course.track}</span>
                <h3 className='font-barlow font-bold text-2xl leading-tight'>{course.title}</h3>
                <p className='font-barlow text-neutral-500 text-sm leading-relaxed'>{course.blurb}</p>
              </div>

              <div className='flex flex-col gap-5'>
                <div className='flex flex-wrap gap-x-4 gap-y-1 font-barlow text-xs text-neutral-600'>
                  <span>{course.level}</span>
                  <span>·</span>
                  <span>{course.duration}</span>
                  <span>·</span>
                  <span>{course.lessons}</span>
                </div>
                <div className='flex items-center justify-between border-t border-neutral-800 pt-5'>
                  <span className='font-tt text-3xl'>{course.price}</span>
                  <span className='font-barlow font-bold text-xs tracking-widest text-neutral-500 group-hover:text-bloodRed transition-colors duration-300'>
                    VIEW COURSE →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Courses
