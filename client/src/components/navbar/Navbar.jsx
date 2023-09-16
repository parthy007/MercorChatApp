import "./navbar.css"
import logo from "../../assets/logo.svg"
import Eye from "../../assets/eye.png"
import { HiMenu } from "react-icons/hi"
import { ImCross } from "react-icons/im"
import { useState } from "react"

const Navbar = () => {

  const [slide, setSlide] = useState(false)

  return (
    <div className='navbar'>
        <div className='wrapper'>
            <img src={logo} alt="" className='logo'/>
            <div className="titleWrapper">
                <span className='title'>SIGN IN</span>
                <span className='title'>LEGAL</span>
                <span className='title'>LICENSES</span>
                <span className='title'>SECURITY</span>
                <span className='title'>CAREERS</span>
                <span className='title'>PRESS</span>
                <span className='title'>SUPPORT</span>
                <span className='title'>STATUS</span>
                <span className='title'>CODEBLOG</span>
            </div>
            <div className="eyeWrapper">
              <HiMenu className="menu" onClick={(e)=>setSlide(true)}/>
              <img src={Eye} alt="" className='eye'/>
            </div>
        </div>
        {slide && (
          <div className="verticalNavbar">
            <ImCross className="cut" onClick={(e)=>setSlide(false)}/>
            <span className='verticalTitle'>SIGN IN</span>
            <span className='verticalTitle'>LEGAL</span>
            <span className='verticalTitle'>LICENSES</span>
            <span className='verticalTitle'>SECURITY</span>
            <span className='verticalTitle'>CAREERS</span>
            <span className='verticalTitle'>PRESS</span>
            <span className='verticalTitle'>SUPPORT</span>
            <span className='verticalTitle'>STATUS</span>
            <span className='verticalTitle'>CODEBLOG</span>
          </div>
        )}
    </div>
  )
}

export default Navbar
