import { Link } from "react-router-dom"

import './style.css'
import { useEffect, useRef, useState } from "react"
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
function Navbar() {
  

  const screenRef = useRef(null)
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 600)
  const [hideShow, setHideShow] = useState(false)
  const handleHideShow = () => {
    setHideShow(!hideShow)
  }
  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 600)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const handleClickOutside = (e) => {
    if (screenRef.current && !screenRef.current.contains(e.target)) {
      setHideShow(false)
    }
  }
  useEffect(() => {
    if (hideShow) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [hideShow]);
  return (
    <>

      
        <div className='header'>
          {smallScreen ?
            <div className='menu-small' ref={screenRef}>
              <TiThMenu onClick={handleHideShow} />
              <div className={hideShow ? 'show-nav' : 'hide-nav'}>

                {hideShow && <IoClose className="close-io" onClick={handleHideShow}
                />}
                <Link to="/">Home</Link>
                {/* <Link to="/cep">Cep</Link> */}
                {/* <Link to="/movie">Filmes</Link> */}
                {/* <Link to="/videos">Vídeos</Link> */}
              </div>
            </div>
            :
            <div className="menu">
              <div className="menu-title">
                <h1>Consumindo APIs</h1>
              </div>
              <div className="menu-anchors">
                <Link to="/">Home</Link>
                {/* <Link to="/cep">Cep</Link>
                <Link to="/movie">Filmes</Link>
                <Link to="/videos">Vídeos</Link> */}
              </div>
            </div>
          }
        </div>
       
    </>
  )
}
export default Navbar
