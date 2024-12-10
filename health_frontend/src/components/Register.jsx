import React from 'react';


function Register() {
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 p-5">
          <form
            className="shadow p-5 bg-primary text-white rounded"
          >
            <h1 className="text-center mb-4">Register</h1>
            <div className="mb-3">
              <input type="text" placeholder="Username" className="form-control" style={{ backgroundColor: 'white', color: 'black' }} />
                
            </div>

            <div className="mb-3">
              <input type="password" placeholder="Password" className="form-control" style={{ backgroundColor: 'white', color: 'black' }} />
                
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-light w-100">Register</button>
            <span>
                <p className="mt-3">Are You a New User?{' '} <a href="" className="text-light">Login</a></p>
            </span>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

