import { useState, useEffect } from 'react';
import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Event from './components/Events/Events'
import Footer from './components/Footer/Footer'
import Memories from './components/Memories/Memories'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countdown from './components/Countdown/Countdown'
import Spinner from './components/Spinner';
import EventPage from './components/Events/EventPage';
import BestSellers from './components/BestSellers/BestSellers';
import Sponsor from './components/Sponsors/Sponsor';
import Background from '../src/assets/bgm.jpg';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const targetDate = new Date(2024, 1, 28, 12, 0, 0);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <BrowserRouter>
          <div className="relative h-screen overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full sm:w-full sm:h-full "
              style={{ backgroundImage: `url(${Background})` }}
            >
             
            </div>
            <div className="relative z-10 h-full overflow-y-auto">
          
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Countdown targetDate={targetDate} />
                      <Sponsor />
                      <Memories />
                      <Event />
                    </>
                  }
                />
                <Route path="/event" element={<EventPage />} />
              </Routes>
              <BestSellers />
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );

}
export default App
