import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import ProductFiles from './components/ProductFiles/ProductFiles'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Form/>
      <Header/>
      <ProductFiles/>
    </div>
  );
}

export default App;
