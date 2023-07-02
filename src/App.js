import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Article />
      </main>
      <Footer />
    </div>
  );
}

export default App;
