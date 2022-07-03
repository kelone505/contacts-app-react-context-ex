import React from 'react';
import {ContactProvider} from './context/ContactProvider'
import {
  BrowserRouter as Router,  
  Route,  
  Routes
} from 'react-router-dom';
import Card from './components/Card';
import Contact from './components/Contact';


function App() {    
  return (
    <ContactProvider>
      <Router>                 
      <Routes>    
        <Route exact path="/" element={<Contact/>}></Route>  
        <Route path="/:id" element={<Card/>}>          
          </Route>        
      </Routes>
      </Router>
      </ContactProvider>
  )
}

export default App