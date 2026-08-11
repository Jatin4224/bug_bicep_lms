import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useParams } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { IconArrowLeft, IconChevronDown, IconCheck } from '@tabler/icons-react'
import { getCourse, curriculum } from '../data/courses'
import SiteFooter from '../components/landing/SiteFooter'

const CourseDetail = () => {
  const { slug } = useParams()
  const course = getCourse(slug)
  const lenis = useLenis()
  const [openWeek, setOpenWeek] = useState<string | null>('01')

  // Lenis owns the scroll, so a native anchor jump would fight it.
  const jumpToEnrol = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    lenis?.scrollTo('#enroll', { duration:1.4 })
  }

  if(!course){
    return (
      <div className='min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center'>
        <h1 className='font-tt text-5xl md:text-7xl'>COURSE NOT FOUND</h1>
        <p className='font-barlow text-neutral-400'>That course does not exist — or it has not launched yet.</p>
        <Link
          to='/'
          className='px-8 py-3 rounded-full bg-bloodRed text-black font-barlow font-bold text-sm tracking-wider hover:bg-white transition-colors duration-300'
        >BACK TO COURSES
        </Link>
      </div>
    )
  }

  const totalLessons = curriculum.reduce((sum,week)=> sum + week.lessons.length, 0)

  return (
    <div className='h-auto'>
      <motion.section
        initial={{opacity:0, y:30, filter:'blur(10px)'}}
        animate={{opacity:1, y:0, filter:'blur(0px)'}}
        transition={{duration:0.6, ease:'easeOut'}}
        className='px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-20'
      >
        <Link
          to='/'
          className='inline-flex items-center gap-2 font-barlow text-xs tracking-[0.25em] text-neutral-500 hover:text-bloodRed transition-colors duration-300 mb-10'
        >
          <IconArrowLeft size={16}/> ALL COURSES
        </Link>

        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10'>
          <div className='flex flex-col gap-5 max-w-3xl'>
            <span className='font-barlow text-[0.7rem] tracking-[0.3em] text-bloodRed'>{course.track}</span>
            <h1 className='font-tt text-5xl md:text-7xl lg:text-8xl leading-[0.95]'>{course.title}</h1>
            <p className='font-barlow text-neutral-400 text-lg md:text-xl'>{course.blurb}</p>
            <div className='flex flex-wrap gap-x-5 gap-y-2 font-barlow text-sm text-neutral-600 pt-2'>
              <span>{course.level}</span>
              <span>·</span>
              <span>{course.duration}</span>
              <span>·</span>
              <span>{course.lessons}</span>
              <span>·</span>
              <span>Taught by {course.instructor}</span>
            </div>
          </div>

          <div className='flex flex-col gap-4 shrink-0'>
            <span className='font-tt text-5xl'>{course.price}</span>
            <a
              href='#enroll'
              onClick={jumpToEnrol}
              className='px-10 py-4 rounded-full bg-bloodRed text-black text-center font-barlow font-bold text-sm tracking-wider hover:bg-white transition-colors duration-300'
            >ENROL NOW
            </a>
          </div>
        </div>
      </motion.section>

      <section className='px-6 md:px-12 lg:px-20 py-16 border-t border-neutral-900'>
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true, amount:0.3}}
          transition={{duration:0.5, ease:'easeOut'}}
          className='flex flex-col gap-8'
        >
          <span className='font-barlow text-xs tracking-[0.3em] uppercase text-bloodRed'>What you'll build</span>
          <div className='grid md:grid-cols-3 gap-6'>
            {course.builds.map((build,idx)=>(
              <div key={idx} className='flex gap-4 items-start p-6 rounded-2xl border border-neutral-800 bg-neutral-950'>
                <IconCheck size={20} className='text-bloodRed shrink-0 mt-1' stroke={2.5}/>
                <p className='font-barlow text-neutral-300 leading-relaxed'>{build}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className='px-6 md:px-12 lg:px-20 py-20 border-t border-neutral-900'>
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true, amount:0.2}}
          transition={{duration:0.5, ease:'easeOut'}}
          className='flex flex-col gap-4 mb-12'
        >
          <span className='font-barlow text-xs tracking-[0.3em] uppercase text-bloodRed'>The syllabus</span>
          <h2 className='font-tt text-5xl md:text-7xl'>CURRICULUM</h2>
          <p className='font-barlow text-neutral-500'>
            {curriculum.length} weeks · {totalLessons} sessions · a reviewed project every week
          </p>
        </motion.div>

        <div className='flex flex-col gap-4'>
          {curriculum.map((week,idx)=>{
            const isOpen = openWeek === week.id
            return (
              <motion.div
                key={week.id}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true, amount:0.2}}
                transition={{duration:0.5, delay:0.08*idx, ease:'easeOut'}}
                className={`rounded-2xl border bg-neutral-950 overflow-hidden transition-colors duration-400 ${isOpen ? 'border-bloodRed' : 'border-neutral-800 hover:border-neutral-700'}`}
              >
                <button
                  onClick={()=> setOpenWeek(isOpen ? null : week.id)}
                  aria-expanded={isOpen}
                  className='w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left hover:cursor-pointer'
                >
                  <div className='flex items-baseline gap-5 md:gap-8'>
                    <span className='font-tt text-4xl md:text-5xl text-neutral-700'>{week.id}</span>
                    <div className='flex flex-col gap-2'>
                      <h3 className='font-barlow font-bold text-2xl md:text-3xl tracking-wide'>WEEK {Number(week.id)} — {week.title}</h3>
                      <p className='font-barlow text-neutral-500 text-sm max-w-2xl'>{week.summary}</p>
                    </div>
                  </div>
                  <motion.span
                    animate={{rotate: isOpen ? 180 : 0}}
                    transition={{duration:0.3}}
                    className='shrink-0 text-bloodRed'
                  >
                    <IconChevronDown size={28}/>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{height:0, opacity:0}}
                      animate={{height:'auto', opacity:1}}
                      exit={{height:0, opacity:0}}
                      transition={{duration:0.35, ease:'easeInOut'}}
                      className='overflow-hidden'
                    >
                      <ul className='px-6 md:px-8 pb-8 flex flex-col'>
                        {week.lessons.map((lesson,lessonIdx)=>(
                          <li
                            key={lessonIdx}
                            className='flex items-center justify-between gap-6 py-4 border-t border-neutral-900 font-barlow'
                          >
                            <div className='flex items-center gap-5'>
                              <span className='text-xs text-neutral-700 w-6 shrink-0'>
                                {String(lessonIdx+1).padStart(2,'0')}
                              </span>
                              <span className='text-neutral-300'>{lesson.title}</span>
                            </div>
                            <span className='text-xs text-neutral-600 shrink-0'>{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default CourseDetail
