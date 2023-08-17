import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/styles/index.css';

const CardSandbox = lazy(() => import('./pages/cardSandbox'));
const ColorSandbox = lazy(() => import('./pages/colorSandbox'));
const LIVE_DIE = lazy(() => import('./pages/liveordie'));
const HEART = lazy(() => import('./pages/heart'));
const ColorPaper = lazy(() => import('./pages/colorBox'));

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Jupiter" element={<ColorPaper />} />
          <Route path="/Mercury" element={<LIVE_DIE />} />
          <Route path="/Venus" element={<ColorSandbox />} />
          <Route path="/Earth" element={<CardSandbox />} />
          <Route path="/Mars" element={<HEART />} />
          <Route path="/" element={<CardSandbox />} />
        </Routes>
      </Router>
    );
  }
}
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
