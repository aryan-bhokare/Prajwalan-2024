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
import CustomerSupport from './components/CustomerSupport/customerSupport';
import Termsofservice from './components/TermsOfService/termsofservice';
import Privacypolicy from './components/PrivacyPolicy/privacypolicy';
import Cancellationrefund from './components/CancellationRefund/cancellationrefund';

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
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Countdown targetDate={targetDate} />
                      <Memories />
                      <Event />
                      <Sponsor />
                      <BestSellers /> 
                    </>
                  }
                />
                <Route path="/event" element={<EventPage />} />
                <Route path="/support" element={<CustomerSupport/>}/>
                <Route path="/service" element ={<Termsofservice/>}/>
                <Route path='/policy' element={<Privacypolicy/>}/>
                <Route path='/refund' element={<Cancellationrefund/>}/> 
              </Routes>
              
              <Footer />
        </BrowserRouter>
      )}
    </>
  );

}
export default App
