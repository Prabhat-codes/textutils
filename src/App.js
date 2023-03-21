import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Navbar idname="TextUtils" about="About Us"/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze." />
      {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
