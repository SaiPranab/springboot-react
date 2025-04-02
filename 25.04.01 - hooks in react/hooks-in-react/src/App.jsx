import { useState } from 'react';
import './App.css'
import AppChild from './AppChild';

function App() {
  console.log('Inside App compoent, render triggered');
  
  const [count, setCount] = useState(0)

  function increaseValue() {
    // console.log('increase value called');
    setCount(prevState => prevState + 1)
  }

  return (
    <>
      <button onClick={() => { increaseValue()}}>Increase</button>  <br /> <br />
      <button>{count}</button> <br /> <br />

      <AppChild />
    </>
  )
}

export default App

//  hooks - functions
/**
 * useState()
 * useEffect
 * useRef
 * useNaviagte
 * useReducer
 */