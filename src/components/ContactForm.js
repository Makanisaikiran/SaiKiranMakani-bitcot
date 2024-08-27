// ContactForm.js
import React from 'react';

const ContactForm = ({ formData, handleChange, handleSaveContact, setFormMode }) => (
  <form onSubmit={handleSaveContact}>
    <label>
      First Name:
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Last Name:
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Phone Number:
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Address:
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
    </label>
    <button type="submit">Save</button>
    <button type="button" onClick={() => setFormMode('')}>Cancel</button>
  </form>
);

export default ContactForm;