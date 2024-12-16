import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function EditModal() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());
        data.file = formData.get("file");

        console.log("Form Data Submitted:", data);
    };

    const inputStyle = {
        border: "1px solid #dcdcdc",
        borderRadius: "4px",
    };

    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Edit Details
            </Button>


            <Modal show={show} onHide={handleClose} centered contentClassName="bg-white">
                <Modal.Header closeButton className="bg-primary">
                    <Modal.Title className="text-white">Edit Health Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="condition" className="form-label">Health Condition</label>
                            <input type="text" className="form-control" id="condition" name="condition" required style={inputStyle} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="doctor" className="form-label">Doctor's Name</label>
                            <input type="text" className="form-control" id="doctor" name="doctor" required style={inputStyle} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" name="description" rows="3" required style={inputStyle}></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" id="date" name="date" required style={inputStyle} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="file" className="form-label">Upload File</label>
                            <input type="file" className="form-control" id="file" name="file" style={inputStyle} />
                        </div>

                        <div className="text-end">
                            <button className="btn btn-danger me-2">
                                <FontAwesomeIcon icon={faTrashCan} color="#ffffff"/>
                            </button>
                            <button type="button" className="btn btn-secondary me-2" onClick={handleClose}>Close</button>
                            <button type="submit" className="btn btn-primary">Save Changes</button>

                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default EditModal;