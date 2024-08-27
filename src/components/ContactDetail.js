// ContactDetails.js
import React from 'react';

const ContactDetails = ({ formData, setFormMode }) => (
  <div className="contact-detail">
    <h2>Contact Details</h2>
    <p><strong>First Name:</strong> {formData.firstName}</p>
    <p><strong>Last Name:</strong> {formData.lastName}</p>
    <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Address:</strong> {formData.address}</p>
    <button onClick={() => setFormMode('')}>Back to List</button>
  </div>
);

export default ContactDetails;