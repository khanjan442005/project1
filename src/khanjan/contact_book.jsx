import React, { useState } from "react";

function ContactBook() {
  const [contacts, setContacts] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    if (!fname || !lname || !phone) {
      alert("All fields are required");
      return;
    }

    setContacts([
      ...contacts,
      {
        id: Date.now(),
        fname,
        lname,
        phone,
        show: false,
      },
    ]);

    setFname("");
    setLname("");
    setPhone("");
  };

  const toggleView = (id) => {
    setContacts(
      contacts.map((c) =>
        c.id === id ? { ...c, show: !c.show } : c
      )
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="card">
      <h2>Contact Book</h2>

      <input placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
      <input placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
      <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <br />
      <button onClick={addContact}>Add Contact</button>

      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            <strong>{c.fname}</strong>
            <button onClick={() => toggleView(c.id)}>View</button>
            <button onClick={() => deleteContact(c.id)}>Delete</button>

            {c.show && (
              <div>
                {c.lname} - {c.phone}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactBook;
