import logo from "./logo.svg";
import "./App.css";
import { Gretting } from "./components/pure/Gretting";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gretting />
      </header>
    </div>
  );
}
