import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [start, setStart] = useState(false);
  const [buttonA, setButtonA] = useState(false);
  const [buttonB, setButtonB] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [buttonPointerEnterA, setButtonPointerEnterA] = useState(false);
  const [buttonPointerEnterB, setButtonPointerEnterB] = useState(false);
  const [buttonPointerEnterC, setButtonPointerEnterC] = useState(false);
  const [buttonPointerEnterD, setButtonPointerEnterD] = useState(false);
  const [superB, setSuperB] = useState(false);

  function vibrate(ms) {
    navigator.vibrate(ms);
  }
  function vibrateP() {
    navigator.vibrate([300, 100, 300, 100, 300]);
  }


  const [seconds, setSeconds] = useState(0);


  // // const myInterval = setInterval(myTimer, 1000);

  // function myTimer() {
  //   console.log('test - myTimer')
  // }

  // function myStopFunction() {
  //   // clearInterval(myInterval);
  //   clearInterval(interval)
  // }

  // const interval = () => setInterval(() => {
  //   navigator.vibrate(1000);
  //   console.log('test - interval')
  //   if (superB) {

  //   }
  // }, 2000);

  // const clean = () => {
  //   // console.log('Interval clean')
  //   clearInterval(interval())
  // }

  function renderELM() {
    if (buttonA && buttonB) {
      return <>button A | button B</>
    }
    if (buttonA) {
      return <>button A</>
    }
    if (buttonB) {
      return <>button B</>
    }
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(seconds => seconds + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (start) {
      if (buttonA && buttonB) {
        setSuperB(false)
        return
      };
      if (buttonPointerEnterA && buttonPointerEnterB && buttonPointerEnterC && buttonPointerEnterD) {
        setSuperB(false)
        return
      };
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        setSuperB(!superB)
        vibrate(1000)
      }, 1000);
      return () => {
        clearInterval(interval);
        console.log(seconds);
        console.log(superB)
      };
    }
  }, [buttonA, buttonB, seconds, start, superB]);

  return (
    <div className="App">
      {/* <MainAppBar view={view} setView={setView} /> */}
      <header className={`App-header ${superB ? 'flash' : ''}`}>
        {/* {renderELM()} */}
        {/* {buttonHover ? <>onMouseOver</> : <></>} */}
        {/* {buttonPointerEnter ? <>onPointerEnter</> : <></>} */}
        {/* {buttonPointerEnterB ? <>onPointerEnterB</> : <></>} */}
        <div style={{ display: 'flex', margin: 'auto', flexDirection: 'column', gap: '5rem', width: '90%' }}>

          {!start ? (<button style={{fontSize: '1.2rem'}} onClick={() => setStart(true)}>START</button>) : <></>}
          {/* <div>
            <button className='purple-button' onClick={() => setButtonA(!buttonA)}>button A</button>
            <button className='purple-button' onClick={() => setButtonB(!buttonB)}>button B</button>
          </div> */}

          {/* <button className='purple-button' onClick={() => interval()}>startInterval</button> */}
          {/* <button className='purple-button' onClick={() => vibrate(1000)}>1</button> */}
          {/* <button className='purple-button' onClick={() => vibrateP()}>2</button> */}
          {start ? (
            <div>
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
          {/* <button className='purple-button' onMouseOver={() => setButtonHover(!buttonHover)}></button> */}
          {/* <button className='purple-button' onPointerEnter={() => setButtonB(!buttonB)}>onPointerEnter - button B</button> */}
          {/* <button className='purple-button' onClick={() => clean()}>Clear Interval</button> */}
          {/* <button className='purple-button' onClick={() => myStopFunction()}>myStopFunction</button> */}
          {/* {seconds} seconds have elapsed since mounting. */}
        </div>
      </header>
    </div>
  );
}

export default App;
