import React from 'react';

function Login() {
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 p-5">
          <form
            className="shadow p-5 rounded bg-primary text-white"
          >
            <h1 className="text-center mb-4">Login</h1>
            <div className="mb-3">
              <input type="text" placeholder="Username" className="form-control" style={{ backgroundColor: 'white', color: 'black' }} />
                
            </div>

            <div className="mb-3">
              <input type="password" placeholder="Password" className="form-control" style={{ backgroundColor: 'white', color: 'black' }} />
                
            </div>

            <div className="mb-3">
              <button  type="button" className="btn btn-primary w-100">Login</button>
               
            <span className="d-block mt-3 text-center">Are You a New User?{' '} <a href="" className="text-light"> Register</a>
            </span>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

