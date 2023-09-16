import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/footer"
import phone from "../../assets/intro-phone-1.png"
import arrow from "../../assets/down.png"
import cube from "../../assets/intro-cube-1.png"
import stairs from "../../assets/intro-stairs-1.png"
import cubes from "../../assets/intro-cubes-1.png"
import pillar from "../../assets/intro-pillar-1.png"

const home = () => {
  return (
    <div className="home">
        <Navbar/>
        <img src={cube} alt="" className="cube"/>
        <img src={stairs} alt="" className="stairs"/>
        <img src={cubes} alt="" className="cubes"/>
        <img src={pillar} alt="" className="pillar"/>
        <div className="homeWrapper">
            <div className="homeTextWrapper">
              <span className="homeText">CASH</span>
              <span className="homeText second">APP</span>
            </div>
            <img src={phone} alt="" className="phone"/>     
        </div>
        <img src={arrow} alt="" className="arrow"/>
        <Footer className="footer" theme={"black"}/>
    </div>
  )
}

export default home
