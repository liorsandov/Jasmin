import React, { useState } from 'react';
import './App.css';

function App() {
  const [view, setView] = useState(false);
  // const [userData, setUserData] = useState({ userName: '', Pass: '' });

  // const mainSwitch = () => {
  //   switch (view) {
  //     case 'ATO':
  //       return <LoginPage userData={userData} setUserData={setUserData} setView={setView} />
  //     case 'AccountOverview':
  //       return <AccountOverview userData={userData} setUserData={setUserData} setView={setView} />
  //     case 'AO':
  //       return <AO />
  //     default:
  //       return <PathSelection setView={setView} />
  //   }
  // }

  function vibrate(ms) {
    navigator.vibrate(ms);
  }

  function vibrateP() {
    navigator.vibrate([300, 100, 300, 100, 300]);
  }

  return (
    <div className="App">
      {/* <MainAppBar view={view} setView={setView} /> */}
      <header className="App-header">
        {
          view ? <>AMAZING ! </> : <></>
        }
        <div style={{ display: 'flex', margin: 'auto', flexDirection: 'column', width: '50%', gap: '1rem' }}>
          <button className='purple-button' onClick={() => vibrate(1000)}>1</button>
          <button className='purple-button' onClick={() => vibrateP()}>2</button>
          <button className='purple-button' onPointerDown={() => vibrateP()}>3</button>
          <button className='purple-button' onPointerEnter={() => vibrateP()}>4</button>
          <button className='purple-button' onClick={() => setView(!view)}>5</button>
          <button className='purple-button'>6</button>
        </div>
      </header>
    </div>
  );
}

export default App;
