import "./policy.css"
import apple from "../../assets/apple-green.png"
import googlePlay from "../../assets/playstore-green.png"
import twitch from "../../assets/twitch-white.png"
import twitter from "../../assets/twitter-white.png"
import insta from "../../assets/instagram-white.png"

const policy = () => {
  return (
    <div className="policy">
        <div className="policyWrapper">
            <h1 className="policyTitle">Policy</h1>
            <p className="policyText">
                Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </p>
            <div className="policyButton">
                <button className="policyBtn">
                    <img src={apple} alt="" className="greenIcon"/>
                    <span className="btnText">APP STORE</span>
                </button>
                <button className="policyBtn">
                    <img src={googlePlay} alt="" className="greenIcon"/>
                    <span className="btnText">GOOGLE PLAY</span>
                </button>
            </div>
            <div className="policyIcons">
                <img src={twitch} alt="" className="socialIcon"/>
                <img src={twitter} alt="" className="socialIcon"/>
                <img src={insta} alt="" className="socialIcon"/>
            </div>
        </div>
    </div>
  )
}

export default policy
