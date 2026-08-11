import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

/**
 * React Router keeps the scroll position across navigations, which drops you
 * into the middle of the next page. Lenis owns the scroll here, so reset
 * through it rather than with window.scrollTo.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(()=>{
    if(lenis){
      lenis.scrollTo(0, { immediate:true })
    }else{
      window.scrollTo(0,0)
    }
  },[pathname, lenis])

  return null
}

export default ScrollToTop
