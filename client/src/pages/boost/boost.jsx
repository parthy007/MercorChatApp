import "./boost.css"
import stair1 from "../../assets/boost-stairs-1.png"
import stair2 from "../../assets/boost-stairs-2.png"
import burger from "../../assets/boost-burger.png"
import card from "../../assets/boost-card.png"
import coffee from "../../assets/boost-coffee.png"
import hand from "../../assets/boost-hand.png"
import phone from "../../assets/boost-phone.png"
import shoe from "../../assets/boost-shoe.png"

const boost = () => {
  return (
    <div className='boost'>
        <img src={phone} alt="" className="boostPhone" />
        <div className="textWrapperBoost">
            <div className="titleWrapperBoost">
                <h1 className="titleBoost">
                    Cash Card
                </h1>
                <h1 className="titleBoost"> 
                    & Boost
                </h1>
            </div>
            <p className="textBoost">
                The Cash Card is a free, customizable debit card that lets you pay online and in stores. It is the only way to get Boosts—instant discounts that work at places where you want to spend.
            </p>
        </div>
        <img src={stair2} alt="" className="boostStair2" />
        <img src={stair1} alt="" className="boostStair1" />
        <img src={burger} alt="" className="boostBurger" />
        <img src={hand} alt="" className="boostHand" />
        <img src={shoe} alt="" className="boostShoe" />
        <img src={card} alt="" className="boostCard" />
        <img src={coffee} alt="" className="boostCoffee" />
    </div>
  )
}

export default boost
