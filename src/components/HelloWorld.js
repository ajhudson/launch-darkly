import React from 'react';
import { withLDConsumer, useFlags } from 'launchdarkly-react-client-sdk';
import config from '../config';

const HelloWorld = () => {

    const { maintenancePage } = useFlags();

    console.log(maintenancePage);

    return (
       <div>
            <p>This is the hello world component.</p>
            <p>{ config.launchDarklyClientId }</p>
            <p>Maintenance page flag: {maintenancePage ? 'on' : 'off'}</p>
       </div> 
    );
}

export default withLDConsumer()(HelloWorld);