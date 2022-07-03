import React, { useEffect } from 'react'
import InputSearchContact from './InputSearchContact'
import ContactList from './ContactList'
import { useContactContext } from '../context/ContactProvider'

const Contact = ()=>{
  const {setContactByID}= useContactContext()

  useEffect(()=>{
    setContactByID({})
  },[]) 

  return(
      <>
      <InputSearchContact/>
      <div style={{borderStyle:'solid',margin:'2rem'}}>
      <h2>List of contacts</h2>
      <ContactList/>          
      </div>
      </>
  )
}
export default Contact