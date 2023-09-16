import "./payments.css"
import phone from "../../assets/payments-phone-1.png"
import column1 from "../../assets/payments-column-1.png"
import column2 from "../../assets/payments-column-2.png"
import column3 from "../../assets/payments-column-3.png"
import pillarsm from "../../assets/payments-pillar-small.png"
import pillarm from "../../assets/payments-pillar-medium.png"
import pillarl from "../../assets/payments-pillar-large.png"


const payments = () => {
  return (
    <div className="payments">
      <img src={phone} alt="" className="phonePayments" />
      <div className="textWrapper">
        <span className="titlePayments">Payments</span>
        <p className="textPayments">
          Send and receive money with anyone, donate  to an important cause, or tip professionals. Just enter a $cashtag, phone number, or scan their  QR code to pay.
        </p>
      </div>
      <img src={column1} alt="" className="column1"/>
      <img src={column2} alt="" className="column2"/>
      <img src={column3} alt="" className="column3"/>
      <img src={pillarsm} alt="" className="pillarSmall"/>
      <img src={pillarm} alt="" className="pillarMedium"/>
      <img src={pillarm} alt="" className="pillarMedium centerPillar"/>
      <img src={pillarm} alt="" className="pillarMedium offCenterPillar"/>
      <img src={pillarm} alt="" className="pillarMedium rightPillar"/>
      <img src={pillarl} alt="" className="pillarLarge"/>
    </div>
  )
}

export default payments
