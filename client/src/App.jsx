import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Event from './components/Events/Events'
import Footer from './components/Footer/Footer'
import Memories from './components/Memories/Memories'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Steps /> */}
      {/* <BestSellers /> */}
      {/* <HotProducts /> */}
      <Memories/>
      {/* <CTA /> */}
      {/* <Collections /> */}
      <Event />
      <Footer />
    </>
  )
}
export default App
