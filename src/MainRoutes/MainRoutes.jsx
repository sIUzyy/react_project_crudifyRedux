import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Main from '../pages/Main'
import AddUser from '../pages/AddUser'
import EditUser from '../pages/EditUser'

export const MainRoutes = () => {
  return (

    <Router>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='adduser' element={<AddUser/>} />
            <Route path='edituser/:id' element={<EditUser/>} /> 
        </Routes>
   </Router>


  )
}

export default MainRoutes