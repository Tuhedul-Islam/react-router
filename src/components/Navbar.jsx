import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  return (
    <nav style={{display: 'flex', gap: '20px', padding: '20px', borderBottom: '1px solid gray'}}>
        <Link to="/home">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contract">Contact</Link>
        <Link to="/division/:division">Division</Link>
        <Link to="/users">Users</Link>
        <Link to="/protected-home">Protected Home</Link>
        <Link to="/protected-about">Protected About</Link>
        <Link to="/protected-blog">Protected Blog</Link>

        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)} 
          style={{marginLeft: 'auto', padding: '5px 10px', border: '5px solid black', cursor: 'pointer'}}> 
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    </nav>
  )
}

export default Navbar