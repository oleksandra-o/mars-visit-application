import React, { useState } from 'react';

function HealthSafety({ formData, setFormData, prevStage, submitForm }) {
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
    if (!formData.healthDeclaration) tempErrors.healthDeclaration = "Health Declaration is required";
    if (!formData.emergencyContact) tempErrors.emergencyContact = "Emergency Contact Information is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submitForm();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Health and Safety</h2>
      <form>
        <div className="form-group">
          <label>Health Declaration</label>
          <select
            className="form-control"
            name="healthDeclaration"
            value={formData.healthDeclaration}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.healthDeclaration && <div className="error-message">{errors.healthDeclaration}</div>}
        </div>
        <div className="form-group">
          <label>Emergency Contact Information</label>
          <input
            type="text"
            className="form-control"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
          />
          {errors.emergencyContact && <div className="error-message">{errors.emergencyContact}</div>}
        </div>
        <div className="form-group">
          <label>Any Medical Conditions (if applicable)</label>
          <textarea
            className="form-control"
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-secondary mr-2" onClick={prevStage}>
          Back
        </button>
        <button type="button" className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default HealthSafety;
