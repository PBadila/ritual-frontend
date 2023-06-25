import './App.css';
import {  Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Login from './components/Login'
import Admin from './components/Admin'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProduct'
import AddRitual from './components/AddRitual'
import UpdateRitual from './components/UpdateRitual'
import DeleteRitual from './components/DeleteRitual'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/admin' element = {<Admin />} />
          <Route path = '/addproduct' element = {<AddProduct />} />
          <Route path = '/updateproduct' element = {<UpdateProduct />} />
          <Route path = '/deleteproduct' element = {<DeleteProduct />} />
          <Route path = '/addritual' element = {<AddRitual />} />
          <Route path = '/updateritual' element = {<UpdateRitual />} />
          <Route path = '/deleteritual' element = {<DeleteRitual />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
