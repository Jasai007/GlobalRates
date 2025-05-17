import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConvertPage from './pages/ConvertPage';
import FavoritesPage from './pages/FavoritesPage';

// Animation wrapper for page transitions
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div 
      className={`page-transition ${transitionStage}`} 
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-body">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            } />
            <Route path="/convert" element={
              <PageTransition>
                <ConvertPage />
              </PageTransition>
            } />
            <Route path="/favorites" element={
              <PageTransition>
                <FavoritesPage />
              </PageTransition>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;