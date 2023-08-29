import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import MainSplash from './components/MainSplash';
import Well from './components/project-pages/Well';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<MainSplash />} />
        <Route path="well" element={<Well />} />
        <Route path="*" element={<MainSplash />} />
      </Routes>
    </div>
  );
}

export default App;
