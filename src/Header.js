import React from 'react'
import MyImage from './OIP.jpg';


export default function Header() {
  return (
    <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <span className="ms-5">
      <img src={MyImage} // Replace with the actual path to your logo/image
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Logo" 
          />
    </span>
   
    <div class="justify-content-end me-5" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-4">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</>
  )
}
