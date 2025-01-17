import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/signupPage'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/login' element={<LoginPage />}></Route>
      <Route path = '/signup' element={<SignupPage />}></Route>

    </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
