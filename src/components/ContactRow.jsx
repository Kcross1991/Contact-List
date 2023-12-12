/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function ContactRow({setSelectedContactId,contact}) {
return (
    <tr
    onClick={() => {
        // eslint-disable-next-line react/prop-types
        setSelectedContactId(contact.id);
      }}
    >
    <td>{contact.name}</td>
    <td>{contact.email}</td>
    <td>{contact.phone}</td>
  </tr>
)
}
export default ContactRow;