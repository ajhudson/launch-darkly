import React from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import StoredFeatures from '../../shared/StoredFeatures';

const Features = () => {

    const receivedFeature = StoredFeatures.getFeature();
    const flagUtils = StoredFeatures.getFlagsUtils(useFlags);
    const flags = flagUtils.getSiteMaintenanceFlags();


    return (
        <div id='features'>
            <p>Received feature: { receivedFeature }</p>
            {
                Object.keys(flags).map(k => <p key={ k }>{ k }: { flags[k] ? 'on' : 'off' }</p>)
            }
        </div>
    )
}

export default Features;