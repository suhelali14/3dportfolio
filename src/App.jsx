import React from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
const App = () => {
  return (
    <main className='w-full h-full'>
        
        <Router>
        
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                
            </Routes>
        </Router>
    </main>
  )
}

export default App
