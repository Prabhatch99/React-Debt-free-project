import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Head from './component/Head'
import Page2 from './component/planfinder/Page2'
import Page3 from './component/planfinder/Page3'
import Page4 from './component/planfinder/Page4'
import Planfinder from './component/planfinder/Planfinder'
import Thankyou from './component/planfinder/Thankyou'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Head />} />
        <Route path='/Planfinder' element={<Planfinder />} />
        <Route path='/Page2' element={<Page2 />} />
        <Route path='/Page3' element={<Page3 />} />
        <Route path='/Page4' element={<Page4 />} />
        <Route path='/Thankyou' element={<Thankyou />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App