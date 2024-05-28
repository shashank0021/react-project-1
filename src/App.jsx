import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  

  const generatePassword = () => {
      let charset = "";
      let newPassword = "";

      if (useSymbols) charset += "!@#$%^&*()";
      if (useNumbers) charset += "0123456789";
      if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
      if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (let i = 0; i < passwordLength; i++) {
          newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
      }

      setPassword(newPassword);
  };
  

  return (
    <>
    <h1>Password generator</h1>
    <div>
    <input type='input' value={password}/>
    <button > COPY</button>
    </div>
    <div>
    <label>Select Password length** (8-32 characters**) </label>
    <input type='number' min={8} max={32} value={passwordLength}
                    onChange={(e) => setPasswordLength(e.target.value)}></input>
    </div>
    <div>
    <label>
      <input type="checkbox"  checked={useSymbols}
                        onChange={() => setUseSymbols(!useSymbols)}/>Include symbols
      </label>
      <label>
      <input type="checkbox" checked={useLowerCase}
                        onChange={() => setUseLowerCase(!useLowerCase)}/>Include lowercase
      </label>
      <label>
      <input type="checkbox" checked={useUpperCase}
                        onChange={() => setUseUpperCase(!useUpperCase)}/>Include uppercase
      </label>
      <label>
      <input type="checkbox" checked={useNumbers}
                        onChange={() => setUseNumbers(!useNumbers)}/>Include numbers
      </label>
    </div>
    <button onClick={generatePassword}>Generate Password</button>

    </>
  )

}

export default App