// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import CustomDatePicker from './datePicker';
import './modal.css';

const ModalComponent = ({ isOpen, onRequestClose, selectedRow }) => {
  const [selectedDates, setSelectedDates] = React.useState(selectedRow ? selectedRow.dates : []);

  React.useEffect(() => {
    setSelectedDates(selectedRow ? selectedRow.dates : []);
  }, [selectedRow]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
      {selectedRow && (
        <div className="modal-container">
          <h2 className="modal-title">{selectedRow.title}</h2>
          <div className="modal-content">
            <div className="modal-quadrant">
              <p><strong>Short Description:</strong> {selectedRow.shortDescription}</p>
            </div>
            <div className="modal-quadrant">
              <p><strong>Description:</strong> {selectedRow.description}</p>
            </div>
            <div className="modal-quadrant">
              <p><strong>Tags:</strong> {selectedRow.tags}</p>
            </div>
            <div className="modal-quadrant">
              <label><strong>Dates:</strong></label>
              {/* Render the dates without descriptions */}
              <ul>
                {selectedDates.map((date, index) => (
                  <li key={index}>{new Date(date).toDateString()}</li>
                ))}
              </ul>
              <CustomDatePicker selectedDates={selectedDates} onChange={setSelectedDates} />
            </div>
          </div>
          <button className="modal-button" onClick={onRequestClose}>Close Modal</button>
        </div>
      )}
    </Modal>
  );
};

export default ModalComponent;
