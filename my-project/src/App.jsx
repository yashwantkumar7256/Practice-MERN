import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Residence from './components/Residence'







const App = () => {
  return (<>
  <div>
   <Header/>
    <Routes>
      <Route path='/' element={<Header/>}/>
      
     

    </Routes>
    </div>
 </> )
}

export default App
