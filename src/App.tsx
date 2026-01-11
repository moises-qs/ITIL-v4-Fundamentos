import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Importance from './pages/Importance';
import Approaches from './pages/Approaches';
import Concepts from './pages/Concepts';
import Model from './pages/Model';
import Bibliography from './pages/Bibliography';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'importance':
        return <Importance />;
      case 'approaches':
        return <Approaches />;
      case 'concepts':
        return <Concepts />;
      case 'model':
        return <Model />;
      case 'bibliography':
        return <Bibliography />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Sitio web educativo sobre Fundamentos de ITIL v4
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desarrollado por Moises
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
