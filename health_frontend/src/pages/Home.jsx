import React, { useState } from 'react'
import AddModal from '../components/AddModal'
import Card from 'react-bootstrap/Card';

function Home() {



  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 justify-content-center align-item-center">
            <img width={'1000px'} src="https://wallpaperaccess.com/full/624111.jpg" alt="no img" />
          </div>
          <div className="col-md-1">

          </div>

        </div>
        <div>
          <div className= ' rounded text-center mt-5'><AddModal /></div>
        </div>

        <div className='d-flex justify-content-center gap-5 mt-4'>
          <div className='rounded shadow '>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.lXwFeCDGfIHa6Qk1Us2YpQAAAA?rs=1&pid=ImgDetMain" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className='rounded shadow '>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.lXwFeCDGfIHa6Qk1Us2YpQAAAA?rs=1&pid=ImgDetMain" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className='rounded shadow '>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.lXwFeCDGfIHa6Qk1Us2YpQAAAA?rs=1&pid=ImgDetMain" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>



    </>
  )
}

export default Home