import React from 'react';
import { withLDConsumer, useFlags } from 'launchdarkly-react-client-sdk';
import SharedFactory from '../../shared/SharedFactory';
import config from '../../config';

const HelloWorld = () => {
    const sharedFactory = new SharedFactory();
    const ldFlagUtils = sharedFactory.createLaunchDarklyFlagsUtils(useFlags);

    console.log("ldFlagUtils");
    console.log(ldFlagUtils);
    
    //const siteMaintenance = ldFlagUtils.getSiteMaintenanceFlags();

    /*
       <div data-testid='hello-world'>
            <p>This is the hello world component.</p>
            <p>{ config.launchDarklyClientId }</p>
            <p>Full site maintenance page flag: {siteMaintenance.isFullSiteOn ? 'on' : 'off'}</p>
            <p>Partial site maintenance flag: {siteMaintenance.isPartialSiteOn ? 'on' : 'off'}</p>
            <p>Any on: {siteMaintenance.isAnyOn ? "yes" : "no" }</p>
            <p>All on: {siteMaintenance.isAllOn ? "yes" : "no" }</p>
       </div> 
        */

    return (
        <></>
    );
}

export default withLDConsumer()(HelloWorld);