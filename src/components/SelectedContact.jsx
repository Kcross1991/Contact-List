import {useState} from 'react'
import {useEffect} from 'react'

// eslint-disable-next-line react/prop-types
function SelectedContact({selectedContactId,setSelectedContactId}){
    const [contact, setContact] = useState({})
    useEffect(()=>{
        async function fetchContact() { 
        try{
            const response = await fetch(
                "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users${selectedContactId}");
                const result = await response.json();
                setContact(result);
                console.log(result)
            } catch (error) {
              console.error(error);
            }
          }
          fetchContact()
        }, [selectedContactId]);
        
        const button =() => {
            setSelectedContactId(null)
        };
    
              return ( 
        <div>
            <table>
              <thead>
                <tr>
                  <th colSpan="3">Contact List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                </tr>
                <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={button}>Back</button>
            </div>
        )
    
              }
 export default SelectedContact