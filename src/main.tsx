import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Earth from '@/pages/earth';
import Venus from '@/pages/venus';
// import './index.css'

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Venus" component={Venus} />
          <Route exact path="/Earth" component={Earth} />
          <Route exact path="/" component={Earth} />
        </Switch>
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
