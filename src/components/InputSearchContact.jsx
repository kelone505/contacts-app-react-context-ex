import React from 'react';
import { useContactContext } from '../context/ContactProvider';

const InputSearchContact = () => {
  const { filter, setFilter } = useContactContext();
  
  return (
    <>
      <input
      value={filter}
        name="filter"
        type="text"
        placeholder="Type to search a contact"
        onChange={(e) => {         
          setFilter(e.target.value);
        }}
        
      />
    </>
  );
};

export default InputSearchContact;