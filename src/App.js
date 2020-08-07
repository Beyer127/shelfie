import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import ProductFiles from './components/ProductFiles/ProductFiles'
import Dashboard from './components/Dashboard/Dashboard'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Form/>
      <Header/>
      {routes}
    </div>
  );
}

export default App;
