import { Routes, Route, Link } from "react-router-dom";
import { HeaderApp } from "../header/HeaderApp/HeaderApp";
import { FooterApp } from "../footer/FooterApp/FooterApp";
import { IndexPage } from "../../pages";
import { ProjectsPage } from "../../pages/projects";
function App() {
  return (
    <>
      <HeaderApp />
      <Routes>
        {/* <Route path="/" element={<IndexPage />} /> */}
        <Route path="/" element={<ProjectsPage />} />
      </Routes>
      <FooterApp />
    </>
  );
}

export default App;
