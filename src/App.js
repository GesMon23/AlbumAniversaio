import React from 'react';
import './App.css';
import AlbumHome from './components/AlbumHome';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        
        <AlbumHome />
      </main>
      <Footer />
    </div>
  );
}

import Header from './components/Header';
import Footer from './components/Footer';

export default App;
