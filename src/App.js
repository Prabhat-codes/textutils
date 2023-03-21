import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  const [mode, setMode] = useState('dark')
  const [btnText, setbtnText] = useState('Enable dark Mode')
  
  const toggleMode = () => {
    console.log(mode)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#262525'
      setbtnText('Enable light Mode')
      document.title = "TextUtils - Dark Mode"
      // showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setbtnText('Enable dark Mode')
      document.title = "TextUtils - Light Mode";
      // showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <div className="App">
      <Navbar idname="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <div className="container my-3" toggleMode={toggleMode}>
        <TextForm heading="Enter the text to analyze." mode={mode} />
        <About toggleMode={toggleMode} mode={mode} />
        
      </div>
    </div>
  );
}

export default App;
