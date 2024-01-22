import React from 'react'
import Image2 from './img2.jpg'
import { Link } from 'react-router-dom'

import About from './About'
import Service from './Service'

export default function Home() {
  return (
    <>
    
    <div className='home'>
 <div className="container bg-secondary-tertiary">

      <div className="row">
        <div className="col-md-6 text-center mt-5 p-5">
       
          <h2 className='text-secondary fw-bold fs-3'>Text Title</h2>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            React Single Page with Component Lorem ipsum dolor sit amet, consectetur 
          </p>
          <Link to='/home' className='btn btn-outline-dark shadow'>Read More</Link>
          {/* Add more text or content as needed */}
       
        </div>
        
        <div className="col-md-6 p-5">
       
          <img
            src={Image2} // Replace with the actual path to your image
            alt="Image"
            className="img-fluid"
          />
        
        </div>
      </div>
    </div>
    </div>
    <About />
    <Service />
    </>
  )
}
