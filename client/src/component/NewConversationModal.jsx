import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../Contexts/ContactProvider";
import { useConversations } from "../Contexts/ConversationProvider";

export default function NewConversationModal({ closeModal }) {
  const { contacts } = useContacts();
  const { createConversations } = useConversations();
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    createConversations(selectedContactIds);
    closeModal();
  }
  function handleCheckBoxchange(contactId) {
    setSelectedContactIds((prevContactIds) => {
      if (prevContactIds.includes(contactId)) {
        return prevContactIds.filter((prevId) => contactId !== prevId);
      } else {
        return [...prevContactIds, contactId];
      }
    });
  }
  return (
    <>
      <Modal.Header closeButton>New conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => {
                  handleCheckBoxchange(contact.id);
                }}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
