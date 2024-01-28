import  { useState ,useEffect } from 'react';
import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Event from './components/Events/Events'
import Footer from './components/Footer/Footer'
import Memories from './components/Memories/Memories'
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Countdown from './components/Countdown/Countdown'
import Spinner from './components/Spinner';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setLoading(false);
    },3000);

    return () => clearTimeout(timeoutId);
  }, []);
  
  const targetDate=new Date(2024, 1, 28, 12, 0, 0);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
           <></>
          </Routes>
          <Hero />
          <Countdown targetDate={targetDate} />
          <Memories />
          <Event />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
 
}
export default App
