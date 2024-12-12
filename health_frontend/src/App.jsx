import { Route, Routes } from 'react-router-dom'
import './App.css'
import Recyclebin from './pages/Recyclebin'
import Landingpage from './pages/Landingpage'
import Viewdetails from './pages/Viewdetails'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  
  return (
    <>

     <Header />
        <Routes>
           <Route path='/' element={<Landingpage/>} />
           <Route path='/Recycle' element={<Recyclebin/>} />
           <Route path='/details' element={<Viewdetails/>} />
        </Routes>
     <Footer />
     </>
  )
}

export default App
