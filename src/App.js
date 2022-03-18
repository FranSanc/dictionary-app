import './App.css';
import Dictionary from "./Dictionary.js";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
      </div>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>
          {" "}
          Coded by Francesca Sancarlo,
          <strong>
            <a
              href="https://github.com/FranSanc/dictionary-app"
              target="blank"
            >
              {" "}
              open-sourced on GitHub{" "}
            </a>{" "}
          </strong>
          and hosted on
          <strong>
            <a
              href="https://unruffled-wescoff-3215ed.netlify.app/"
              target="blank"
            >
              {" "}
              Netlify
            </a>
          </strong>
        </small>
      </footer>
    </div>
  );
}

export default App;
