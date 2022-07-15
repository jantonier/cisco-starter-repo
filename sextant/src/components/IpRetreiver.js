import React, { useEffect, useState } from 'react';
import Cardss from './Cardss';
import axios from 'axios';

function IpRetreiver(version) {
    const [ip, setIp] = React.useState(null);
    var baseURL;
    var titulo;
    console.log(version);
    if (version.data == "4") {
        baseURL = "https://api.ipify.org";
        titulo = "My ip v4 is:"
    }
    else {
        baseURL = "https://api64.ipify.org";
        titulo = "My ip v6 is:"
    }

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setIp(response.data);
            console.log(response.data)
        });
    }, []);

    const datas = [{ tittle: { titulo }.titulo, description: { ip }.ip }]

    return <Cardss data={datas[0]} />
}

export default IpRetreiver;