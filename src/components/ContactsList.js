// ContactList.js
import React from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const ContactList = ({ contacts, filteredContacts, handleViewContact, handleEditContact, handleDeleteContact }) => (
  <div className="contacts-list">
    <h2>Contact List</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>{index + 1}</td>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phoneNumber}</td>
            <td>
              <button onClick={() => handleViewContact(contact)}><FaEye /></button>
              <button onClick={() => handleEditContact(contact)}><FaEdit /></button>
              <button onClick={() => handleDeleteContact(contact.id)}><FaTrash /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ContactList;
