import React from 'react'
import { useParams } from 'react-router-dom'

const Division = () => {
   const { division } = useParams();
    return (
      <div>
          <h2>Division Name: {division}</h2>
      </div>
    )
}

export default Division