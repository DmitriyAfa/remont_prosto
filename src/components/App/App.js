import { Routes, Route } from "react-router-dom";
import { HeaderApp } from "../header/HeaderApp/HeaderApp";
import { FooterApp } from "../footer/FooterApp/FooterApp";
import { IndexPage } from "../../pages";
import { ProjectsPage } from "../../pages/projects";
import { ProjectGallery } from "../projects/ProjectGallery/ProjectGallery";
import { AboutPage } from "../../pages/about";
import { ContactsPage } from "../../pages/contacts";
import { StockPage } from "../../pages/stock";
function App() {
  return (
    <>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectGallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <FooterApp />
    </>
  );
}

export default App;
