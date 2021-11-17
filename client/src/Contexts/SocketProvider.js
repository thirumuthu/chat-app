import React,{useContext, useEffect, useState} from 'react'
import {io} from 'socket.io-client';

const SocketContext = React.createContext()

export function  useSocket(){
    return useContext(SocketContext);
}

export default function SocketProvider({ id,children}) {

    const [socket, setSocket] = useState()
    

    useEffect(() => {
        const newsocket = io('http://localhost:5000',
            { query: {id} });
        setSocket(newsocket)
        return () => newsocket.close();
    },[id])
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
