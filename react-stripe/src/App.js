import { Pay } from './components/Pay';
import { Success } from './components/Success';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/pay' element={<Pay />}></Route>
          <Route path='/success' element={<Success />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
