import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Tes autres routes ici */}
        
        {/* Route NotFound en dernier */}
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
