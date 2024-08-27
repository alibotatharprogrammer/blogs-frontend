import React from 'react'
import { Link } from 'react-router-dom'

const Publicnav = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Publicnav
