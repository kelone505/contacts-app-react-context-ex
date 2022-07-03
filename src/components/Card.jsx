import React, { useEffect } from 'react';
import { useContactContext } from '../context/ContactProvider';
import {useParams} from 'react-router-dom'
const Card = () => {
  const {id}=useParams()  
  const { contactByID, getContactByID } = useContactContext();

  useEffect(() => {
    getContactByID(id)    
  }, []);

  return (
    <>
    <div><a href='/'>Go back</a></div>
      <div>
        <h2>{contactByID.name}</h2>
        <h3>Email: {contactByID.email}</h3>
        <h3>Phone: {contactByID.phone}</h3>
        <h3>Website: {contactByID.website}</h3>
      </div>
    </>
  );
};
export default Card;
