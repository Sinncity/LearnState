import "./App.css";
import logo from "./FloridaBeach.jpg";
import Game from "./Game";
import Toggle from "./Toggle";
import SimpleFormInputHook from "./SimpleFormInputHook.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SimpleFormInputHook />
        <Toggle />
        <Game />
        <p>Learn useState 🏄</p>
      </header>
    </div>
  );
}

export default App;
