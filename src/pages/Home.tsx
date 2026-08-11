import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import useStore from '../store'
import Landing from '../components/landing/Landing'
import Stats from '../components/landing/Stats'
import Courses from '../components/landing/Courses'
import HowItWorks from '../components/landing/HowItWorks'
import InstructorsStrip from '../components/landing/InstructorsStrip'
import Testimonials from '../components/landing/Testimonials'
import SiteFooter from '../components/landing/SiteFooter'

const Home = () => {
  const firstRef = useRef<HTMLDivElement>(null)
  const firstPanelRef = useRef<HTMLDivElement>(null)
  const endingRef = useRef<HTMLVideoElement>(null)
  const horizantalRef = useRef<HTMLDivElement>(null)
  const [isplaying, setisplaying] = useState(true)
  const [showQuote, setshowQuote] = useState(false)
  const ismute = useStore((state)=>state.ismute)


  useEffect(()=>{
    if(endingRef.current){
      endingRef.current.muted = !ismute
    }
  },[ismute])

  useEffect(()=>{
    const playvedio = async () =>{
      if(endingRef.current && isplaying){
        await endingRef.current.play()
      }
    }
    playvedio()
  },[isplaying])

  useEffect(()=>{
    if(endingRef.current && !isplaying){
      endingRef.current.pause()
    }
  },[isplaying])

  const {scrollYProgress:firstScroll} = useScroll({
    target: firstRef,
    offset: ["start start","end start"]
  })

  const {scrollYProgress:horizantalScroll} = useScroll({
    target:horizantalRef
  })

  const shot1text1 = useTransform(horizantalScroll,[0.0,0.25], [200,-200])
  const reserctedText = useTransform(horizantalScroll,[0.12,0.38],[-100,100])
  const reserctedText2 = useTransform(horizantalScroll,[0.12,0.38],[300,-10])

  const owninigText = useTransform(horizantalScroll,[0.45,0.54],["-125%","0%"])
  const owninigText1 = useTransform(horizantalScroll,[0.46,0.54],["-125%","0%"])
  const owninigText2 = useTransform(horizantalScroll,[0.47,0.54],["-125%","0%"])
  const owninigText3 = useTransform(horizantalScroll,[0.61,0.65],["125%","0%"])
  const owninigText4 = useTransform(horizantalScroll,[0.62,0.65],["125%","0%"])
  const owninigText5 = useTransform(horizantalScroll,[0.63,0.65],["125%","0%"])

  const slideText = useTransform(horizantalScroll,[0.28,0.56],[-400,400])
  const fctext = useTransform(horizantalScroll,[0.715,0.78],["-100%","0%"])
  const fctext2 = useTransform(horizantalScroll,[0.8,0.93],["100%","0%"])

  const sittingText = useTransform(horizantalScroll,[0.64,0.84],[0,-300])
  const sittingText1 = useTransform(horizantalScroll,[0.64,0.84],[50,-300])
  const sittingText2 = useTransform(horizantalScroll,[0.64,0.84],[100,-300])


  const {scrollYProgress:firstPanelScroll} = useScroll({
    target:firstPanelRef,
    offset: ["start end", "end end"]
  })


  const xTransfrom = useTransform(horizantalScroll, [0,1],["0%", "-100%"])
  const textY = useTransform(firstScroll, [0,1] , ["100%","-100%"])
  const volmueControl = useTransform(firstScroll, [0,1], [1,0])
  const transfromYText = useTransform(firstPanelScroll, [0,1], [200,-200])


  useMotionValueEvent(firstScroll,"change",(latest =>{
    if(endingRef.current){
      endingRef.current.volume = volmueControl.get()
      if(latest >= 0.9){
        setisplaying(false)
      }else{
        setisplaying(true)
      }
    }
  }))

  useMotionValueEvent(horizantalScroll,'change',(latest)=>{
    if(latest==1){
      setshowQuote(true)
    }else{
      setshowQuote(false)
    }
  })


  return (
    <div className='h-auto flex flex-col'>
      <div ref={firstRef} className='h-screen'>
        <div className='absolute flex overflow-hidden justify-center items-end h-screen w-full bg-linear-to-b from-transparent from-90% to-black '>
          <motion.h1
            style={{y:textY}}
            className='font-tt lg:text-7xl md:text-6xl'
          >YOU FOUND US AT EXACTLY THE RIGHT TIME OF YOUR CAREER
          </motion.h1>
        </div>
        <video
          src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/endShot.mp4'
          ref={endingRef}
          loop
          className='object-cover h-screen'/>
      </div>

      <div ref={horizantalRef} className='h-[400vh] relative'>
        < motion.div style={{opacity:0,filter:"blur(10px)"}} animate={showQuote?{opacity:1,filter:"blur(0px)"}:{}} className='absolute bottom-0 h-screen w-full flex justify-center items-center'>
            <h1 className='font-tt text-5xl'>"IT'S ONLY AFTER YOU'VE BROKEN EVERYTHING THAT YOU'RE FREE TO BUILD ANYTHING."</h1>
        </motion.div>

        <div className='h-screen sticky top-0 flex items-center overflow-hidden'>
          <motion.div style={{x:xTransfrom}} className='flex'>

            <div ref={firstPanelRef} className='h-screen w-screen flex-shrink-0 bg-black flex items-center justify-center relative'>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/uktyler.webp' alt="whereToStart" />
              <motion.div style={{y:transfromYText}} className='absolute h-full w-full font-barlow font-bold text-5xl flex flex-col justify-center px-5'>
                <h1>PEOPLE ALWAYS ASK US</h1>
                <h1 className='text-bloodRed'>WHERE TO START</h1>
              </motion.div>
            </div>


            <div className='h-screen w-screen flex-shrink-0 bg-black flex items-center justify-center relative'>
              <img
                src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/insomnia.webp'
                alt="tutorialLoop"
                className='relative' />
              <div className='absolute  h-full w-full flex flex-col justify-center items-center gap-50'>
                <motion.h1
                  style={{x:shot1text1}}
                  className='lg:text-6xl md:text-5xl font-barlow font-bold text-bloodRed'>FOR SIX MONTHS, YOU ONLY WATCHED TUTORIALS.</motion.h1>
                <motion.div style={{x:shot1text1}} className='z-10 lg:text-2xl font-barlow font-bold md:xl'>
                  <h1 >WITH TUTORIALS, NOTHING STICKS. EVERYTHING'S SECONDHAND. EVERYTHING'S A COPY OF A COPY, OF A COPY.</h1>
                  <h1 >WITH TUTORIALS, NOTHING STICKS. EVERYTHING'S SECONDHAND. EVERYTHING'S A COPY OF A COPY, OF A COPY.</h1>
                </motion.div>
              </div>
              <img
                src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/insomniaMask.webp'
                alt="tutorialLoopMask"
                className='absolute'/>
            </div>

            <div className='h-screen w-screen flex-shrink-0 bg-black flex items-center justify-center relative'>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/reserracted.webp' alt="rebuilt" />
              <div className='absolute h-full w-full flex items-center justify-center'>
                <motion.h1 style={{x:reserctedText}} className='text-9xl z-10 font-grandmaster absolute text-bloodRed '>REBUILT</motion.h1>
                <motion.h1 style={{x:reserctedText2}} className='text-9xl font-barlow font-bold'>REBUILT</motion.h1>
              </div>
              <motion.div  className='text-neutral-500 absolute h-full w-full text-4xl font-barlow font-bold flex flex-col overflow-visible items-center justify-between py-10'>
                <h1>EVERY EVENING THE BUILD BROKE. AND EVERY EVENING YOU SHIPPED IT ANYWAY.</h1>
              </motion.div>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/reserractedMask.webp' alt="rebuiltMask" className='absolute' />
            </div>

            <div className='h-screen w-screen flex-shrink-0 overflow-hidden bg-black flex items-center justify-center relative'>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/slide.webp' alt="commit" />
              <motion.div style={{x:slideText}} className='absolute h-full w-full flex text-8xl overflow-hidden font-grandmaster justify-center items-center'>
                {Array(20).fill(0).map((_, i) => (
                    <span key={i} className='text-8xl font-grandmaster px-4'>COMMIT</span>
                  ))}
              </motion.div>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/slideMask.webp' alt="commitMask" className='absolute' />
            </div>

            <div className='h-screen w-screen flex-shrink-0 overflow-hidden bg-black flex items-center justify-center relative'>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/owninig.webp' alt="codeYouWrite" />
              <div className='absolute h-full w-full flex justify-between items-center px-5'>
                <div className='flex flex-col items-start text-7xl font-barlow font-bold'>
                  <motion.h1 style={{x:owninigText}}>CODE</motion.h1>
                  <motion.h1 style={{x:owninigText1}}>YOU</motion.h1>
                  <motion.h1 style={{x:owninigText2}} className='font-fightclub text-bloodRed'>WRITE</motion.h1>
                </div>
                <div className='flex flex-col items-end text-7xl font-barlow font-bold'>
                  <motion.h1 style={{x:owninigText3}}>ENDS UP</motion.h1>
                  <motion.h1 style={{x:owninigText4}} className='font-fightclub text-bloodRed'>TEACHING</motion.h1>
                  <motion.h1 style={{x:owninigText5}}>YOU</motion.h1>
                </div>
              </div>
            </div>


            <div className='h-screen w-screen flex-shrink-0 bg-black flex items-center justify-center relative'>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/dual.webp' alt="shipIt" />
              <div className='absolute h-full w-full flex flex-col items-end py-20 text-5xl font-barlow font-bold'>
                <motion.div style={{x:sittingText}} className='flex gap-2'>
                  <h1>HOW MUCH CAN YOU KNOW ABOUT</h1>
                  <h1 className='text-bloodRed'>YOUR CODE</h1>
                </motion.div>
                <motion.h1 style={{x:sittingText1}} className='z-10'>IF YOU HAVE NEVER SHIPPED IT</motion.h1>
                <motion.div style={{x:sittingText2}} className='flex gap-2'>
                  <h1>TO</h1>
                  <h1 className='text-bloodRed'>PRODUCTION</h1>
                </motion.div>
              </div>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/dualMask.webp' alt="shipItMask" className='absolute' />
            </div>



            <div className='h-screen w-screen flex-shrink-0 overflow-hidden bg-black flex items-center justify-center relative'>
              <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/whoYouAre.webp' alt="whoYouAre" />
              <div className='absolute h-full w-full flex justify-between items-center px-5 '>
                <motion.div style={{x:fctext}} className='font-barlow font-bold text-5xl '>
                  <h1>WHO</h1>
                  <h1>YOU</h1>
                  <h1>ARE</h1>
                  <h1>AFTER</h1>
                  <h1>SIX</h1>
                  <h1>MONTHS</h1>
                  <h1>HERE</h1>
                </motion.div>
                <motion.div style={{x:fctext2}} className='font-barlow font-bold text-5xl flex flex-col items-end'>
                  <h1>IS</h1>
                  <h1>NOT</h1>
                  <h1>WHO</h1>
                  <h1>YOU</h1>
                  <h1>WERE</h1>
                  <h1>WHEN</h1>
                  <h1>YOU</h1>
                  <h1>WROTE</h1>
                  <h1>YOUR</h1>
                  <h1>FIRST</h1>
                  <h1>LINE</h1>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* The cinematic intro ends at the quote above. Everything below is the
          conventional landing page. */}
      <Landing />
      <Stats />
      <Courses />
      <HowItWorks />
      <InstructorsStrip />
      <Testimonials />
      <SiteFooter />
    </div>
  )
}

export default Home
