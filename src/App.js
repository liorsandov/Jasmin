import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [start, setStart] = useState(false);
  const [buttonPointerEnterA, setButtonPointerEnterA] = useState(false);
  const [buttonPointerEnterB, setButtonPointerEnterB] = useState(false);
  const [buttonPointerEnterC, setButtonPointerEnterC] = useState(false);
  const [buttonPointerEnterD, setButtonPointerEnterD] = useState(false);
  const [superB, setSuperB] = useState(false);

  function vibrate(ms) {
    navigator.vibrate(ms);
  }
  useEffect(() => {
    if (buttonPointerEnterA && buttonPointerEnterB && buttonPointerEnterC && buttonPointerEnterD) {
      setStart(false)
      setButtonPointerEnterA(false)
      setButtonPointerEnterB(false)
      setButtonPointerEnterC(false)
      setButtonPointerEnterD(false)
      return;
    }
    if (start) {
      if (buttonPointerEnterA && buttonPointerEnterB && buttonPointerEnterC && buttonPointerEnterD) {
        setSuperB(false)
        return;
      };
      const interval = setInterval(() => {
        setSuperB(!superB)
        vibrate(1000)
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [
    buttonPointerEnterA,
    buttonPointerEnterB,
    buttonPointerEnterC,
    buttonPointerEnterD,
    start, superB]);

  return (
    <div className="App">
      <header className={`App-header ${superB ? 'flash' : ''}`}>
        <div style={{ display: 'flex', margin: 'auto', flexDirection: 'column', gap: '5rem', width: '90%' }}>
          {start === false ? (
            <button style={{ fontSize: '1.2rem' }} onClick={() => setStart(true)}>START</button>) : <></>}
          {start === true ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  className='purple-button'
                  onPointerEnter={() => setButtonPointerEnterA(true)}
                  onPointerLeave={() => setButtonPointerEnterA(false)}>
                </button>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {buttonPointerEnterA ? (
                  <button
                    className='purple-button' style={{ marginLeft: '0' }}
                    onPointerEnter={() => setButtonPointerEnterB(true)}
                    onPointerLeave={() => setButtonPointerEnterB(false)}>
                  </button>) : <div></div>}
                {buttonPointerEnterB ? (<button
                  className='purple-button' style={{ marginRight: '0' }}
                  onPointerEnter={() => { setButtonPointerEnterC(true) }}
                  onPointerLeave={() => setButtonPointerEnterC(false)}>
                </button>) : (<div></div>)}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {buttonPointerEnterC ? (<button
                  className='purple-button'
                  onPointerEnter={() => setButtonPointerEnterD(true)}
                  onPointerLeave={() => setButtonPointerEnterD(false)}>
                </button>) : (<div></div>)}
              </div>
            </div>) : <></>}
        </div>
      </header>
    </div>
  );
}

export default App;
