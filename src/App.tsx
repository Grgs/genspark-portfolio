import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import MainBody from './Components/MainBody';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App bg-secondary">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
