import * as signalR from '@microsoft/signalr';

export const connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:7117/signalrhub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    }) // Replace with your hub URL
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();