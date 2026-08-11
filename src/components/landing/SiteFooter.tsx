import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import { courses } from '../../data/courses'

const SiteFooter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // TODO(bugbicep): wire this to a real endpoint (newsletter provider, CRM or
  // your own API). Right now it only acknowledges locally and sends nothing.
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!email) return
    setSubmitted(true)
  }

  return (
    <footer className='w-full border-t border-neutral-900'>
      <motion.div
        id='enroll'
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:0.3}}
        transition={{duration:0.6, ease:'easeOut'}}
        className='px-6 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center text-center gap-8 scroll-mt-24'
      >
        <h2 className='font-tt text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]'>
          READY TO STOP WATCHING?
        </h2>
        <p className='font-barlow text-neutral-400 text-lg max-w-xl'>
          Next cohort opens soon. Leave your email and we will send the syllabus and the start date.
        </p>

        {submitted ? (
          <p className='font-barlow font-bold text-bloodRed py-3'>
            You're on the list. We'll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-wrap gap-3 justify-center w-full max-w-lg'>
            <input
              type='email'
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='you@email.com'
              aria-label='Email address'
              className='flex-1 min-w-60 px-5 py-3 rounded-full bg-neutral-950 border border-neutral-800 font-barlow text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-bloodRed transition-colors duration-300'
            />
            <button
              type='submit'
              className='px-8 py-3 rounded-full bg-bloodRed text-black font-barlow font-bold text-sm tracking-wider hover:bg-white transition-colors duration-300 hover:cursor-pointer'
            >NOTIFY ME
            </button>
          </form>
        )}
      </motion.div>

      <div className='px-6 md:px-12 lg:px-20 py-16 border-t border-neutral-900 grid gap-12 md:grid-cols-2 lg:grid-cols-4 font-barlow'>
        <div className='flex flex-col gap-4'>
          <span className='font-fightclub text-bloodRed text-3xl'>BUGBICEP</span>
          <p className='text-neutral-500 text-sm max-w-xs leading-relaxed'>
            Tech courses built around projects, code review, and shipping to production.
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <span className='text-xs tracking-[0.25em] uppercase text-neutral-600'>Courses</span>
          {courses.slice(0,4).map(course=>(
            <Link
              key={course.slug}
              to={`/courses/${course.slug}`}
              className='text-neutral-400 text-sm hover:text-bloodRed transition-colors'
            >{course.title}
            </Link>
          ))}
        </div>

        <div className='flex flex-col gap-3'>
          <span className='text-xs tracking-[0.25em] uppercase text-neutral-600'>Company</span>
          <Link to='/' className='text-neutral-400 text-sm hover:text-bloodRed transition-colors'>Home</Link>
          <Link to='/about' className='text-neutral-400 text-sm hover:text-bloodRed transition-colors'>About</Link>
          <Link to='/instructors' className='text-neutral-400 text-sm hover:text-bloodRed transition-colors'>Instructors</Link>
          <Link to='/rules' className='text-neutral-400 text-sm hover:text-bloodRed transition-colors'>The Rules</Link>
        </div>

        <div className='flex flex-col gap-3'>
          <span className='text-xs tracking-[0.25em] uppercase text-neutral-600'>Contact</span>
          <a href='mailto:hello@bugbicep.com' className='text-neutral-400 text-sm hover:text-bloodRed transition-colors'>hello@bugbicep.com</a>
          <div className='flex gap-4 pt-2 text-neutral-500'>
            <a className='hover:text-bloodRed transition-colors' href='https://x.com/bugbicep' target='_blank' rel='noreferrer' aria-label='X'><IconBrandTwitter size={20}/></a>
            <a className='hover:text-bloodRed transition-colors' href='https://github.com/bugbicep' target='_blank' rel='noreferrer' aria-label='GitHub'><IconBrandGithub size={20}/></a>
            <a className='hover:text-bloodRed transition-colors' href='https://www.linkedin.com/company/bugbicep/' target='_blank' rel='noreferrer' aria-label='LinkedIn'><IconBrandLinkedin size={20}/></a>
            <a className='hover:text-bloodRed transition-colors' href='mailto:hello@bugbicep.com' aria-label='Email'><IconMail size={20}/></a>
          </div>
        </div>
      </div>

      <div className='px-6 md:px-12 lg:px-20 py-8 border-t border-neutral-900 flex flex-col md:flex-row gap-4 justify-between items-center font-barlow text-xs text-neutral-600'>
        <span>© {new Date().getFullYear()} BugBicep. All rights reserved.</span>
        <span>The first rule of BugBicep: you do not skip the fundamentals.</span>
      </div>
    </footer>
  )
}

export default SiteFooter
