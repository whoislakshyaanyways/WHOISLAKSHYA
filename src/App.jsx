import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Landing from './pages/Landing';
import Zero from './pages/Zero';
import ProjectPage from './sections/Tech/ProjectPage';

import One from './pages/One';
import Playground from './pages/Playground';

import ScrollToTop from './hooks/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<Layout />}>
          <Route path="zero">
            <Route index element={<Zero />} />
            <Route path="projects/:projectId" element={<ProjectPage />} />
          </Route>
        </Route>

          <Route path="one">
            <Route index element={<One />} />
            <Route path="Playground" element={<Playground />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
