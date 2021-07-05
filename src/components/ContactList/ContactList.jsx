import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({contactsArr}) => {
    return (
  <ul className={s.contactList}>
    {contactsArr.map((user) => (
        <li key={user.id} >
            <span>{user.name} {user.number}</span>
        <button type='button'>Delete</button>
    </li>
      ))}
   </ul>
    )
}

export default ContactList;