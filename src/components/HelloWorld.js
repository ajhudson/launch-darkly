import React from 'react';
import { withLDConsumer, useFlags } from 'launchdarkly-react-client-sdk';
import LaunchDarklyFlagsUtils from './../shared/LaunchDarklyFlagsUtils';
import config from '../config';

const HelloWorld = () => {
    const ldFlagUtils = new LaunchDarklyFlagsUtils(useFlags);
    const siteMaintenance = ldFlagUtils.getSiteMaintenanceFlags();

    console.log(siteMaintenance);

    /*
    const { fullSiteMaintenance, partialSiteMaintenance } = useFlags();
    console.log(`full site maintenance: ${fullSiteMaintenance}`);
    console.log(`partial site maintenance: ${partialSiteMaintenance}`);
    */

    return (
       <div>
            <p>This is the hello world component.</p>
            <p>{ config.launchDarklyClientId }</p>
            <p>Full site maintenance page flag: {siteMaintenance.isFullSiteOn ? 'on' : 'off'}</p>
            <p>Partial site maintenance flag: {siteMaintenance.isPartialSiteOn ? 'on' : 'off'}</p>
            <p>Any on: {siteMaintenance.isAnyOn ? "yes" : "no" }</p>
            <p>All on: {siteMaintenance.isAllOn ? "yes" : "no" }</p>
            
       </div> 
    );
}

export default withLDConsumer()(HelloWorld);