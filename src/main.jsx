import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContextProvider from '@/store/appContext.jsx';
import '@/styles/index.less';

const AsyncRMSPortal = lazy(() => import('./pages/rmsPortal'));
const AsyncEarth = lazy(() => import('./pages/earth'));
const AsyncCompLab = lazy(() => import('./pages/compLab'));
const AsyncMenu = lazy(() => import('./pages/menu'));
const AsyncFlow = lazy(() => import('./pages/flow'));

class App extends React.PureComponent {
  render() {
    return (
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/Earth" element={<AsyncEarth />} />
            <Route path="/RMS" element={<AsyncRMSPortal />} />
            <Route path="/compLab" element={<AsyncCompLab />} />
            <Route path="/menu" element={<AsyncMenu />} />
            <Route path="/flow" element={<AsyncFlow />} />
            <Route path="/" element={<AsyncEarth />} />
          </Routes>
        </Router>
      </AppContextProvider>
    );
  }
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
