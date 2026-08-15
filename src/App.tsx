import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Trips from './pages/Trips/Trips';
import TourDetails from './pages/TourDetails/TourDetails';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Booking from './pages/Booking/Booking';
import Pricing from './pages/Pricing/Pricing';
import { useLanguageState, LanguageContext } from './hooks/useLanguage';
import './styles/globals.css';
import './styles/glass.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id" element={<TourDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* 404 fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const languageState = useLanguageState();

  return (
    <LanguageContext.Provider value={languageState}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
