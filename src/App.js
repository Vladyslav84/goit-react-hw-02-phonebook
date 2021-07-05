import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList'
import SignUpForm from './components/SingUpForm'

// class App extends Component {

// state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: ''
// }


// render() {
//   const contactsArr = this.state.contacts;
  
// return (
// <>
//      <h1>Phonebook</h1>
//     <ContactForm />
//     <h2>Contacts</h2>
//     <Filter />
//     <ContactList
//       contactsArr = {contactsArr}
//     />
//     <SignUpForm />
// </>
// );
// }
// }
class App extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return <input type="text" value={value} onChange={this.handleChange} />;
  }
}


export default App;
