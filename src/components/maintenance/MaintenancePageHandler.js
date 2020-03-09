import React from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import MaintenancePage from './MaintenancePage';

const MaintenancePageHandler = ({children}) => {
    const { fullSiteMaintenance, partialSiteMaintenance } = useFlags();
    let caption = "";

    if (fullSiteMaintenance) {
        caption = 'full site maintenance';
    } else if (partialSiteMaintenance) {
        caption = 'partial site maintenance'
    }

    const toRender = fullSiteMaintenance || partialSiteMaintenance ? <MaintenancePage caption={caption} /> : children;

    return (
        <>{ toRender }</>
    );
};

export default MaintenancePageHandler;