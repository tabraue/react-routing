import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>No eres tú... soy yo</h1>
      <img src="sadfood.jpg" alt="sad taco" />
      <Link to={'/'} className='link'>Volver</Link>
    </div>
  )
}

export default NotFound