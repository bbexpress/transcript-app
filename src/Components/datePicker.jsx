// DatePickerComponent.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ selectedDates, onChange }) => {
  return (
    <DatePicker
      selected={selectedDates.length > 0 ? selectedDates[0].date : null}
      onChange={(date) => onChange([{ date, description: 'Custom Event' }])}
      dateFormat="yyyy-MM-dd"
      isClearable
      showYearDropdown
      inline
      selectsRange
      startDate={selectedDates.length > 0 ? selectedDates[0].date : null}
      endDate={selectedDates.length > 0 ? selectedDates[selectedDates.length - 1].date : null}
      placeholderText="Select dates"
    />
  );
};

export default CustomDatePicker;
