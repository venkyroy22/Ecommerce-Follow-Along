import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/signupPage';
import Home from './pages/Home';
import CreateProduct from './pages/createProduct';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/create-product' element={<CreateProduct />}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App