import { Route,Routes } from 'react-router-dom'
import './App.css'
import Recyclebin from './pages/Recyclebin'
import Landingpage from './pages/Landingpage'
import Register from './components/Register'
import Login from './components/Login'
import Viewdetails from './pages/Viewdetails'
import Home from './pages/Home'






function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home/recyclebin' element={<Recyclebin/>}/>
        <Route path='/home/viewdetails' element={<Viewdetails/>}/>
        
        
        
      </Routes>
      
    </>
  )
}

export default App
