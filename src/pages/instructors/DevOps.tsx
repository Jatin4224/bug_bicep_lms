import  { useEffect, useRef } from 'react'
import useStore from '../../store'
import { motion } from 'motion/react'


const DevOps = () => {
  const ismute = useStore((state)=>state.ismute)
  const audioRef = useRef<HTMLAudioElement>(null)


  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.muted = !ismute
    }
  },[ismute])

  useEffect(()=>{
    const playaudio = async () =>{
      if(audioRef.current ){
        audioRef.current.volume = 0.25
        await audioRef.current.play()
      }
    }
    playaudio()
  },[])


  return (

    <div className='h-auto'>
      <audio
        src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/marla/sweetDreams.mp3'
        ref={audioRef}
        loop>

      </audio>
      <motion.div
        initial={{opacity:0, filter:"blur(10px)"}}
        animate={{opacity:1, filter:"blur(0px)"}}
        transition={{duration:0.5, delay:0.2}}
        className='h-screen relative flex justify-start items-start'>
        <div className='relative'>
          <div className='absolute  top-0 h-full w-full  bg-linear-to-r from-transparent from-70% to-black'></div>
          <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/marla/marla_image.webp' alt="Noor Ali" className='h-screen' />
        </div>
          <div className='h-full w-1/2 flex flex-col gap-5 font-barlow  justify-center'>
            <div className='font-bold'>
              <h1 className='text-8xl '>NOOR ALI</h1>
              <h1 className='text-bloodRed text-3xl'>DevOps & Cloud</h1>
            </div>
            <div className='font-barlow text-neutral-500 text-xl'>
              <h1>Keeps the pipeline honest so code reaches production the day it is written.</h1>
              <h1>Lives in terminals, dashboards, and incident channels at 3am.</h1>
              <h1>Teaches: CI/CD, Containers & Cloud Infrastructure</h1>
              <h1>Cohorts led: 9 (and counting)</h1>
            </div>
        </div>
        <img
          src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/marla/marla_number.webp'
          alt="badge"
          className='absolute h-40 top-0 right-0' />
      </motion.div>
    </div>
  )
}

export default DevOps
