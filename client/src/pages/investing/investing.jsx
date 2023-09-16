import "./investing.css"
import floor from "../../assets/investing-floor-mobile.png"
import bitcoin from "../../assets/investing-bitcoin.png"
import graph1 from "../../assets/investing-graph-1.png"
import graph2 from "../../assets/investing-graph-2.png"
import graph3 from "../../assets/investing-graph-3 1.png"
import stocks from "../../assets/investing-stocks.png"
import Footer from "../../components/footer/footer"

const investing = () => {
  return (
    <div className="investing">
      <h1 className="mainTitle">Investing</h1>
      <div className="stocksWrapper">
        <h1 className="stocksTitle">Stocks</h1>
        <div className="stocksText">
            Whether you are an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.
        </div>
      </div>
      <div className="bitcoinWrapper">
        <h1 className="bitcoinTitle">Bitcoin</h1>
        <div className="bitcoinText">
            Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it is all about.
        </div>
      </div>
      <img src={floor} alt="" className="floor"/>
      <img src={stocks} alt="" className="stocks"/>
      <img src={bitcoin} alt="" className="bitcoin"/>
      <img src={graph1} alt="" className="graph1"/>
      <img src={graph2} alt="" className="graph2"/>
      <img src={graph3} alt="" className="graph3"/>
      <Footer theme={'white'}/>
    </div>
  )
}

export default investing
