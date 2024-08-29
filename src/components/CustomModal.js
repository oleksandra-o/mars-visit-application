import React from 'react';


function CustomModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Form Submitted Successfully!</h2>
        <p>Your application for the Mars Mission has been submitted.</p>
        <button className="btn btn-primary" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

export default CustomModal;
