import React from 'react';
import { useContactContext } from '../context/ContactProvider';
import {Link} from 'react-router-dom' 

const ContactList = () => {
  const { contact,filter} = useContactContext();
  const contactList= (data)=>(    
    data.map((item)=>(
    <li key={item.id}>
    <Link 
     to={`/${item.id}`}
        style={{ cursor: 'pointer', margin: '2rem' }}>
        {item.name}
      </Link>
      </li>      
      ))   
  )    
  return (
    <>        
    <ol>    
      {Array.isArray(contact)?
    filter?contactList(contact.filter((item) =>(            
        item.name.toLowerCase().indexOf(`${filter.toLowerCase()}`) > -1      
  ))):contactList(contact):null  
    } 
    </ol>     
    </>
  );
};

export default ContactList;
