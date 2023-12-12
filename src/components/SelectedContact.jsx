import {useState} from 'react'
import {useEffect} from 'react'


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
                            <th colSpan = "3">Contact Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
       
        <h3>Name:{contact.name}</h3> 
        <div>Email:{contact.email}</div>
        <div>Phone:{contact.phone}</div>
        </tr>
            </tbody>
            </table>
            <button onClick={button}>Go Back</button>
        </div>
       
        )
    
              }
 export default SelectedContact