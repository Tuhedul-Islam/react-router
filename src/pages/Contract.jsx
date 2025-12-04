import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contract = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    }

  return (
    <div>
        <h2>Contact</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Natus illum assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fugiat repellendus explicabo eveniet distinctio hic neque?harum pariatur, soluta laboriosam 
            distinctio alias facilis dolor cum ullam id molestiae nam, 
            officia ipsum, autem deleniti. Eaque, dolorem?
        </p>
        <button onClick={goToHome}>Go to Homepage</button>
    </div>
  )
}

export default Contract