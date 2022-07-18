import React, { useEffect, useState } from 'react';
import Cardss from './Cardss';
import axios from 'axios';

function IpRetreiver(version) {
    const [ip, setIp] = useState(null);
    let baseURL, tittle;

    if (version.data === "4") {
        baseURL = "https://api.ipify.org";
        tittle = "My ip v4 is:"
    }
    else {
        baseURL = "https://api64.ipify.org";
        tittle = "My ip v6 is:"
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setIp(response.data);
        });
    }, []);

    const data = { tittle, description: ip }

    return <Cardss data={data} />
}

export default IpRetreiver;