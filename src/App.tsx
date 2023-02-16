import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Navigation from "./components/Layout/Navigation";
import NotFound from "./components/NotFound/NotFound";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { projects } from "./assets/projects";
import Project from "./components/Projects/Project/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <div className="row">
            <Navigation />
            <div className="hologram-container">
              <div className="hologram-text">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route
                    path="/projects"
                    element={<Projects projects={projects} />}
                  />
                  <Route
                    path="/projects/:id"
                    element={<Project projects={projects} />}
                  />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <div className="holographic-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
