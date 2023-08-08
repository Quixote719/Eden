import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/styles/index.css';

const CardSandbox = lazy(() => import('./pages/cardSandbox'));
const ColorSandbox = lazy(() => import('./pages/colorSandbox'));

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Venus" element={<ColorSandbox />} />
          <Route path="/Earth" element={<CardSandbox />} />
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
