import React from 'react'
import Image2 from './img2.jpg'

export default function Home() {
  return (
    <>
    <div className='home'>
 <div className="container bg-secondary-tertiary">

      <div className="row">
        <div className="col-md-6">
       
          <h2 className='text-center text-secondary fw-light'>Text Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
    </div>
    
    </>
  )
}
