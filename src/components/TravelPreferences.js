import React, { useState } from 'react';

function TravelPreferences({ formData, setFormData, nextStage, prevStage }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.departureDate) tempErrors.departureDate = "Departure Date is required";
    if (!formData.returnDate) tempErrors.returnDate = "Return Date is required";
    if (!formData.accommodation) tempErrors.accommodation = "Accommodation Preference is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStage();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Travel Preferences</h2>
      <form>
        <div className="form-group">
          <label>Departure Date</label>
          <input
            type="date"
            className="form-control"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
          {errors.departureDate && <div className="error-message">{errors.departureDate}</div>}
        </div>
        <div className="form-group">
          <label>Return Date</label>
          <input
            type="date"
            className="form-control"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
          {errors.returnDate && <div className="error-message">{errors.returnDate}</div>}
        </div>
        <div className="form-group">
          <label>Accommodation Preference</label>
          <select
            className="form-control"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Space Hotel">Space Hotel</option>
            <option value="Martian Base">Martian Base</option>
          </select>
          {errors.accommodation && <div className="error-message">{errors.accommodation}</div>}
        </div>
        <div className="form-group">
          <label>Special Requests or Preferences</label>
          <textarea
            className="form-control"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-secondary mr-2" onClick={prevStage}>
          Back
        </button>
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}

export default TravelPreferences;
