import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Event from './components/Events/Events'
import Footer from './components/Footer/Footer'
import Memories from './components/Memories/Memories'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
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
