import { faNotesMedical, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useLocation } from 'react-router-dom';


function Header() {
  // Get current location
  const location = useLocation();

  // Check if the current route is the landing page
  const isExcludedPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';

  return (
    <>

      <div className='bg-primary container-fluid fixed-top' >
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 py-3">
            <div className='d-flex justify-content-between align-items-center'>
              <Link to={'/'} style={{textDecoration:"none"}}><h1><FontAwesomeIcon icon={faNotesMedical} style={{ color: "black" }} className='me-3' />Healthy you.</h1></Link>
              <div>
                {!isExcludedPage && (
                   <Dropdown>
                   <Dropdown.Toggle className='bg-white text-black' id="dropdown-basic">
                   <FontAwesomeIcon icon={faUser} className='me-2'  />Profile
                   </Dropdown.Toggle>
     
                   <Dropdown.Menu className='bg-white'>
                     <div className='row '>
                      <div className="col-2"></div>
                      <div className="col-8 d-flex justify-content-center align-items-center flex-column p-3">
                      <img src="https://cdn-icons-png.flaticon.com/512/5951/5951752.png" alt="" className='w-100' />
                      <h5 className='text-black mt-4'>Username</h5>
                      <button className='btn btn-danger'>Logout</button>
                      </div>
                      <div className="col-2"></div>
                      
                     </div>
                   </Dropdown.Menu>
                 </Dropdown>
                )
               }
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

    </>
  )
}

export default Header