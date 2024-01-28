import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Event from './components/Events/Events'
import Footer from './components/Footer/Footer'
import Memories from './components/Memories/Memories'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countdown from './components/Countdown/Countdown'
import EventPage from './components/Events/EventPage'

function App() {

  const targetDate = new Date(2024, 1, 28, 12, 0, 0);
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/' element={<><Hero />
            <Countdown targetDate={targetDate} />
            <Memories />
            <Event />
          </>} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
        <Footer />

      </Router>
    </>
  )
}
export default App
