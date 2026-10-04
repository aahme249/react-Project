import { useState } from 'react'
import './App.css'

function App() {
  const [currRole, setCurrRole] = useState(false);
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [v3, setV3] = useState("");
  const [v4, setV4] = useState("");
  const [v5, setV5] = useState("");
  const [v6, setV6] = useState("");
  const [v7, setV7] = useState("");
  const [v8, setV8] = useState("");
  const [v9, setV9] = useState("");

  function handleChange(value, setValue) {
    if (value !== "") return; // square already filled, ignore the click

    if (currRole)
      setValue("X");
    else
      setValue("O");

    setCurrRole(!currRole);
  }

  return (
    <div className='container'>
      <div onClick={() => handleChange(v1, setV1)}>{v1}</div>
      <div onClick={() => handleChange(v2, setV2)}>{v2}</div>
      <div onClick={() => handleChange(v3, setV3)}>{v3}</div>
      <div onClick={() => handleChange(v4, setV4)}>{v4}</div>
      <div onClick={() => handleChange(v5, setV5)}>{v5}</div>
      <div onClick={() => handleChange(v6, setV6)}>{v6}</div>
      <div onClick={() => handleChange(v7, setV7)}>{v7}</div>
      <div onClick={() => handleChange(v8, setV8)}>{v8}</div>
      <div onClick={() => handleChange(v9, setV9)}>{v9}</div>
    </div>
  )
}

export default App