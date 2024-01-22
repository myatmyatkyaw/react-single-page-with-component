import React from 'react'
import Girl from './boy22.jpg'
//import Girl2 from './boy2.jpg'
//import Girl3 from './boy2.jpg'
import { Link } from 'react-router-dom'

//import About from './About'


export default function Service() {
  return (
    <>
    <div>
    <section className="bg-light p-5 border-top">
                <div className="container">
                    <div className="m-3">
                      <div className="col-md-12 mb-5 text-center">
                        <h2 className="text-secondary fw-bold">Our Services</h2>
                      </div>
                    </div>
                      
                    <div className="row" >

                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card shadow" style={{width:250, height:330}}>
                            <div className='text-center mt-3'>
                            <img className="card-img-top w-50 border-bottom" src={Girl} alt="Card image"/>
                            </div>
                            <div className="card-body text-center">
                              <h4 className="card-title">Service1</h4>
                              <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                              <Link to='/services' className='btn btn-sm btn-outline-dark shadow'>Read More</Link>
                            </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card shadow" style={{width:250, height:330}}>
                            <div className='text-center mt-3'>
                            <img className="card-img-top w-50 border-bottom" src={Girl} alt="Card image"/>
                            </div>
                            <div className="card-body text-center">
                              <h4 className="card-title">Service2</h4>
                              <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                              <Link to='/services' className='btn btn-sm btn-outline-dark shadow'>Read More</Link>
                            </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card shadow" style={{width:250, height:330}}>
                            <div className='text-center mt-3'>
                            <img className="card-img-top w-50 border-bottom" src={Girl} alt="Card image"/>
                            </div>
                            <div className="card-body text-center">
                              <h4 className="card-title">Service3</h4>
                              <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                              <Link to='/services' className='btn btn-sm btn-outline-dark shadow'>Read More</Link>
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
