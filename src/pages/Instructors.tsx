import { useEffect, useRef, useState, } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import useStore from '../store'



const Instructors = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const setischaropen = useStore((state)=>state.setischaropen)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [loaded, setloaded] = useState(false)
  const navigate = useNavigate();

  useEffect(()=>{
    const videos = videoRefs.current

    const checkVediosStatus = ()=>{
      const allLoaded = videos.every(video=>
        video && video.readyState >= 3
      );
      if(allLoaded){
        setloaded(true)
      }
    }

    // A stalled or missing video must never leave the grid permanently
    // invisible, so reveal on error and after a hard timeout regardless.
    const reveal = () => setloaded(true)
    const fallback = setTimeout(reveal, 3000)

    checkVediosStatus();

    videos.forEach(video=>{
      if(video){
        video.addEventListener('loadeddata',checkVediosStatus)
        video.addEventListener('error',reveal)
      }
    });

    return()=>{
      clearTimeout(fallback)
      videos.forEach(video=>{
        if(video){
          video.removeEventListener('loadeddata',checkVediosStatus)
          video.removeEventListener('error',reveal)
        }
      })
    }
  },[])

  interface instructorType {
    id:number,
    name:string,
    role:string,
    track:string,
    nav:string
  }

  const instructors:instructorType[] = [
    {
      id:1,
      name:"Arjun Mehta",
      role:"Backend & Systems",
      track:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/narrator/char_narrator.mp4',
      nav:"/instructors/backend"
    },
    {
      id:2,
      name:"Rhea Kapoor",
      role:"Frontend & Interfaces",
      track:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/tyler/char_tyler.mp4',
      nav:"/instructors/frontend"
    },
    {
      id:3,
      name:"Noor Ali",
      role:"DevOps & Cloud",
      track:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/marla/char_marla.mp4',
      nav:"/instructors/devops"
    }
  ]


  return (
    <motion.div
      initial={{
        y:50,
        opacity:0,
        filter:"blur(20px)"
      }}
      animate={{
        y:0,
        opacity: loaded? 1 : 0,
        filter:loaded? "blur(0px)" : "blur(20px)"
      }}
      transition={{duration:0.8, ease:'easeOut'} }
      className='h-screen'>
      <div className='flex gap-2 h-full w-full pt-15 pb-10 px-5'>
        {instructors.map((instructor,idx)=>(
          <motion.div
            key={idx}
            className={`group relative flex items-center justify-center ${!(hovered == idx) && 'grayscale' } rounded-lg overflow-hidden hover:cursor-pointer`}
            onMouseEnter={() => {
              setHovered(idx)
              videoRefs.current[idx]?.play()
            }}
            onMouseLeave={() => {
              setHovered(null)
              videoRefs.current[idx]?.pause()
            }}
            animate={{
              flexBasis: hovered === idx ? "150%" : "100%",
              transition: { duration: 0.4, type: "spring" }
            }}
            onClick={()=> {
              setischaropen()
              navigate(instructor.nav)
            }}
          >
          <video
            src={instructor.track}
            loop
            muted
            ref={(el) => { videoRefs.current[idx] = el }}
            className={`w-full h-full object-cover ${instructor.id==3 && "object-[45%]"}`}
          />
          <motion.div
            animate={hovered===idx? {y:0} : {y:"100%"} }
            transition={{duration:0.2}}
            className='absolute font-fightclub text-bloodRed md:text-4xl lg:text-6xl bottom-0'>{instructor.name}
          </motion.div>
        </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Instructors
