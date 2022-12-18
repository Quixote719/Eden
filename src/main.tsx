import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Earth from '@/pages/earth';
import Venus from '@/pages/venus';
import '@/styles/index.css';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Venus" element={<Venus />} />
          <Route path="/Earth" element={<Earth />} />
          <Route path="/" element={<Earth />} />
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
