import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../Contexts/ContactProvider";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ListGroup variant="flush">
      {contacts.map((c) => (
        <ListGroup.Item key={c.id}>{c.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
