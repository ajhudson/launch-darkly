import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import AddUserToDashboard from './components/AddUserToDashboard';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <AddUserToDashboard />
        <HelloWorld />
      </Layout>
    </div>
  );
}

export default App;
