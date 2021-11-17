import { Login } from "./Login";
import useLocalStorage from "./hooks/useLocalStorage";
import  Dashboard  from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactProvider from "../Contexts/ContactProvider";
import ConversationsProvider from "../Contexts/ConversationProvider";
import SocketProvider from "../Contexts/SocketProvider";

export const App = () => {
    const [id, setId] = useLocalStorage('id');

    const dashboard = (
        <SocketProvider id={id}>
          <ContactProvider>
            <ConversationsProvider id={ id}>
             <Dashboard id={id}/>
            </ConversationsProvider>
        </ContactProvider>
        </SocketProvider>
        
    )
    return id ? dashboard:
            <Login onIdSubmit={setId} />

}