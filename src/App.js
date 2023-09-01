import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import MainSplash from './components/MainSplash';
import About from './components/About';
import Well from './components/project-pages/Well';
import Test from './components/Test';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<MainSplash />} />
        <Route path="about" element={<About />} />
        <Route path="test" element={<Test />} />
        <Route path="well" element={<Well />} />
        <Route path="*" element={<MainSplash />} />
      </Routes>
    </div>
  );
}

export default App;
