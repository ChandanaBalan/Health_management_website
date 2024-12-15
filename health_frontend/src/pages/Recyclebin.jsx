import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Recyclebin() {
  return (
    <>

    <div className='bg-white container-fluid'>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 table-responsive">
        
          <table className='table table-bordered mt-5'>
            <thead>
              <tr>
                <th className='text-center'>No.</th>
                <th className='text-center'>Health condition</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'>1</td>
                <td className='text-center'>Allergy</td>
                <td className='text-center'><Button variant="danger">Delete</Button></td>
              </tr>
              <tr>
                <td className='text-center'>1</td>
                <td className='text-center'>Allergy</td>
                <td className='text-center'><Button variant="danger">Delete</Button></td>
              </tr>
            </tbody>
          </table>
          <div className='d-flex justify-content-end  px-5'>
             
             <Link to={'/home'}><h5 className='text-black'> <FontAwesomeIcon icon={faHouse} /> Back Home</h5></Link>
           </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
       
    </>
  )
}

export default Recyclebin