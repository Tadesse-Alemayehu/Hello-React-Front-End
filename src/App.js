import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <div>
      <div className="App">Hello! from react app</div>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
