import { useState } from 'react';
import './App.css';

function App() {

  let [checked, setChecked] = useState(1);

  const hanldeChangeColor = () => {
    if (checked > 2) {
      setChecked(1)
    } else {
      setChecked(checked + 1)
    }
  }
  return (
    <div className='wrap-container'>
      <div className='container'>
        <button onClick={hanldeChangeColor}>Next</button>
        <div className='light'>
          <div
            className='light-red'
            style={{backgroundColor: checked === 1 ? "red" : "white"}}
          >
          </div>
          <div 
            className='light-yellow'
            style={{backgroundColor: checked === 2 ? "yellow" : "white"}}
          >
          </div>
          <div 
            className='light-green'
            style={{backgroundColor: checked === 3 ? "green" : "white"}}
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

