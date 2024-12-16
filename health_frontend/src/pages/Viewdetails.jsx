import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




function Viewdetails() {



  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Handle file selection and upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Handle file deletion
  const handleFileDelete = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };


  // Open modal to view file
  const handleFileView = (file) => {
    setSelectedFile(file);
    setShowModal(true);
  };


  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
  };

  return (
    <>


     <div className='bg-white container-fluid'>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 my-5 px-md-0 px-5">
  
  
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
                <p className='text-black' style={{ textAlign: "justify" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis facilis molestiae eveniet, repellat minima numquam, aliquid aperiam at distinctio omnis dignissimos eius deleniti reprehenderit soluta natus! Ut necessitatibus sequi ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum vero facilis perspiciatis, facere blanditiis inventore. Molestiae quaerat, sunt doloribus quia iure culpa exercitationem dolorem ut harum aliquam</p>
              </div>
            </div>
            <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
              <div className="col-6">
                <div className='w-100'>
                  <h5 className='text-black' style={{ textAlign: "right" }}>Files :<br /> <p style={{fontSize:"8px"}} className='pe-2'>(.jpeg,.jpg,.pdf)</p>   </h5>
                  
                </div>
              </div>
              <div className="col-6">
                {uploadedFiles.map((file, index) => (
                  <Figure key={index} className='px-2 ' style={{ position: "relative", display: "inline-block", margin: "10px" }}>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="Uploaded file"
                      src={file.type.startsWith('image') ? URL.createObjectURL(file) : 'https://via.placeholder.com/171x180?text=PDF'}
                      onClick={() => handleFileView(file)}
                    />
                    <button
                      onClick={() => handleFileDelete(index)}
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
                ))
                }
  
  
  
                <div className='w-100 d-flex justify-content-end px-5'>
  
                  <label
                    htmlFor="file-upload"
                    className="rounded btn btn-primary p-2 mt-2 bg-white text-primary"
                    style={{ cursor: 'pointer' }}
                  >
                    Upload file
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div >
  
  
        {/* Full-Screen Modal */}
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>File Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {selectedFile?.type.startsWith('image') ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                style={{ width: '100%', height: 'auto' }}
              />
            ) : selectedFile?.type === 'application/pdf' ? (
              <iframe
                src={URL.createObjectURL(selectedFile)}
                title="PDF Preview"
                style={{ width: '100%', height: '500px' }}
              />
            ) : (
              <p>File format not supported for preview.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
     </div>
    </>
  )
}

export default Viewdetails