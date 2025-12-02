import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display: 'flex', gap: '20px', padding: '20px', borderBottom: '1px solid gray'}}>
        <Link to="/home">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contract">Contract</Link>
        <Link to="/division/:division">Division</Link>
        <Link to="/users">Users</Link>
    </nav>
  )
}

export default Navbar