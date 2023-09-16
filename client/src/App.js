import "./App.css"
import Home from './pages/home/home';
import Payments from './pages/payments/payments';
import Banking from './pages/banking/banking';
import Boost from './pages/boost/boost';
import Investing from './pages/investing/investing';
import Policy from './pages/policy/policy';
import { useEffect, useState } from "react";


function App() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className="app">
      <Home/>
      <Payments/>
      <Banking/>
      <Boost/>
      <Investing/>
      {isSmallScreen && <Policy/>}
    </div>
  );
}

export default App;
