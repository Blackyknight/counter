function Btn({decrease, reset, increase}){
  return (
    <div>
      <button className="decrease" onClick={decrease}>Decrease</button>
      <button className="reset" onClick={reset}>Reset</button>
      <button className="increase" onClick={increase}>Increase</button>
    </div>
  );
}

export default Btn;