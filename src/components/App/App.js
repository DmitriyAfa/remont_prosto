import { Routes, Route, Link } from "react-router-dom";
import { HeaderApp } from "../header/HeaderApp/HeaderApp";
import { FooterApp } from "../footer/FooterApp/FooterApp";
import { IndexPage } from "../../pages";
function App() {
  return (
    <>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
      <FooterApp />
    </>
  );
}

export default App;
