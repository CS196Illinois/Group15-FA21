// import logo from './logo.svg';
import "./App.css";
import EmissionsGraph from "./components/emissionsGraph";
import ButtonMailto from "./components/buttonMailTo";

function App() {
  return (
    <div className="App">
      <h1>Climatic</h1>
      <EmissionsGraph></EmissionsGraph>
    </div>
  );
}

export default App;
