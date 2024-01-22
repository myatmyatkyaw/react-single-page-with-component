import React from 'react'

import { Link } from 'react-router-dom'
//import Home from './Home'
//import Service from './Service'

export default function About() {
  return (
    <>
    
    <div className='about border-top border-secondary border-start-0 border-end-0'>
    <div className='container'>
      <div className='row'>
      <h2 className='col-md-12 text-center text-secondary fw-bold'>About</h2>
    
       
          <p className='mt-3 text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
         
          {/* <Link to="/about" className='btn btn-warning shadow'>Read More</Link> */}
         
        
        </div>
        <div className='text-center'>
        <Link to='/about' className='btn btn-outline-dark shadow '>Read More</Link>
        </div>
        </div>
      </div>
     
    </>
  )
}