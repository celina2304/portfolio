/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layout
import Layout from "./pages/Layout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

// hooks
import useScrollTracking from "./hooks/useScrollTracking";
import useWindowDimensions from "./hooks/useWindowDimensions";

const App: React.FC = () => {
  useScrollTracking(); // track scroll position
  useWindowDimensions(); // track browser dimensions
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
