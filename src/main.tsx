import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Earth from '@/pages/earth';
import Venus from '@/pages/venus';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { store } from '@/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/Venus" element={<Venus />} />
          <Route path="/Earth" element={<Earth />} />
          <Route path="/" element={<Earth />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
