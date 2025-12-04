import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import Blog from '../pages/Blog'
import Contract from '../pages/Contract'
import Division from '../pages/Division'
import Users from '../pages/Users'
import ProtectedHome from '../protected-routing-pages/ProtectedHome'
import ProtectedAbout from '../protected-routing-pages/ProtectedAbout'
import ProtectedBlog from '../protected-routing-pages/ProtectedBlog'
import Error from '../pages/Error'
import Protected from './Protected'
import AuthProvider from '../context/AuthContext'

const Index = () => {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/blogs' element={<Blogs/>}></Route>
              <Route path='/blogs/:title' element={<Blog/>}></Route>
              <Route path='/contract' element={<Contract/>}></Route>
              <Route path='/division/:division' element={<Division/>}></Route>
              <Route path='/users' element={<Users/>}></Route>
              
              <Route path='/protected-home' element={<ProtectedHome/>}></Route>
              <Route path='/protected-about' element={<ProtectedAbout/>}></Route>
              
              <Route path='/protected-blog' element={
                <Protected>
                  <ProtectedBlog/>
                </Protected>
              } />

              <Route path='*' element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default Index