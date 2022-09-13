import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { HeaderApp } from "../HeaderApp/HeaderApp";
import { FooterApp } from "../FooterApp/FooterApp";
function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Routes>{/* <Route path="/" element={}/> */}</Routes>
      <FooterApp />
    </div>
  );
}

export default App;
