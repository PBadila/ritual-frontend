import './App.css';
import {  Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Login from './components/Login'
import Admin from './components/Admin'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/login' element = {<Login />} />
          <Route path = '/admin' element = {<Admin />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
