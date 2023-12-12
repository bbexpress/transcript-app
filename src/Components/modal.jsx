// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import './modal.css';

const ModalComponent = ({ isOpen, onRequestClose, selectedRow }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
      {selectedRow && (
        <div className="modal-container">
          <h2 className="modal-title">{selectedRow.title}</h2>
          <div className="modal-content">
            <div className="modal-quadrant">
              <p><strong>Short Description:</strong> {selectedRow.short_description}</p>
            </div>
            <div className="modal-quadrant">
              <p><strong>Tags:</strong> {selectedRow.tags.join(', ')}</p>
            </div>
            <div className="modal-quadrant">
              <p><strong>Description:</strong> {selectedRow.full_description}</p>
            </div>
            <div className="modal-quadrant">
              <label><strong>Dates:</strong></label>
              {/* Render the dates as a comma-separated string */}
              <p>{selectedRow.dates.join(', ')}</p>
            </div>
          </div>
          <button className="modal-button" onClick={onRequestClose}>Close Modal</button>
        </div>
      )}
    </Modal>
  );
};

export default ModalComponent;
