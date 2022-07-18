import React, { useEffect, useState } from 'react';
import { w3cwebsocket } from 'websocket';
import Cardss from './Cardss';

function LatencyCalculator() {

    const [latency, setLatency] = useState("0");
    let date, serverDate, total = 0;
    const data = { tittle: "Connection Latency:", description: latency + "ms" }

    useEffect(() => {
        const Client = new w3cwebsocket('ws://localhost:55455/');

        Client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        Client.onerror = () => {
            console.log('Connection Error');
        };

        Client.onclose = () => {
            console.log('echo-protocol Client Closed');
        };

        Client.onmessage = (e) => {
            if (typeof e.data === 'string') {
                serverDate = parseInt(e.data, 10);
                date = parseInt(new Date().getTime(), 10);
                total = date - serverDate;
                setLatency(total.toString());
            }
        };

    }, [])


    return <Cardss data={data} />
}

export default LatencyCalculator;