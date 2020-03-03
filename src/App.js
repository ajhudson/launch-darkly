import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HelloWorld from './components/hello-world/HelloWorld';
import AddUserToDashboard from './components/add-user-to-dashboard/AddUserToDashboard';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import MaintenancePageHandler from './components/maintenance/MaintenancePageHandler';
import Wibble from './components/wibble/Wibble';
import Features from './components/features/features'

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
            <Route path='/features' component={Features} />
          </MaintenancePageHandler>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
