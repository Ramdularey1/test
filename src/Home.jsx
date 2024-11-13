import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/content")
  }
  return (
    <div>
      <div>Home</div>
      <button onClick={handleClick}>Go to Content</button>
    </div>
  )
}

export default Home