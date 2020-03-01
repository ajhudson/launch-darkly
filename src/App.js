import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HelloWorld from './components/HelloWorld';
import AddUserToDashboard from './components/AddUserToDashboard';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import MaintenancePageHandler from './components/maintenance/MaintenancePageHandler';
import Wibble from './components/Wibble';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <AddUserToDashboard />
          <MaintenancePageHandler>
            <Route exact path='/' component={Home} />
            <Route path='/helloworld' component={HelloWorld} />
            <Route path='/wibble' component={Wibble} />
          </MaintenancePageHandler>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
