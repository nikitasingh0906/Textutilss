import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1';
import Textform from './components/Textform';
import { useState } from 'react';
let name = "Nikita";
function App() {
  const [mode, setMode] = useState('light');//dark mode is enable or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light'); // abcgcgsdcjsdojoper
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <div className="setProperty">
        <Navbar1 title="Textutils" mode={mode} toggleMode={toggleMode} />

        <div className="container">
          <Textform heading="Enter the text to analyze" mode={mode} />
        </div>
      </div>
    </>
  );
}

export default App;
