
import { Route, Routes } from 'react-router-dom'
import Contect from './components/Contect'
import Header from './components/Header'
import Home from './Pages/Home'
import Value from './Pages/Value'






 


const App = () => {
  return (<>
  <Routes>
    <Route  path='/' element={  <Header/>}/>
    <Route path='/contect' element={<Contect/>}/>
     <Route path='/value' element={<Value/>}/>

  </Routes>

 

    
 </> )
}

export default App
