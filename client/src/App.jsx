import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Event from './components/Events/Events'
import Footer from './components/Footer/Footer'
import Memories from './components/Memories/Memories'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Countdown from './components/Countdown/Countdown'

function App() {

  const targetDate=new Date(2024, 2, 12, 12, 0, 0);
  return (
    <>
    <Router>

      <Navbar />
      <Routes>
        {/* <Route path="/" element={}/>        
        <Route path="/about" element={}/> */}
       </Routes>
      
      <Hero />
      {/* <Steps /> */}
      {/* <BestSellers /> */}
      {/* <HotProducts /> */}
      <Countdown targetDate={targetDate}/>
      <Memories/>
      {/* <CTA /> */}
      {/* <Collections /> */}
      <Event />
      <Footer />
    </Router>
    </>
  )
}
export default App
