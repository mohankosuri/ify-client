 import React from 'react'
import Videocomponent from './components/Videocomponent'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Team from './screens/Team'
import Blog from './screens/Blog'
import About from './screens/About'
import Contact from './screens/Contact'
import Home from './screens/Home'

 
 const App = () => {
   return (
     <div>
        <Navbar/>
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App