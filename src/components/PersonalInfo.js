import React, { useState } from 'react';

function PersonalInfo({ formData, setFormData, nextStage }) {
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
    if (!formData.fullName) tempErrors.fullName = "Full Name is required";
    if (!formData.dob) tempErrors.dob = "Date of Birth is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number is invalid";
    }

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
      <h2 className="text-center">Personal Information</h2>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <div className="error-message">{errors.fullName}</div>}
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          {errors.dob && <div className="error-message">{errors.dob}</div>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;
