import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Contract from './pages/Contract.jsx'
import Error from './pages/Error.jsx'
import Navbar from './components/Navbar.jsx'
import Blog from './pages/Blog.jsx'
import Users from './pages/Users.jsx'
import Division from './pages/Division.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/blogs' element={<Blogs/>}></Route>
            <Route path='/blogs/:title' element={<Blog/>}></Route>
            <Route path='/contract' element={<Contract/>}></Route>
            <Route path='/division/:division' element={<Division/>}></Route>
            <Route path='/users' element={<Users/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
