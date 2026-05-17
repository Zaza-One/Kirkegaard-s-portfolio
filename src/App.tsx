import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioHistoricalDress from './pages/PortfolioHistoricalDress';
import PortfolioPlaysOperas from './pages/PortfolioPlaysOperas';
import PortfolioTailoring from './pages/PortfolioTailoring';
import PortfolioCoursework from './pages/PortfolioCoursework';
import PortfolioPersonal from './pages/PortfolioPersonal';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/"                            element={<PortfolioPage />} />
          <Route path="/historical-dress"            element={<PortfolioHistoricalDress />} />
          <Route path="/plays-operas"                element={<PortfolioPlaysOperas />} />
          <Route path="/tailoring"                   element={<PortfolioTailoring />} />
          <Route path="/coursework"                  element={<PortfolioCoursework />} />
          <Route path="/personal"                    element={<PortfolioPersonal />} />
          <Route path="*"                            element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
