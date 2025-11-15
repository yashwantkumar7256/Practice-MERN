
import { Route, Routes } from 'react-router-dom'
import Contect from './components/Contect'
import Header from './components/Header'

import Value from './Pages/Value'
import Reviwe from './Pages/Reviwe'






 


const App = () => {
  return (<>
  <Routes>
    <Route  path='/' element={  <Header/>}/>
    <Route path='/contect' element={<Contect/>}/>
     <Route path='/value' element={<Value/>}/>
     <Route  path='/reviwe' element={<Reviwe/>}/>

  </Routes>

 

    
 </> )
}

export default App
