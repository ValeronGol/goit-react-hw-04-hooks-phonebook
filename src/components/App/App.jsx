import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Conteiner } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmit = data => {
    this.setState(prevState => {
      const newContact = {
        id: `${uuidv4()}`,
        name: data.name,
        number: data.number,
      };
      const duplicateContact = prevState.contacts.find(contact => {
        return contact.name === data.name;
      });
      if (duplicateContact) {
        alert(`${data.name} вже є у телефонній книзі!!!`);
        return { ...prevState };
      }
      return this.setState({
        ...this.state,
        contacts: [...prevState.contacts, newContact],
      });
    });
  };
  deleteContact = contactId => {
    let newContacAtfterDel = this.state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({
      ...this.state,
      contacts: [...newContacAtfterDel],
    });
  };

  setFilterToState = filterData => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };

  filterContact = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.formSubmit} />
        <h1>Contacts</h1>
        <Filter setFilterToState={this.setFilterToState} />
        <ContactList
          contacts={this.filterContact(this.state.contacts)}
          onDelete={this.deleteContact}
        />
      </Conteiner>
    );
  }
}
export default App;
