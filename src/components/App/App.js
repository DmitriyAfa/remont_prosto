import "./App.css";
import { HeaderApp } from "../HeaderApp/HeaderApp";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Routes>{/* <Route path="/" element={}/> */}</Routes>
    </div>
  );
}

export default App;
