// App.tsx
import { Routes, Route } from 'react-router-dom';
import HomeLayout from './components/HomeLayout.tsx';
import { ProjectDetail } from './components/ProjectDetail.tsx';
import { About } from './components/sections/About.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/project/:projectId" element={<ProjectDetail/>} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
