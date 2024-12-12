import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AddModal() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Get the form data as a FormData object

    // Convert FormData to an object for easier use
    const data = Object.fromEntries(formData.entries());
    data.file = formData.get("file"); // For the file input

    console.log("Form Data Submitted:", data);
    // Handle submission logic here
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        Open Health Modal
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary ">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="condition" className="form-label">
                    Health Condition
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="condition"
                    name="condition"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="doctor" className="form-label">
                    Doctor's Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="doctor"
                    name="doctor"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    required
                    style={{border:'1px'}}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="file" className="form-label">
                    Upload File
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="file"
                    name="file"
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
