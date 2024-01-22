import React from 'react'
import MyImage from './logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
   <nav className="navbar navbar-expand-md bg-secondary">
  <div class="container-fluid">
  
    
  <span className="ms-4">
      <img src={MyImage} // Replace with the actual path to your logo/image
          width="40"
          height="40"
          className="d-inline-block align-top bg-secondary"
          alt="Logo" 
          />
    </span>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                          <span className="navbar-toggler-icon justify-content-end"></span>
     </button>
   
    <div class="collapse navbar-collapse justify-content-end me-5" id="nav">
      <ul class="navbar-nav ms-4 mb-2 mb-lg-0">
        <li class="nav-item me-4">
          {/* <a className="nav-link active text-light fw-bold " aria-current="page" href="/home">Home</a> */}
          <Link to="/" className='nav-link active text-light fw-bold'>Home</Link>
        </li>
        <li class="nav-item me-4">
          {/* <a className="nav-link text-light fw-bold" href="/about">About</a> */}
          <Link to="/about" className='nav-link active text-light fw-bold'>About</Link>
        </li>
        <li class="nav-item me-4">
          {/* <a className="nav-link text-light fw-bold" href="/services">Services</a> */}
          <Link to="/services" className='nav-link active text-light fw-bold'>Services</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</>
  )
}

