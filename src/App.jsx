import React from 'react'
import Priya from './aa.jsx'
import Piri from './bb.jsx'
import Srini from './cc.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nivi from './useNavi.jsx'
import Divya from './dd.jsx'
import Visvak from './props.jsx'
import Multi from './multiprops.jsx'
import Map from './map.jsx'
import SingleUse from './Hooks/SingleUse.jsx'
import Forms from "./Hooks/Forms.jsx";
import Store from './Hooks/Storedata.jsx'
// import Useeffect from './Hooks/UseEffect.jsx'
import Params from './useparams.jsx'
import Context1 from './Hooks/usecontext/usecontext1.jsx'
import Callback from './Hooks/usecallback/callback.jsx'
import Memo from './Hooks/UseMemo.jsx'
const App = () => {
  return (
    <div>
    {/* <Priya/>  tag format */}
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Priya/>}/>
          <Route path='/2' element={<Piri/>}/>
          <Route path='/3' element={<Srini/>}/>
          <Route path='/4' element={<Nivi/>}/>
          <Route path='/5' element={<Divya/>}/>
          <Route path='/6' element={<Visvak/>}/>
          <Route path='/7' element={<Multi/>}/>
          <Route path='/8' element={<Map/>}/>
          <Route path='/9' element={<SingleUse/>}/>
          <Route path='/10' element={<Forms/>}/>
          <Route path='/11' element={<Store/>}/>
           {/* <Route path='/12' element={<Useeffect/>}/> */}
          <Route path='/13/:username' element={<Params/>}/>          
          <Route path='/14' element={<Context1/>}/>
          <Route path='/15' element={<Callback/>}/>
          <Route path='/16' element={<Memo/>}/>
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
