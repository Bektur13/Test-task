import React from 'react';
import Header from './components/header';
import Hero from './components/pages/home';
import Destruction from './components/pages/destruction';
import './scss/style.scss';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Route exact path="/" component={Hero}/>
        <Route exact path="/destruction" component={Destruction}/>
      </div>
    </div>
  )
}

export default App;