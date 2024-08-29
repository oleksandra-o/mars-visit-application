import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import TravelPreferences from './components/TravelPreferences';
import HealthSafety from './components/HealthSafety';
import './App.css';


function App() {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: '',
    emergencyContact: '',
    medicalConditions: '',
  });

  const nextStage = () => setStage(stage + 1);
  const prevStage = () => setStage(stage - 1);

  const submitForm = () => {
    alert('Form submitted successfully!');
    
  };

  return (
    <div>
      {stage === 1 && (
        <PersonalInfo formData={formData} setFormData={setFormData} nextStage={nextStage} />
      )}
      {stage === 2 && (
        <TravelPreferences
          formData={formData}
          setFormData={setFormData}
          nextStage={nextStage}
          prevStage={prevStage}
        />
      )}
      {stage === 3 && (
        <HealthSafety
          formData={formData}
          setFormData={setFormData}
          prevStage={prevStage}
          submitForm={submitForm}
        />
      )}
    </div>
  );
}

export default App;
