import React from 'react'
import Figure from 'react-bootstrap/Figure';


function Viewdetails() {
  return (
    <>
    

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5">
          

          <div className='row p-2 rounded' style={{ marginTop: "10px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <div className='w-100'>
                <h4 className='text-black' style={{ textAlign: "right" }}>Health Condition : </h4>
              </div>
            </div>
            <div className="col-6">
              <h4><strong> Infection</strong></h4>
            </div>
          </div>
          <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <div className='w-100'>
                <h5 className='text-black' style={{ textAlign: "right" }}>Doctor's Name : </h5>
              </div>
            </div>
            <div className="col-6">
              <h5 className='text-black'>Dr. Divya S</h5>
            </div>
          </div>
          <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <div className='w-100'>
                <h5 className='text-black' style={{ textAlign: "right" }}>Date : </h5>
              </div>
            </div>
            <div className="col-6">
              <h5 className='text-black'>6/12/2024</h5>
            </div>
          </div>
          <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <div className='w-100'>
                <h5 className='text-black' style={{ textAlign: "right" }}>Description : </h5>
              </div>
            </div>
            <div className="col-6">
              <p className='text-black' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis facilis molestiae eveniet, repellat minima numquam, aliquid aperiam at distinctio omnis dignissimos eius deleniti reprehenderit soluta natus! Ut necessitatibus sequi ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum vero facilis perspiciatis, facere blanditiis inventore. Molestiae quaerat, sunt doloribus quia iure culpa exercitationem dolorem ut harum aliquam</p>
            </div>
          </div>
          <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <div className='w-100'>
                <h5 className='text-black' style={{ textAlign: "right" }}>Files : </h5>
              </div>
            </div>
            <div className="col-6">
              <Figure className='px-2 ' style={{ position: "relative", display: "inline-block", margin: "10px" }}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDKv8T18KNodVC1L4lIQGN25maC4ycXnVrg&s"
                />
                <button
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      background: "red",
                      color: "black",
                      border: "none",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                      cursor: "pointer"
                    }}
                  >
                    ✕
                  </button>
                
              </Figure>
              
              <Figure className='px-2' style={{ position: "relative", display: "inline-block", margin: "10px" }}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDKv8T18KNodVC1L4lIQGN25maC4ycXnVrg&s"
                />
                <button
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      background: "red",
                      color: "black",
                      border: "none",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                      cursor: "pointer"
                    }}
                  >
                    ✕
                  </button>
                
              </Figure>

              <div className='w-100 d-flex justify-content-end px-5'>
                {/* <button className='rounded btn btn-primary p-2 mt-2 bg-primary text-white' >Edit file</button> */}
                <button className='rounded btn btn-primary  p-2 mt-2 bg-white text-primary' >Upload file</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  )
}

export default Viewdetails