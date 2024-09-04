import "./App.css";

function App() {
  function ColorChange(color: string) {
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="btn-div">
        <button onClick={() => ColorChange('black')}>Black</button>
        <button onClick={() => ColorChange('green')}>GREEN</button>
        <button onClick={() => ColorChange('blue')}>BLUE</button>
        <button onClick={() => ColorChange('purple')}>PURPLE</button>
      </div>
    </>
  );
}

export default App;
