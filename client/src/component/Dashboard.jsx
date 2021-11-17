import React from "react";
import { useConversations } from "../Contexts/ConversationProvider";
import OpenConversation from "./OpenConversation";
import SideBar from "./SideBar";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <SideBar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
