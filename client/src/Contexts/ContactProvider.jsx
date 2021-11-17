import React, { createContext, useContext } from "react";
import useLocalStorage from "../component/hooks/useLocalStorage";

const ContactsContext = createContext();

export function useContacts() {
  return useContext(ContactsContext);
}


export default function ContactProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  function createContact(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
