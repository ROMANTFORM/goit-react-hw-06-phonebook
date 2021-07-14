import React from 'react';
import './App.css';

// Components
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';


function App() {
  
// console.log(store.getState().contacts)
  // componentDidMount() {
  //   const storageContacts = localStorage.getItem('contacts');
  //   const parseStorageContacts = JSON.parse(storageContacts);
  //   if(parseStorageContacts) this.setState({ contacts: parseStorageContacts });
    
  // };
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('state is update!');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // };
    
  return (
    <div className="Container">
         <h2>Phonebook</h2>
        <ContactForm />
        
        <h2>Contacts</h2>
        
        <Filter />
        
        <ContactList />
        
      </div>
  ) 
};

export default App;