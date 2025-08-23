import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Systems from './pages/Systems';
import PracticeTests from './pages/PracticeTests';
import Sources from './pages/Sources';
import Contact from './pages/Contact';
import SystemDetail from './pages/SystemDetail';
import Quiz from './pages/Quiz';
import PracticeQuiz from './pages/PracticeQuiz';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/systems/:systemId" element={<SystemDetail />} />
            <Route path="/quiz/:systemId/:category" element={<Quiz />} />
            <Route path="/practice-tests" element={<PracticeTests />} />
            <Route path="/practice-quiz" element={<PracticeQuiz />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;