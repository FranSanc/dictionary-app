import './App.css';
import Dictionary from "./Dictionary.js";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
      </div>
      <main>
        <Dictionary />
        <small>
          {" "}
          Coded by Francesca Sancarlo,{" "}
          <a href="https://github.com/FranSanc/dictionary-app">
            {" "}
            GitHub link{" "}
          </a>{" "}
        </small>
      </main>
    </div>
  );
}

export default App;
