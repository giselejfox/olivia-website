import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import MainSplash from './components/MainSplash';
import About from './components/About';

import Well from './components/project-pages/Well';
import Beam from './components/project-pages/Beam';

import SoleOpinion from './components/SoleOpinion.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<MainSplash />} />
        <Route path="about" element={<About />} />
        <Route path="sole-opinion" element={<SoleOpinion />} />
        <Route path="well" element={<Well />} />
        <Route path="beam" element={<Beam />} />
        <Route path="*" element={<MainSplash />} />
      </Routes>
    </div>
  );
}

export default App;
