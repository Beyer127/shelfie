import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import routes from './routes'
import Form from './components/Form/Form'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Form /> */}
      {routes}
    </div>
  );
}

export default App;
