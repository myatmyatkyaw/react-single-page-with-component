import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons'


export default function Footer() {
  return (
    <>
   
    <footer className="bg-secondary mt-3">
          <div className="container-fluid ">
              <div className="row">
                  {/* column 1 */}
                  <div className='col-md-4 col-sm-12 text-light p-3'>
                    <h4>Company</h4>
                    <hr />
                    <ul className='list-unstyled col-md-4'>
                      <li>FAQ</li>
                      <li>Terms of Use</li>
                      <li>Privacy Policy</li>
                      <li>License Agreement</li>
                      <li>Contact Support</li>
                    </ul>
                  </div>

                  {/* column 2 */}
                  <div className='col-md-4 col-sm-12 text-light p-3'>
                    <h4>Product</h4>
                    <hr />
                    <ul className='text2 list-unstyled text-start'>
                      <li>Download</li>
                      <li>Documentation</li>
                      <li>Forum</li>
                      <li>Blog</li>
                     
                     
                    </ul>
                  </div>

                    {/* column 2 */}
                    <div className='col-md-4 col-sm-12 text-light p-3'>
                    <h4>Lorem ipsum</h4>
                    <hr className='text-light'/>
                    <ul className='text3 list-unstyled text-start'>
                      <li>Download</li>
                      <li>Documentation</li>
                      <li>Forum</li>
                      <li>Blog</li>
                     
                     
                    </ul>
                  </div>

                  {/* column 3 */}
                  {/* <div className='col-md-3 col-sm-6'>
                    <h4>Lorem ipsum</h4>
                    <ul className='list-unstyled'>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                    </ul>
                  </div> */}

                  {/* column 4 */}
                  {/* <div className='col-md-3 col-sm-6'>
                    <h4>Lorem ipsum</h4>
                    <ul className='list-unstyled'>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                    </ul>
                  </div> */}
                  <div className='row'>
                  <p className="col-md-6 text-white-50">&copy;copyright 2024 - GIC. All Rights Reserved.</p>
                  <div className="col-md-6 py-2 text-end">
                          <a href="#"><i className="fab fa-facebook fa-2x text-light mx-3"></i></a>
                          <a href="#"><i className="fab fa-youtube fa-2x text-light mx-3"></i></a>
                          <a href="#"><i className="fab fa-twitter fa-2x text-light mx-3"></i></a>
                          <a href="#"><i className="fab fa-google-plus fa-2x text-light mx-3"></i></a>
                      </div>
                      
                 
                  </div>
              </div>
          </div>
        </footer>
   
    </>
  )
}
