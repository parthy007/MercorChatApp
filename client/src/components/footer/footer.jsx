import "./footer.css"
import apple from "../../assets/apple-green.png"
import googlePlay from "../../assets/playstore-green.png"
import twitch from "../../assets/twitch-white.png"
import twitter from "../../assets/twitter-white.png"
import insta from "../../assets/instagram-white.png"
import twitchBlack from "../../assets/twitch-black.png"
import twitterBlack from "../../assets/twitter-black.png"
import instaBlack from "../../assets/instagram-black.png"

const footer = ({theme}) => {
    const themeColor = theme === "white" ? "black" : "white"
  return (
    <div className='footer'>
        <div className="footerWrapper">
            <div className="buttonWrapper">
                <button className={`btn ${themeColor}`}>
                    <img src={apple} alt="" className="icon"/>
                    <span className={`text ${themeColor}`}>APP STORE</span>
                </button>
                <button className={`btn ${themeColor}`}>
                    <img src={googlePlay} alt="" className="icon"/>
                    <span className={`text ${themeColor}`}>GOOGLE PLAY</span>
                </button>
            </div>
            <div className="rightWrapper">
                <p className="footerText">
                    Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </p>
                {themeColor === "white" && (<div className="iconWrapper">
                    <img src={twitch} alt="" className="icon"/>
                    <img src={twitter} alt="" className="icon"/>
                    <img src={insta} alt="" className="icon"/>
                </div>)}
                {themeColor === "black" && (<div className="iconWrapper">
                    <img src={twitchBlack} alt="" className="icon"/>
                    <img src={twitterBlack} alt="" className="icon"/>
                    <img src={instaBlack} alt="" className="icon"/>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default footer
