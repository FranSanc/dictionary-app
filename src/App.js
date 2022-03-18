import './App.css';
import Dictionary from "./Dictionary.js";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
      </div>
      <main>
        <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className="App-footer">
        <small>
          {" "}
          Coded by Francesca Sancarlo,{" "}
          <a href="https://github.com/FranSanc/dictionary-app">
            {" "}
            GitHub link{" "}
          </a>{" "}
        </small>
      </footer>
    </div>
  );
}

export default App;
