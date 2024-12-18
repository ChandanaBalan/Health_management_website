import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='bg-primary'>
      <footer className="text-white py-4">
        <Container className=''>
          <Row className=''>
            
            <Col className='text-primary'>
              <h4 className='text-light'>ABOUT US</h4>
              <p>
                We are dedicated to promoting health and wellness. Our mission is to empower individuals with the knowledge and tools needed for a balanced lifestyle.
              </p>
            </Col>
            <Col className='ms-5'>
              <h4 className='text-light'>GUIDES</h4>
              <ul className="list-unstyled">
                <li className="text-light  text-decoration-none">Community</li>
                <li className="text-light  text-decoration-none">Customer Service</li>
                <li className="text-light text-decoration-none">Support Policy</li>
                
              </ul>
            </Col>

            <Col >
              <h4 className='text-light'>LINKS</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light text-center text-decoration-none">Home</Link>
                </li>
                <li>
                  <Link to="/login" className="text-light text-center text-decoration-none">Recyclebin</Link>
                </li>
                <li>
                  <Link to="/login" className="text-light text-center text-decoration-none">Details</Link>
                </li>
              </ul>
            </Col>
            <Col >
              <h4 className='text-light'>SUBSCRIBE</h4>
              <Form  >
                <Form.Group className="border border-black mb-3 " >
                  <Form.Control type="email" placeholder="Enter your email" value='' required/>
                </Form.Group>
                <Button type="submit" className="btn btn-dark border border-light">Submit</Button>
              </Form>
              
            </Col>
          </Row>
  
          <hr className="bg-white" />
          <div className="text-center pt-2">
            © Healthy You. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
