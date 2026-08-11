import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Navcomp from "./components/Navcomp"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Instructors from "./pages/Instructors"
import Rules from "./pages/Rules"
import About from "./pages/About"
import Frontend from "./pages/instructors/Frontend"
import Backend from "./pages/instructors/Backend"
import DevOps from "./pages/instructors/DevOps"
import CourseDetail from "./pages/CourseDetail"
import ScrollToTop from "./components/ScrollToTop"
import { IconDeviceDesktop } from "@tabler/icons-react"
import useStore from "./store"



const App = () => {
  const [isopen, setisopen] = useState(false)
  const [Showpopup, setShowpopup] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const setmuted = useStore((state)=>state.setmuted)

  useEffect(()=>{
    if (!sessionStorage.getItem('loadingScreen')) {
      setisLoading(true)
    }
  },[])

  useEffect(()=>{
    const checkScreensize = () =>{
      setShowpopup(window.innerWidth<640)
    }

    checkScreensize();

    window.addEventListener('resize',checkScreensize)

    return () => window.removeEventListener('resize',checkScreensize)
  },[])

  if(Showpopup){
    return(
      <div className=" h-screen w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center h-50 w-full px-5 gap-2 ">
          <IconDeviceDesktop size={50} stroke={1}/>
          <h1 className="text-bloodRed font-barlow font-bold">BEST EXPERIENCE ON A LARGER SCREEN </h1>
          <p className="w-80 text-center font-barlow">BugBicep is built for bigger screens. Please open it on a PC or tablet for the best experience. Thank you.</p>
        </div>
      </div>
    )
  }



  return isLoading? (
  <div className="h-screen w-full relative">
    <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/app,%20story/loader.webp' alt="loaderScreen" className="absolute bottom-0" />
    <div className=" h-full w-full z-10 absolute flex justify-center font-barlow font-bold">
      <div className="w-full flex flex-col items-center m-8 ">
        <div className="lg:text-2xl text-neutral-200">For the best experience, please switch to full-screen mode by pressing F11 on Windows or the green maximize button on Mac.</div>
        <div className="flex flex-col gap-5 text-xl text-neutral-200">
            BugBicep also uses background audio to set the tone. We recommend continuing unmuted.
           <div className="flex justify-end gap-5 px-10 text-sm">
            <button onClick={()=>{sessionStorage.setItem('loadingScreen','true'); setisLoading(false); setmuted(false)}} className="px-4 py-1 rounded-2xl transition-all duration-250  cursor-pointer hover:text-black hover:bg-neutral-500"> Muted</button>
            <button onClick={()=>{ sessionStorage.setItem('loadingScreen','true'); setisLoading(false); setmuted(true)}} className="px-4 py-1 rounded-2xl transition-all duration-250 text-bloodRed cursor-pointer hover:bg-bloodRed hover:text-black"> Unmuted</button>
           </div>
          </div>
      </div>
    </div>
  </div>
  ) : (
      <div className="h-auto relative">
        <ScrollToTop />
        <Navbar
          isopen={isopen}
          setisopen={setisopen}
        />
        <Navcomp isopen={isopen} setisopen={setisopen} />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses/:slug" element={<CourseDetail/>}/>
          <Route path="/instructors" element={<Instructors/>}/>
          <Route path="/instructors/frontend" element={<Frontend/>}/>
          <Route path="/instructors/backend" element={<Backend/>}/>
          <Route path="/instructors/devops" element={<DevOps/>}/>
          <Route path="/rules" element={<Rules/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      </div>
    )
  }

export default App
