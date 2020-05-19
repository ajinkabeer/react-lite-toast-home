import React, { useState } from 'react';
import { Toast } from 'react-lite-toast'
import Syntax from './components/SyntaxHighlighter'
import github from './assets/github.svg'
import npm from './assets/npm.svg'

import 'react-lite-toast/dist/index.css'

function App() {
  const [toast, setToast] = useState(false)
  const [toastType, setToastType] = useState('')
  const [position, setPosition] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [code, setCode] = useState('')
  const [duration, setDuration] = useState(1500)

  const toastHandler = (type, position, title, message, duration) => {
    setToastType(type)
    setPosition(position)
    setTitle(title)
    setMessage(message)
    setDuration(duration)
    setCode(`<Toast type="${type}" title="${title}" description="${message}" position="${position}" duration={${duration}} />`)
    setTimeout(() => {
      setToast(prevState => !prevState)
    }, 2000)
    setToast(prevState => !prevState)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>react-lite-toast <span aria-label="zap emoji" role="img">⚡</span></h1>
        <a href="https://www.github.com/ajinkabeer/react-lite-toast" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={github} alt="github" /></a>
        <a href="https://www.npmjs.com/package/react-lite-toast" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={npm} alt="npm" /></a>
        <p>A minimal toast notification for react with bundled size of 3 kB.</p>
        <button className="btn success" onClick={() => toastHandler('success', 'bottomup', 'Success', 'Dunder Mifflin', 1500)}>success</button>
        <button className="btn error" onClick={() => toastHandler('error', 'topdown', 'Failed', 'Battlestart Galatica', 1500)}>error</button>
        <button className="btn warning" onClick={() => toastHandler('warning', 'bottomright', 'Warning', 'Wooooof', 1500)} >warning</button>
        <button className="btn info" onClick={() => toastHandler('info', 'bottomleft', 'Info', 'Please note', 1500)}>info</button>

        {toast && <Toast type={toastType} title={title} description={message} position={position} duration={duration} />}
        <Syntax code={code} />
      </header>
    </div>
  );
}

export default App;
