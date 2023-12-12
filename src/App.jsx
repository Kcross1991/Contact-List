import './App.css';
import { useState } from 'react';
import ContactList from './components/ContactList.jsx';
import SelectedContact from "./components/SelectedContact.jsx";



export default  function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <div>
     {selectedContactId ? (
        <SelectedContact selectectedContactId={selectedContactId} setSelectedContactId={selectedContactId}/>
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}


