import React, { useContext, createContext, useState, useEffect } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

const ContactContext = createContext();

export const ContactProvider = ({ ...props }) => {
  const value = useContactProvider();
  return <ContactContext.Provider {...props} value={value} />;
};

export const useContactContext = () => {
  return useContext(ContactContext);
};

const useContactProvider = () => {
  const [contact, setContact] = useState({});
  const [filter, setFilter] = useState('');
  const [contactByID, setContactByID]= useState({})

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    try {
      await fetch(URL)
        .then((resp) => resp.json())
        .then((cont) => setContact(cont))
    } catch (e) {}
  };

  const getContactByID = async (id) => {
    await fetch(`${URL}/${id}`)
      .then((resp) => resp.json())
      .then((cont) => setContactByID(cont));
  };

  return {
    contact,
    contactByID,
    setContactByID,
    setContact,    
    getContact,
    getContactByID,
    filter,
    setFilter,
  };
};
