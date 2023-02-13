import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/styles/index.css';

const AsyncEarth = lazy(() => import('./pages/earth'));
const AsyncVenus = lazy(() => import('./pages/venus'));
const AsyncMercury = lazy(() => import('./pages/mercury'));

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Venus" element={<AsyncVenus />} />
          <Route path="/Earth" element={<AsyncEarth />} />
          <Route path="/Mercury" element={<AsyncMercury />} />
          <Route path="/" element={<AsyncEarth />} />
        </Routes>
      </Router>
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
