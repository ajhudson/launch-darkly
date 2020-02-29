import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import config from './config';

const HelloWorld = ({flags}) => {
    return (
       <div>
           <p>{ config.launchDarklyClientId }</p>
           {
               flags.maintenancePage ? <p>Flag is on</p> : <p>Flag is off</p>
           }
       </div> 
    );
}

export default withLDConsumer()(HelloWorld);