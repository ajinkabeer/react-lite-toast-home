import React, { useState } from 'react';
import { Toast } from 'react-lite-toast'
import github from './assets/github.svg'
import npm from './assets/npm.svg'

import 'react-lite-toast/dist/index.css'

function App() {
  const [toast, setToast] = useState(false)
  const [toastType, setToastType] = useState('')
  const [position, setPosition] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const toastHandler = (type, position, title, message) => {
    setToastType(type)
    setPosition(position)
    setTitle(title)
    setMessage(message)
    setToast(!toast)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>react-lite-toast <span aria-label="zap emoji" role="img">⚡</span></h1>
        <a href="https://www.github.com/ajinkabeer/react-lite-toast" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={github} alt="github" /></a>
        <a href="https://www.npmjs.com/package/react-lite-toast" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={npm} alt="npm" /></a>
        <p>A minimal toast notification for react with bundled size of 3 kB.</p>
        <button class="btn success" onClick={() => toastHandler('success', 'bottomup', 'Success', 'Dunder Mifflin')}>success</button>
        <button class="btn error" onClick={() => toastHandler('error', 'topdown', 'Failed', 'Battlestart Galatica')}>error</button>
        <button class="btn warning" onClick={() => toastHandler('warning', 'bottomright', 'Warning', 'Wooooof')} >warning</button>
        <button class="btn info" onClick={() => toastHandler('info', 'bottomleft', 'Info', 'Please note')}>info</button>
        {toast && <Toast type={toastType} title={title} description={message} position={position} />}
      </header>
    </div>
  );
}

export default App;
