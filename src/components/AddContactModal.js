// AddContactModal.js
import React from 'react';
import ContactForm from './ContactForm';

const AddContactModal = ({ formData, handleChange, handleSaveContact, setFormMode }) => (
  <div className="contact-form">
    <h2>Add Contact</h2>
    <ContactForm
      formData={formData}
      handleChange={handleChange}
      handleSaveContact={handleSaveContact}
      setFormMode={setFormMode}
    />
  </div>
);

export default AddContactModal;