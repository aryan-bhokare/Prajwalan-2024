import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Event from './components/Events/Events'
import Footer from './components/Footer/Footer'
import Memories from './components/Memories/Memories'
import Countdown from './components/Countdown/Countdown'


function App() {


  const targetDate=new Date(2024, 1, 28, 12, 0, 0);
  return (
    <>
      <Navbar />
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
    </>
  )
}
export default App
