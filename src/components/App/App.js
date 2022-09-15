import { Routes, Route, Link } from "react-router-dom";
import { HeaderApp } from "../header/HeaderApp/HeaderApp";
import { FooterApp } from "../footer/FooterApp/FooterApp";
import { IndexPage } from "../../pages";
import { ProjectsPage } from "../../pages/projects";
import { ProjectGallery } from "../projects/ProjectGallery/ProjectGallery";
function App() {
  return (
    <>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectGallery />} />
      </Routes>
      <FooterApp />
    </>
  );
}

export default App;
