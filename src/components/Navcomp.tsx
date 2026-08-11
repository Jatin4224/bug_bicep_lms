import { AnimatePresence, motion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import type { Dispatch, SetStateAction } from 'react'

const Navcomp = ({isopen,setisopen}:{isopen:boolean, setisopen: Dispatch<SetStateAction<boolean>>}) => {
  const location = useLocation();

    interface navtypes {
        id:number,
        name:string,
        link:string
      }
    
      const navLinks:navtypes[] = [
        {
          id:1,
          name:"HOME",
          link:"/"
        },

        {
          id:2,
          name:"THE RULES",
          link:"/rules"
        },
        {
          id:3,
          name:"INSTRUCTORS",
          link:"/instructors"
        },
        {
          id:4,
          name:"ABOUT",
          link:"/about"
        }
      ]
    
  return (
    <AnimatePresence>
      {isopen && (
        <div className='fixed w-full flex h-full z-40  font-kanit '>
          <motion.div
                className='h-full w-1/2 flex justify-end  items-center bg-bloodRed'
                initial={{x:"-100%"}}
                animate={{x:0}}
                exit={{x:"-100%"}}
                transition={{duration:0.4, type:"tween"}}
            >
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/nav,%20profile/tyler.webp' alt="BugBicep menu backdrop" className='h-full object-cover grayscale brightness-70 blur-[0.05rem] ' />
            </motion.div>
            <motion.div 
                className='h-full w-1/2 flex items-center bg-black'
                initial={{x:"100%"}}
                animate={{x:0}}
                exit={{x:"100%"}}
                transition={{ duration:0.4, type:"tween"}}>
                <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/nav,%20profile/narrator.webp' alt="BugBicep menu backdrop" className='h-full object-cover grayscale' />
                <div className='absolute right-5 text-end flex flex-col md:text-5xl lg:text-6xl gap-5 font-tt'>
                {
                    navLinks.map((nav)=>(
                        <Link 
                            key={nav.id} 
                            to={nav.link}
                            className={`${location.pathname === nav.link ? 'text-bloodRed': 'text-neutral-500/40'} hover:text-bloodRed transition-all duration-300`}
                            onClick={()=>setisopen(false)}
                        >{nav.name}
                        </Link>
                    ))
                }
                </div>
            </motion.div> 
        </div>
      )}
    </AnimatePresence>
  )
}

export default Navcomp


 