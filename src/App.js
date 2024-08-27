import React, { useState } from 'react';
import './App.css';
import AddContactModal from './components/AddContactModal';
import ContactDetails from './components/ContactDetail';
import ContactList from './components/ContactsList';
import SearchBar from './components/SearchBar';
import ContactForm from './components/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890', email: 'john@example.com', address: '123 Elm St' },
    { id: 2, firstName: 'Buincy', lastName: 'Hanson', phoneNumber: '5785664545', email: 'hanson@gmail.com', address: '456 Oak St' }
  ]);
  const [formMode, setFormMode] = useState(''); // 'view', 'edit', or 'add'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      address: '',
    });
    setFormMode('add');
  };

  const handleEditContact = (contact) => {
    setFormData(contact);
    setFormMode('edit');
  };

  const handleViewContact = (contact) => {
    setFormData(contact);
    setFormMode('view');
  };

  const handleSaveContact = (event) => {
    event.preventDefault();
    if (formMode === 'add') {
      setContacts([...contacts, { ...formData, id: Date.now() }]);
    } else if (formMode === 'edit') {
      setContacts(contacts.map(contact => contact.id === formData.id ? formData : contact));
    }
    setFormMode('');
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phoneNumber.includes(searchTerm)
  );

  return (
    <div className="app">
      <header>
        <h1>Contacts</h1>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <button onClick={handleAddContact}>Add Contact</button>
      </header>
      
      {formMode === '' && (
        <ContactList
          contacts={contacts}
          filteredContacts={filteredContacts}
          handleViewContact={handleViewContact}
          handleEditContact={handleEditContact}
          handleDeleteContact={handleDeleteContact}
        />
      )}

      {formMode === 'add' && (
        <AddContactModal
          formData={formData}
          handleChange={handleChange}
          handleSaveContact={handleSaveContact}
          setFormMode={setFormMode}
        />
      )}

      {formMode === 'edit' && (
        <div className="contact-form">
          <h2>Edit Contact</h2>
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            
            handleSaveContact={handleSaveContact}
            setFormMode={setFormMode}
          />
        </div>
      )}

      {formMode === 'view' && (
        <ContactDetails formData={formData} setFormMode={setFormMode} />
      )}
    </div>
  );
};

export default App;