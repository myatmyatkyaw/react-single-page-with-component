import React from 'react'
import Girl from './boy2.jpg'
import Girl2 from './boy2.jpg'
import Girl3 from './boy2.jpg'


export default function Service() {
  return (
    <>
    <div>
    <section className="bg-light p-5 border-top">
                <div className="container">
                    <div className="m-3">
                      <div className="col-md-12 mb-4 text-center">
                        <h2 className="text-secondary fw-bold">Our Services</h2>
                      </div>
                    </div>
                      
                    <div className="row" >

                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card shadow text-center" style={{width:300}}>
                            
                            <img className="card-img-top w-100 border-bottom" src={Girl} alt="Card image"/>
                            <div className="card-body">
                              <h4 className="card-title">Service1</h4>
                              <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              {/* <link to="/Service" className='btn btn-link'>read more</link> */}
                            </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card shadow text-center" style={{width:300}}>
                            
                            <img className="card card-shadow card-img-top w-100 border-bottom" src={Girl2} alt="Card image" />
                            <div className="card-body">
                              <h4 className="card-title">Service2</h4>
                              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>          
                      </div>

                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card shadow text-center" style={{width:300}}>
                           
                            <img className="card-img-top w-100 border-bottom  " src={Girl3} alt="Card image" />
                            <div className="card-body">
                              <h4 className="card-title">Service3</h4>
                              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              <link to="'./Service" className='btn btn-link'></link>
                            </div>
                        </div> 
                      </div>

                    </div>
                </div>
            </section>
    </div>
    </>
  )
}
