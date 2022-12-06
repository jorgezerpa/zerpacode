import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PersonalProjects } from './pages/PersonalProjects';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalProjects" element={<PersonalProjects />} />
      </Routes>
    </div>
  )
}

export default App