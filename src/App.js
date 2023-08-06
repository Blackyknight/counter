import {useEffect, useState} from 'react';
import Btn from './component/Btn';
import './styles/App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [colors, setColors] = useState(false);

  useEffect(() => {
    counter < 0 ? setColors(() => {
      return true
    }) : setColors(() => {return false});
  }, [counter])

  function onReset(){
    setCounter(0);
  }

  function onIncrease(){
    setCounter(counter => counter + 1);
  }

  function onDecrease(){
    setCounter(counter => counter - 1);
  }

  return (
    <div className='counter'>
      <h1>Counter</h1>
      <p style={{color: colors ? 'red' : 'green'}} >{counter}</p>
      <Btn reset={onReset} increase={onIncrease} decrease={onDecrease} />
    </div>
  );
}

export default App;
