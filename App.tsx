import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ShopTracks } from './pages/ShopTracks';
import { ShopCourses } from './pages/ShopCourses';
import { CourseDetails } from './pages/CourseDetails';
import { TrackDetails } from './pages/TrackDetails';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Login } from './pages/Login'; // Import new page
import { StudentDashboard } from './pages/StudentDashboard'; // Import new page
import { ShopProvider } from './context/ShopContext';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <ShopProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracks" element={<ShopTracks />} />
            <Route path="/tracks/:id" element={<TrackDetails />} /> 
            <Route path="/courses" element={<ShopCourses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ShopProvider>
  );
};

export default App;