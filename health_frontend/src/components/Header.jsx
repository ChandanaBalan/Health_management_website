import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { faFileMedical, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <>
      <div>
        <Navbar className="p-3" > 
          <Container>
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h2 className="text-primary d-flex align-items-center">
                  <FontAwesomeIcon icon={faFileMedical} style={{ color: '#007bff' }} className="me-2" />
                  Healthy you.
                </h2>
              </Link>
              <button className="btn border border-dark d-flex align-items-center px-4 py-2 ">
                <FontAwesomeIcon icon={faPowerOff} className="me-2" />
                <Link to="/" className="text-center text-decoration-none">Profile</Link>
              </button>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
