import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import TravelPreferences from './components/TravelPreferences';
import HealthSafety from './components/HealthSafety';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomModal from './components/CustomModal';
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

  const [showModal, setShowModal] = useState(false);

  const nextStage = () => setStage(stage + 1);
  const prevStage = () => setStage(stage - 1);

  const submitForm = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
   
  };

  return (
    <div className="app-container">
      <Header />
      <main>
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
      </main>
      <Footer />
      <CustomModal show={showModal} onClose={closeModal} />
    </div>
  );
}

export default App;
