import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import useStore from '../../store'

interface instructorType {
  id:number,
  name:string,
  role:string,
  image:string,
  nav:string
}

// Images still point at the original CDN stills — swap them for real
// instructor photographs. See the asset checklist.
const instructors:instructorType[] = [
  {
    id:1,
    name:'Arjun Mehta',
    role:'Backend & Systems',
    image:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/narrator/narratoe_image.webp',
    nav:'/instructors/backend'
  },
  {
    id:2,
    name:'Rhea Kapoor',
    role:'Frontend & Interfaces',
    image:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/tyler/tyler_image.webp',
    nav:'/instructors/frontend'
  },
  {
    id:3,
    name:'Noor Ali',
    role:'DevOps & Cloud',
    image:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/marla/marla_image.webp',
    nav:'/instructors/devops'
  }
]

const InstructorsStrip = () => {
  const setischaropen = useStore((state)=>state.setischaropen)
  const navigate = useNavigate()

  return (
    <section className='w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-neutral-900'>
      <motion.div
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:0.3}}
        transition={{duration:0.6, ease:'easeOut'}}
        className='flex flex-col gap-6 mb-14'
      >
        <span className='font-barlow text-xs tracking-[0.3em] uppercase text-bloodRed'>Who teaches</span>
        <h2 className='font-tt text-5xl md:text-7xl'>INSTRUCTORS</h2>
        <p className='font-barlow text-neutral-400 text-lg max-w-2xl'>
          Engineers who have carried a pager, not presenters reading from a deck.
        </p>
      </motion.div>

      <div className='grid md:grid-cols-3 gap-6'>
        {instructors.map((instructor,idx)=>(
          <motion.div
            key={instructor.id}
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{duration:0.5, delay:0.1*idx, ease:'easeOut'}}
            onClick={()=>{
              setischaropen()
              navigate(instructor.nav)
            }}
            className='group relative h-[26rem] rounded-2xl overflow-hidden border border-neutral-800 hover:border-bloodRed transition-colors duration-400 hover:cursor-pointer'
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className='h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500'
            />
            <div className='absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent'></div>
            <div className='absolute bottom-0 left-0 p-6 flex flex-col gap-1'>
              <h3 className='font-barlow font-bold text-2xl'>{instructor.name}</h3>
              <span className='font-barlow text-sm text-bloodRed tracking-wide'>{instructor.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default InstructorsStrip
