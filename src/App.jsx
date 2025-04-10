import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  

  return (
   <div>
  

    <BrowserRouter>
    <Routes>
      <Route index element ={<Home />} />
      <Route path ='/about' element ={<About />} />
    
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
