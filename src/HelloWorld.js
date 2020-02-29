import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const HelloWorld = ({flags}) => {
    return flags.maintenancePage ? <div>Flag on</div> : <div>Flag off</div>;
}

export default withLDConsumer()(HelloWorld);