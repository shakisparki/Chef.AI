import { useEffect } from 'react'
import { useState } from 'react'
import { connection } from '../signalRService';
import * as signalR from '@microsoft/signalr';
export default function Recipes() {

    const [chatHistory, setChatHistory] = useState([]);
    const chatElements = chatHistory.map((message, index) => (<li key={index}> {message}</li>));

    useEffect(() => {
        // setup signal R connection
        connection.on("ReceiveMessage", (user, message) => {
            console.log("Message received from " + user + ": " + message);
            setChatHistory(prev => [...prev, `${user}: ${message}`]);

        })
        if (connection.state == signalR.HubConnectionState.Connected || connection.state == signalR.HubConnectionState.Connecting) {
            console.error("Connection is already or being established.");
            return;
        }

        connection.start()
            .then(() => console.log("Connection started"))
            .catch(err => console.error("Error while starting connection: ", err));
        console.log("Connection running");
    }, []);

    useEffect(() => {
        // This effect could be used to fetch initial chat history if needed
        console.log("Chat component mounted");
    }, []);
    function handleSubmit(ea) {
        ea.preventDefault();
        var formData = new FormData(ea.currentTarget);
        var text = formData.get("chatinput");
        if (!text) { return }
        if (connection.state !== signalR.HubConnectionState.Connected) {
            console.error("Connection is not yet established.");
            return;
        }
        connection.invoke("SendMessage", "User1", text) // Replace "User1" with the actual user identifier)
            .then(() => console.log("chat sent to " + text));

        var chatinput = document.getElementById("chatinput")
        chatinput.value = ""
    }   
    return (
        <main>
            {/*Scrollable chat panel*/}
            <div>
                <ul>
                    {chatElements}
                </ul>
            </div>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input id="chatinput" type="text" placeholder="Enter text into chat" aria-label="Chat about Recipes" name="chatinput"/>
                <button type="submit">Send</button>
            </form>
            
        </main>
    )
}