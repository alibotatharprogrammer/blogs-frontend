import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('blogdata'); 
    navigate(-1);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/catogeries">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/posts">Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">Setting</Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleLogout}>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Home