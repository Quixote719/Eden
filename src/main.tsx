import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Earth from '@/pages/earth';
import Venus from '@/pages/venus';
import { ethers } from 'ethers';
import '@/styles/index.css';

const { ethereum } = window;

class App extends React.PureComponent {
  constructor(props: any) {
    super(props);
    this.state = {
      currentAccount: ''
    };
  }
  connectMetaMask = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.');
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      this.setState({ currentAccount: accounts[0] });
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Venus" element={<Venus />} />
          <Route path="/Earth" element={<Earth connectMetaMask={this.connectMetaMask} />} />
          <Route path="/" element={<Earth connectMetaMask={this.connectMetaMask} />} />
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
