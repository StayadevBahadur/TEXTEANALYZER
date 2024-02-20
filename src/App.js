// import {React} from 'react';
import * as React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
 import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmodoe] = useState('light');
  const [alert, setalert] = useState(null)
  const toggleMode = () => {
    if (mode === 'light') {
      setmodoe('dark')
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode is enabled", "success")
    } else {
      setmodoe('light')
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success")
    }
  }
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000)

  }
  return (
    <>
      <Router>
        <Navbar title="TextAnalyzer" AboutText="AboutTextAnalyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        {/* <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} /> */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />}/>
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
