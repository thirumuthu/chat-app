import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../Contexts/ConversationProvider";

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();
  return (
    <ListGroup variant="flush">
      {conversations.map((c, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={c.selected}
        >
          {c.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
