import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { PlanetContextProvider } from './context/planetContext'
import { SolarContextProvider } from './context/solarContext';
import '@/styles/index.css';

const AsyncVenus = lazy(() => import('./pages/venus'));
const AsyncEarth = lazy(() => import('./pages/earth'));
const AsyncMars = lazy(() => import('./pages/mars'));
const AsyncMercury = lazy(() => import('./pages/mercury'));

class App extends React.PureComponent {
  render() {
    return (
      <SolarContextProvider>
        <Router>
          <Routes>
            <Route path="/Mercury" element={<AsyncMercury />} />
            <Route path="/Venus" element={<AsyncVenus />} />
            <Route path="/Earth" element={<AsyncEarth />} />
            <Route path="/Mars" element={<AsyncMars />} />
            <Route path="/" element={<AsyncEarth />} />
          </Routes>
        </Router>
      </SolarContextProvider>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
