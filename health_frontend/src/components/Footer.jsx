import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="text-white py-4">
      <Container className=''>
        <Row className=''>
          
          <Col className='text-primary'>
            <h5>About Us</h5>
            <p>
              We are dedicated to promoting health and wellness. Our mission is to empower individuals with the knowledge and tools needed for a balanced lifestyle.
            </p>
          </Col>
          <Col >
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-primary text-center text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/Recyclebin" className="text-primary text-center text-decoration-none">Recyclebin</Link>
              </li>
              <li>
                <Link to="/" className="text-primary text-center text-decoration-none">Details</Link>
              </li>
            </ul>
          </Col>
          
          
          <Col >
            <h5>Subscribe</h5>
            <Form >
              <Form.Group className="border border-black mb-3" >
                <Form.Control type="email" placeholder="Enter your email" value='' required/>
              </Form.Group>
              <Button type="submit" className="btn btn-primary">Submit</Button>
            </Form>
          </Col>
        </Row>

        <hr className="bg-white" />
        <div className="text-center pt-2">
          © Healthy You. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
