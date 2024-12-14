
import React from 'react'
function Landingpage() {
  return (
    <>

      <div className='container my-5 '>
        <div className='row align-items-center justify-content-between'>
          <div className="col-md-6">
            <h1 className='text-primary'>We're <span className='fw-bolder text-primary-emphasis'>determined</span> for <br />
              your <span className='fw-bolder text-primary-emphasis'>better life</span>.</h1>
            <p>You can get the care you need 24/7 – be it online or in <br />
              person. You will be treated by caring specialist doctors.</p>
            <button className='rounded-pill btn btn-primary text-white '>Register</button>
            <button className='rounded-pill btn btn-primary text-white ms-2'>Login</button>
          </div>
          <div className="col-md-6">
            <img width={'500px'} src="https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/hero.png" alt="" />
          </div>
        </div>

        <div className='d-flex justify-content-between '>
         
        <div className='row mt-5'>
        <div className='col-md-5'>
            <img width={'400px'} src="https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/eye-care.png" alt="" />
          </div>
          <div className="col-md-2"></div>
          <div className='col-md-5'>
            <h3 className='text-primary'>
            We've built a healthcare system that puts your needs first..</h3>
             
            <img src="https://th.bing.com/th/id/OIP.z-p7vLPjwCUuvyR2dKPxIwHaE8?rs=1&pid=ImgDetMain" alt="no img" /> 
              
          </div>
        </div>
        </div>

      </div>

    </>
  )
}

export default Landingpage