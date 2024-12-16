import React, { useState, useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getViewDetails } from '../services/allApi'; // Import the new API

function Viewdetails({ detailId }) {
  const [details, setDetails] = useState(null); // State to store details
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch details on component mount
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await getViewDetails(detailId);  
        if (response.status === 200) {
          setDetails(response.data); 
          setUploadedFiles(response.data.files || []); 
        }
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };
    fetchDetails();
  }, [detailId]);

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

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-white container-fluid'>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5">

          
          
          <div className='row p-2 rounded' style={{ marginTop: "10px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <h4 className='text-black' style={{ textAlign: "right" }}>Health Condition : </h4>
            </div>
            <div className="col-6">
              <h4><strong>{details.healthCondition}</strong></h4>
            </div>
          </div>
          <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <h5 className='text-black' style={{ textAlign: "right" }}>Doctor's Name : </h5>
            </div>
            <div className="col-6">
              <h5 className='text-black'>{details.doctorName}</h5>
            </div>
          </div>
          <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <h5 className='text-black' style={{ textAlign: "right" }}>Date : </h5>
            </div>
            <div className="col-6">
              <h5 className='text-black'>{details.date}</h5>
            </div>
          </div>
          <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <h5 className='text-black' style={{ textAlign: "right" }}>Description : </h5>
            </div>
            <div className="col-6">
              <p className='text-black' style={{ textAlign: "justify" }}>{details.description}</p>
            </div>
          </div>

          {/* File Upload Section */}
          <div className='row p-2 rounded' style={{ marginTop: "1px", border: "2px solid rgb(84, 194, 255)" }}>
            <div className="col-6">
              <h5 className='text-black' style={{ textAlign: "right" }}>Files : </h5>
            </div>
            <div className="col-6">
              {uploadedFiles.map((file, index) => (
                <Figure key={index} className='px-2' style={{ position: "relative", display: "inline-block", margin: "10px" }}>
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
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>

      {/* Modal */}
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
  );
}

export default Viewdetails;
