import React, { useState } from 'react'

const Navbar = (props) => {
  const[item,setItem]=useState('')
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button type="button" style={{backgroundColor:"white",color:"black", border:"none"}} onClick={(e)=>{e.preventDefault();props.changeView('create') }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Create
                </button>
              </li>


            </ul>
            
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar