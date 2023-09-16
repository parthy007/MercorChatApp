import "./banking.css"
import phone from "../../assets/banking-phone.png"
import hole from "../../assets/banking-hole.png"
import column from "../../assets/banking-column.png"
import stairs2 from "../../assets/banking-stairs-2.png"
import ramp1 from "../../assets/banking-ramp-1.png"
import ramp2 from "../../assets/banking-ramp-2.png"
import track1 from "../../assets/banking-track-1.png"
import track2 from "../../assets/banking-track-2.png"
import cubes from "../../assets/banking-cubes.png"
import tube from "../../assets/banking-tube.png"
import stairs1 from "../../assets/banking-stairs-1.png"
import monster from "../../assets/banking-monster.png"
import holeb from "../../assets/banking-hole-b.png"

// import  from "../../assets/banking-hole.png"

const banking = () => {
  return (
    <div className="banking">
      
        <img src={phone} alt="" className="phoneBanking" />

        <div className="textWrapperBanking">
            <h1 className="titleBanking">Banking</h1>
            <p className="textBanking">
                Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing and account number.
            </p>
        </div>
        <img src={hole} alt="" className="bankingHole"/>
        <img src={column} alt="" className="bankingColumn"/>
        <img src={stairs2} alt="" className="bankingStairs2"/>
        <img src={tube} alt="" className="bankingTube"/>
        <img src={ramp2} alt="" className="bankingRamp2"/>
        <img src={ramp1} alt="" className="bankingRamp1"/>
        <img src={track1} alt="" className="bankingTrack1"/>
        <img src={track2} alt="" className="bankingTrack2"/>
        <img src={cubes} alt="" className="bankingCubes"/>
        <img src={monster} alt="" className="bankingMonster"/>
        <img src={stairs1} alt="" className="bankingStaris1"/>
        <img src={holeb} alt="" className="holeb"/>
    </div>
  )
}

export default banking
