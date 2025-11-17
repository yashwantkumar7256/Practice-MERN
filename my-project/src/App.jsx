
import { Route, Routes } from 'react-router-dom'
import Contect from './components/Contect'
import Header from './components/Header'

import Value from './Pages/Value'
import Reviwe from './Pages/Reviwe'
import { useState } from 'react' 
import Details from './components/data'

const App = () => {
  const [productid, setProductid]=useState('');
  console.log(productid);
  var filterobj=Details.filter((product)=>{
return product.id===productid;
  })
  // console.log(filterobj);
  return (<>
  <Routes>
    <Route  path='/' element={  <Header setProdctid={setProductid}/>}/>
    <Route path='/contect' element={<Contect filter={filterobj}/>}/>
     <Route path='/value' element={<Value/>}/>
     <Route  path='/reviwe' element={<Reviwe/>}/>

  </Routes>

 

    
 </> )
}

export default App
