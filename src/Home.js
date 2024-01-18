import React from 'react'
import Image2 from './img2.jpg'

export default function Home() {
  return (
    <>
 <div className="container bg-secondary-subtle">

      <div className="row">
       
        <div className="col-md-6">
          <h2>Text Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Add more text or content as needed */}
        </div>
        <div className="col-md-6">
          <img
            src={Image2} // Replace with the actual path to your image
            alt="Image"
            className="img-fluid"
          />
        </div>
      </div>
    </div>

    
    </>
  )
}
