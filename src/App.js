import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';

// const contactsArr = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

class App extends Component {

  state = {
    contacts: [
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }

    ],
    filtered: ''
  }

  formSubmithandler = (formData) => {

    console.log(this.state.contacts.some(contact =>contact.name === formData.name))

    const addContact = { ...formData, id: uuidv4() };

    this.setState(prevState => ({

      contacts: [addContact, ...prevState.contacts]

    }))

  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  filtеredValue = evt => {
      this.setState({
      filtered: evt.currentTarget.value
    })
  }

  

  render() {



    const filteredContactToLowerCase = this.state.filtered.toLocaleLowerCase();

    const filteredContactList = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filteredContactToLowerCase),
    )

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmithandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filtered} onChange={this.filtеredValue}/>
        <ContactList
          contactsArr={filteredContactList}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}



export default App;
