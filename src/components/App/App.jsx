import React, { useEffect, useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Conteiner } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contacts'))) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = dataForm => {
    if (
      contacts.find(el => el.name.toLowerCase() === dataForm.name.toLowerCase())
    ) {
      alert(`${dataForm.name} is already in contacts.`);
    } else {
      return setContacts(prevContacts => [...prevContacts, dataForm]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== contactId));
  };

  const setFilterToState = filterData => {
    setContacts([...contacts]);
    setFilter(`${filterData}`);
  };

  const filterContact = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <Conteiner>
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={formSubmit} />
      <h1>Contacts</h1>
      <Filter setFilterToState={setFilterToState} />
      <ContactList
        contacts={filterContact(contacts)}
        onDelete={deleteContact}
      />
    </Conteiner>
  );
}
