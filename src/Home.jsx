import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
 
  return (
    <div>
      <div className=''>
        <Link to = "/content">Content</Link>
        <Link to = "/about">About</Link>
      </div>
      
    </div>
  )
}

export default Home