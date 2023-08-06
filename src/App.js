// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  // state for dark mode enable
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null);

  const showAlert = (message,type) =>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setmode('dark');
      document.body.style.backgroundColor = "black";
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} aboutText="About us" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          {/* exact path */}
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter Text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
