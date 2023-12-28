import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/styles/index.css';


const AsyncRMSPortal = lazy(() => import('./pages/rmsPortal'));
const AsyncEarth = lazy(() => import('./pages/earth'));

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Earth" element={<AsyncEarth />} />
          <Route path="/RMS" element={<AsyncRMSPortal />} />
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
