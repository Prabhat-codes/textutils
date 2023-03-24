import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
      <BrowserRouter>
        <Navbar idname="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Routes>
          <Route exact path="/home" element={<TextForm heading="Enter the text to analyze." mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
