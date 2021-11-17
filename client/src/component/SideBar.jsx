import { React, useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

const CONVERSATION_KEY = "coversation";
const CONTACT_KEY = "contact";

export default function SideBar({ id }) {
  const [activekey, setactivekey] = useState(CONVERSATION_KEY);
  let converSationOpen = activekey === CONVERSATION_KEY;
  const [modalOpen, setmodalOpen] = useState(false);

  function closeModal() {
    setmodalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activekey} onSelect={setactivekey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content
          className="border-right
        overflow-auto flex-grow-1"
        >
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="border-top border-right small p-2">Your Id: {id}</div>

        <Button onClick={ ()=> setmodalOpen(true)}>New {converSationOpen ? "Conversation" : "Contact"}</Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {converSationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
